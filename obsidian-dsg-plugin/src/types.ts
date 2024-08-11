import {
	TFile,
} from "obsidian";


export class SGFile extends TFile {
	raw: string
}


export interface SGContentItem {

	args: string,	
	categories: string[],
	content: string
	creation_date: string,
	id: string,
	modified_date: string,
	parent: string,
	post_type: string,
	slug: string,
	tags: string[],
	title: string,
	thumbnail: string
}

export interface SGTask {

	slug: string,
	// author: string,
	payload: any,
	post_type: string,
	// publication: string
}

type TuDsgDns = {

	custodian: string,
	item_id: string,
	auth_key: string,
}

type TuDsgDomain = {

	url: string,
	dns: TuDsgDns
}

export type DSGAuthorInput = {
	name : string,
	repository: string,
	content_mappings: string
};

// export type DSGPublicationInput = {
// 	assets: string,
// 	contract: string,
// 	domains: TuDsgDomain[],
// 	governor: string,
// 	mapping : string,
// 	name : string,
// 	table: string,
// 	type : string,
// 	templates : string
// };

type DSGCollection = {
    source: string,
    key: string
    query: string
}

type DSGTemplate = {
    reference: string
    file: string
    path: string
    collections: DSGCollection[]
}

export type DSGTable = {
    id: string
    gateway: string
}

export type  DSGPublication = {
    
    assets: string
	contract: string
	controller: string
    domains: any[]
    mapping: DSGTemplate[]
    name: string
	rpc: string
	storage: string
    templates: string
    table: DSGTable
}
