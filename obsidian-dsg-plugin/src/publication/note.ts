import {
	FileManager,
	MarkdownView,
	Vault,
	Workspace,
} from "obsidian";
	
import { DSGAuthorInput, DSGPublicationInput, SGFile } from "../types";

import * as YAML from 'yaml'
import { Kubos} from "../types";


export const _parseAuthor =  async (file: SGFile, vault: Vault) : Promise<DSGAuthorInput> =>   {

	const fileContent = await vault.read(file)

	let frontmatter_str = fileContent.split("---")[1];
	let properties: { [key: string] : string };

	if (frontmatter_str == undefined) {
		throw Error("properties incorrect");
	}
		
	properties = YAML.parse(frontmatter_str);

	return  {
		name : properties.name,
		repository: properties.repository,
		content_mappings : properties.mapping
	}
}

export const _parsePublication =  async (file: SGFile, vault: Vault) : Promise<DSGPublicationInput> =>   {

	const fileContent = await vault.read(file)

	let frontmatter_str = fileContent.split("---")[1];
	let properties: { [key: string] : string };

	if (frontmatter_str == undefined) {
		throw Error("proporties incorrect");
	}
		
	properties = YAML.parse(frontmatter_str);

	return  {
		
		assets: properties.assets,
		domains : [],
		governor: properties.governor,
		mapping : properties.mapping,
		name : properties.name,
		table: properties.table,
		templates: properties.templates,
		type : properties.type,
		
	}
}

export const insertPubCid = async (workspace: Workspace, cid: string, fileManager: FileManager) : Promise<string> => {

	let file = workspace.getActiveFile();

	if (file == null) return cid;
	await fileManager.processFrontMatter( file, (frontmatter) => {
		frontmatter["config"] = cid;
	})

	return cid;
}



// export const _uploadMapping = async (authInput: any, kubos: Kubos):  Promise<any> => {



// 	const cids: string[] = [];

// 	if (kubos.externals_url != undefined) {

// 		for (let kubo of kubos.externals_url) {
// 			cids.push(await filePut(authInput.content_mappings, kubo));
// 		}
// 	}

// 	authInput.content_mappings = cids[0]  
		
// 	return authInput;

// }


