import { MarkdownView, Notice, TFile } from 'obsidian';
import { DSGPublication } from './types';

import path from 'path';
import fs from 'fs';
import { IMainController } from './main.ctrlr';
import { ABI_PUBLICATION } from './contracts/abi_publication';
import { publicationConfig } from './publication.factory';
import { ABI_SAFE_FACTORY } from './contracts/abi_safe_factory';
import { DotSpinner } from './ui/spinner.service';

import { simpleGit, SimpleGit, CleanOptions } from 'simple-git';
import { ethers } from 'ethers';
import { ABI_PUBLICATION_FACTORY } from './contracts/abi_publication_factory';
import { JSON_NPUBLICATION } from './contracts/json_npublication';
import { JSON_GNOSIS_SAFE } from './contracts/json_gnosis_safe';
import { getFrontMatter, updateFrontMatter } from './frontmatter';
import { verifyNPublication, verifySafeContract } from './contract_verification';


export interface IPublicationCtrlr {

    main: IMainController,
    new: (name: string, members: string[]) => void,
    update: () => void,
    whitelistAuthor: (publication: string, safe_address: string, author: string) => void
}


export class PublicationController implements IPublicationCtrlr {

    main: IMainController
    git: SimpleGit

    constructor(main: IMainController) {
        this.main = main
        this.git = simpleGit().clean(CleanOptions.FORCE);

        console.log(this.main.plugin.settings);
    }

    async initFile(name: string) {

        const filePath = `publications/${name}.publication.md`;
        let content = `
\`\`\`button 
name update 
type command 
action 0xODSG: update publication 
`; 
        
        try {
            const fileExists = await this.main.plugin.app.vault.adapter.exists(filePath);
            if (!fileExists) {
                
                let file = await this.main.plugin.app.vault.create(filePath, content);
        
                if (file != null) {
                    this.displayFile(file);
                    await this.main.plugin.app.fileManager.processFrontMatter( file, (frontmatter) => {
                        frontmatter["name"] = name;
                        frontmatter["controller"] = "";
                        frontmatter["contract"] = "";
                        frontmatter["chain_id"] = this.main.plugin.settings.chain_id;
                        frontmatter["domains"] = [];
                        frontmatter["db_gateway"] = this.main.plugin.settings.db_gateway;
                        frontmatter["db_table"] = "";
                        frontmatter["rpc"] = this.main.plugin.settings.db_rpc;
                        frontmatter["storage"] = this.main.plugin.settings.storage;
                        frontmatter["config"] = "";
                    })
                }
                new Notice(`${filePath} created successfully.`);

                return file;
            } else {
               // file = await this.main.plugin.app.vault.getFileByPath(filePath);
                new Notice(`${name} already exists.`);
            }

        } catch (error) {
            console.error(`Error creating file: ${error}`);
            new Notice(`Failed to create file: ${error.message}`);
        }

        
    }

    async displayFile(file: TFile)  {

        if (file) {
            const leaf = this.main.plugin.app.workspace.getLeaf(false);
            await leaf.openFile(file);
        } else {
            new Notice('File not found!');
        }
    }

    async deploySafeContract(members: string[]): Promise<string> {

      //  const members = [this.main.oxo.ctrlr.author.eoa];
        const treshold = 1;

        const method = "createSafe";
        const args = [ members, treshold];
        const s = await this.main.oxo.ctrlr.eth.deployTroughFactory(this.main.plugin.settings.safe_factory, ABI_SAFE_FACTORY, method, args);
		console.log(s);
        return s;
    }

    async deployPublicationContract(safe_address: string, config_cid: string, archive_cid: string) {

        const pubfactory_address = this.main.plugin.settings.pub_factory;
        const method = "createPublication";
        const args = [ safe_address, config_cid, archive_cid];

        return await this.main.safe.tx(safe_address, pubfactory_address, ABI_PUBLICATION_FACTORY, method, args, this.main.safe.parse_contract_address);
    }

    async updatePublicationContract(safe_address: string, pub_contract: string, method: string, config_cid: string ) {

        const args = [config_cid];
        return await this.main.safe.tx(safe_address, pub_contract, ABI_PUBLICATION, method, args, (hash: string) => {});
    }

    // config_cid: string, archive_cid: string

