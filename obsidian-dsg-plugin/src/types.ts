import {
	TFile,
} from "obsidian";

export type Kubos = {

	internals : string[],
	externals : string[],
	internals_url? : string[],
	externals_url? : string[],
}

export class SGFile extends TFile {
	raw: string
	// object?: { [key:string] : string }
	// cid?: string
}


export interface SGContentItem {

	author: string,
	publication:  string,
	sgId : string,
	post_type: string,
	args: string,
	tags: string[],
	categories: string[],
	parent: string,
	creation_date: string,
	modified_date: string,
	thumbnail: string,
	title: string,
	content: string

}

export interface SGTask {

	slug: string,
	author: string,
	payload: any,
	post_type: string,
	publication: string
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

export type DSGPublicationInput = {
	domains: TuDsgDomain[],
	governor: string,
	mapping : string,
	name : string,
	table: string,
	type : string,
	repo : string
};