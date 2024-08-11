import { FileSystemAdapter, TAbstractFile } from 'obsidian';
import { DSGAuthorInput, SGContentItem, SGTask } from './types';
import { parseNote } from './note.factory';
import DSG from './main';
import { parseAuthor } from './author.factory';
import { ABI_NPRINTER } from './contracts/abi_nprinter';
import { IPublicationCtrlr, PublicationController } from './publication.ctrlr';
import { TablelandProvider } from './tableland';
import { GnosisSafeService, IGnosisSafeService } from './safe.service';
import { readdirSync, statSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const basePath = (app.vault.adapter as any).basePath;
const NPRINTER = "0x686b455ffe7acd5173C4AE3137d7E87cd0120380";

export interface IMainController {
    basePath: string,
    plugin: DSG,
	oxo: any,
	publication: IPublicationCtrlr,
	safe: any,
	tableland: any,
	updateAuthor: (_file: TAbstractFile) => Promise<void>,
	proposeNote: (_file: TAbstractFile) => Promise<void>,
	bulkUpload: () => Promise<void>,
}

export class MainController implements IMainController {

	basePath: string;
	oxo: any;
	plugin: DSG;
	publication: IPublicationCtrlr;
	safe: IGnosisSafeService;
	tableland: any;
	
    constructor(plugin: DSG) {

		this.basePath = basePath,
		this.plugin = plugin,
		this.publication = new PublicationController(this)
		this.safe = new GnosisSafeService(this);
		this.tableland = new TablelandProvider(this);
		
		setTimeout( () => {
			// @ts-ignore
			this.oxo = plugin.app.plugins.plugins["0xobsidian"];
			console.log(this.oxo);
		}, 1000);

	}

	async updateAuthor(_file: TAbstractFile) {

		const file = this.plugin.app.vault.getFileByPath(_file.path);
		if (file != null) {
			let author: DSGAuthorInput | null = await parseAuthor(this, file);
			if(author != null) {
				// const cid_for_mapping = await pinFile("mapping", author.content_mappings);
    			// author.content_mappings = cid_for_mapping;
				// const cid = await writeAndUpload("author", author);
				// console.log(cid);

				// await this.plugin.app.fileManager.processFrontMatter( file, (frontmatter) => {
				// 	frontmatter["config"] = cid;
				// })
			}
		}
	}

    async proposeNote(_file: TAbstractFile) {

		const file = this.plugin.app.vault.getFileByPath(_file.path);
		if (file != null) {
			// let publicationLink: string = "";
			// await this.plugin.app.fileManager.processFrontMatter( file, (frontmatter) => {
			// 	publicationLink = frontmatter.publication;
			// })
			let publication: string = "";
			let item: SGContentItem | null = await parseNote(this, file);
			if(item != null) {
				// console.log(item);
				// const archive_cid = await followLink("archive", publicationLink, this.plugin.app);
				const cid = await this.oxo.ctrlr.ipfs.add(item);
				
				await this.plugin.app.fileManager.processFrontMatter( file, (frontmatter) => {
					frontmatter["cid"] = cid;
					publication = frontmatter["publication"]
				});

				const args = [
					publication,
					cid
				]

				const method = "makeOffer";

				const s = await this.oxo.ctrlr.eth.genericTx(NPRINTER, ABI_NPRINTER, method, args);
				
				console.log(s);

				// can nprinter make a t confirming render, possibly proofs of hosting, storage??  

				// const task: SGTask = await createTask(item);
				// console.log(task);
			    // const { new_archive_cid, url } = await render(task, archive_cid)
				// console.log(new_archive_cid);
				// // vanaf hier staat t uit 
				// await saveRoot(this, new_archive_cid, file);
				// await localhost(new_archive_cid)
				// await includeUrl(this, url,file)

			}
		}    
    }

	async bulkUpload() {

        console.log('readying for bulk upload');

        function deepGetDirectories(distPath: string) {
            return readdirSync(distPath).filter( (file) =>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {
                return statSync(distPath + '/' + file).isDirectory();
            //@ts-ignore
            }).reduce((all, subDir) => {
                return [...all, ...readdirSync(distPath + '/' + subDir).map(e => subDir + '/' + e)]
            }, []);
        }

        const pubName = "unamore";
        const adapter = this.plugin.app.vault.adapter as FileSystemAdapter;
		const basePath = adapter.getBasePath();
        const path =  basePath + "/" + pubName;

        let tasks: SGTask[] = [];
        const fileNames = deepGetDirectories(path);

        // const kubos = await gatherKubos();

		const db = await this.tableland.init();
		const table = "nprinter_content_421614_915";

		const sql_query = `INSERT INTO ${table} (id, title, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        for (let fileName of fileNames.slice(201,300)) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

            const file = await this.plugin.app.vault.getFileByPath(pubName + "/" + fileName);
			if (file) {
			
				let item: SGContentItem | null = await parseNote(this, file);

				let ipfs_item = {

					title: item.title,
					content:item.content,
					thumbnail: item.thumbnail,
					creation_date: item.creation_date,
					modified_date: item.modified_date
				}

				let content_cid = await this.oxo.ctrlr.ipfs.add(ipfs_item);

				let db_item = {
				
					id: item.id, 
					title: item.title,
					slug: item.slug,
					_owner: "0x0", 
					publication: "unamore",
					author: "Unamore",
					post_type: item.post_type,
					tags: item.tags.join(","),
					categories: item.categories.join(","),
					parent: item.parent,
					creation_date: item.creation_date,
					modified_date: item.modified_date,
					content_cid: content_cid
				}

				const records = await db.prepare(`SELECT * from ${table} WHERE id = '${db_item.id}';`).all();

				if (records.results.length <  1) {

					await this.tableland.insert(db_item, sql_query, db)

				} else {

					await this.tableland.update(db_item, table, db);
				}
				
			}
         
        }
        
        console.log(tasks);
    
        // const res = await _bulkUpload(tasks)
        
        // console.log(res);
    }

}