    async new(name: string, members: string[]) {

        const dev_folder = this.main.plugin.settings.dev_folder + '/' + name;

        try {
            fs.mkdirSync(dev_folder, { recursive: true });
          } catch (err) {
            console.error('Failed to create directory:', err);
          }

        await this.git.clone("https://github.com/Autonomous-Times/default_dev_folders.git", dev_folder);

        const file = await this.initFile(name);

        if(file) {
        
            this.displayFile(file);
            const spinner = new DotSpinner(this.main.plugin.app, file, "controller");
            const controller = await this.deploySafeContract(members);
            updateFrontMatter(this.main.plugin.app, file, "controller", controller);
            spinner.stop();
            spinner.start(file,"db_table")
            let table_id = null;
            try {
                table_id = await this.main.tableland.create_table();
                await this.main.tableland.accessToNPrinter(table_id);
            } catch(err) {
                spinner.stop();
                console.log(err);
            }
            if (table_id != null) {
                updateFrontMatter(this.main.plugin.app, file, "db_table", table_id);
                spinner.stop();

                const fm: any = await getFrontMatter(this.main.plugin.app, file);
                const assets = await this.main.oxo.ctrlr.ipfs.addRecursive(dev_folder + '/assets');
                const templates = await this.main.oxo.ctrlr.ipfs.addRecursive(dev_folder + '/templates');
                const archive_cid = await this.main.oxo.ctrlr.ipfs.addRecursive(dev_folder + "/public");
                console.log("archivecid:" + archive_cid);
                spinner.start(file, "config")
                const config = publicationConfig(dev_folder, fm, assets, templates);
                const config_cid = await this.main.oxo.ctrlr.ipfs.add(config);
                updateFrontMatter(this.main.plugin.app, file, "config", config_cid);
                spinner.stop();

                spinner.start(file, "contract")
                const contract = await this.deployPublicationContract(controller, "0", archive_cid);
                updateFrontMatter(this.main.plugin.app, file, "contract", contract);
                spinner.stop();

                await verifyNPublication(this.main,file, contract);
                await verifySafeContract(this.main, controller, members)

                this.update()

            }
        }
	}


   

    async whitelistAuthor(pub_address: string, safe_address: string, author: string) {

        console.log(pub_address);
        console.log(safe_address);
        console.log(author);
        const method = "whitelist";
        const args = [author];

        const response  = await this.main.safe.tx(safe_address, pub_address, ABI_PUBLICATION, method, args, (pub_address: string) => pub_address);

        console.log(response);
    }

    async update() {

		const activeLeaf = this.main.plugin.app.workspace.getLeaf();
		if (activeLeaf.view instanceof MarkdownView) {
			
			const file = activeLeaf.view.file;
			if (file instanceof TFile) {

                const spinner = new DotSpinner(this.main.plugin.app, file, "config");

                const fm: any = await getFrontMatter(this.main.plugin.app, file);
                const dev_folder = this.main.plugin.settings.dev_folder + '/' + fm.name
                
                const assets = await this.main.oxo.ctrlr.ipfs.addRecursive(dev_folder + '/assets');
                const templates = await this.main.oxo.ctrlr.ipfs.addRecursive(dev_folder + '/templates');
                const config = publicationConfig(dev_folder, fm, assets, templates);
                const config_cid = await this.main.oxo.ctrlr.ipfs.add(config);

                await this.updatePublicationContract(fm.controller, fm.contract, "updateConfig", config_cid);

                spinner.stop();
                updateFrontMatter(this.main.plugin.app, file, "config", config_cid);
			}
		}
	}

    

    

    // async bulkRender(pubName: string, post_type: string, app: App) {

    //     console.log('readying for bulk render');

    //     let publicationLink = pubName + ".publication";
	
    //     const publication_cid = await followLink("config", publicationLink, app);
    //     const archive_cid = await followLink("archive", publicationLink, app);

    //     const new_archive_cid = await _bulkRender(publication_cid, post_type, archive_cid);

    //     if(new_archive_cid == undefined) {
	// 		throw Error ("empty data returned ")
	// 	}

    //     await saveRootDirectly(new_archive_cid, "", pubName, app);
    //     await localhost(new_archive_cid)
    // }
}




