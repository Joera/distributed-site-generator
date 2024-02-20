type TuDsgDns = {

	custodian: string,
	item_id: string,
	auth_key: string,
}

type TuDsgDomain = {

	url: string,
	dns: TuDsgDns
}

export type TuDsgPublication = {
	assets : string,
	domains: TuDsgDomain[],
	governor: string,
	mapping : string,
	name : string,
	templates : string
};