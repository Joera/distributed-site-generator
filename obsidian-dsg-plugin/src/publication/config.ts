import { readFile } from "fs/promises";
import { DSGAuthorInput, DSGPublicationInput } from "./note";
import { dagPut, filePut } from "./ipfs";
import * as fs from 'fs';
import { Kubos } from "src/types";

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

type DSGTable = {
    id: string
    gateway: string
    owner: string
}

export type  DSGPublication = {
    name: string
    governor: string
    domains: any[]
    assets: string
    table: DSGTable
    templates: string
    mapping: DSGTemplate[]
}

export const publicationConfig = async (pubInput: DSGPublicationInput) :  Promise<DSGPublication> => {
  
    let content = fs.readFileSync(pubInput.mapping, "utf8");

    let domain = {
        url: "unamore.publikaan.nl",
        dns: {
            custodian: "digitalocean",
            item_id: "xxx",
            auth_key: "xxx"
        }
    }

    let table : DSGTable = {
        id: pubInput.table,
        gateway: "https://arb-sepolia.g.alchemy.com/v2/jix2rYwoEdC5REqw_Ckzcsn57bLjRAcj",
        owner: "0xA416F7CBd3b3D602f6168a577a32BD9e99566521"
    }

   return  {
        assets: pubInput.assets,
        name: pubInput.name,
        governor: pubInput.governor,
        domains: [domain],
        table,
        templates: pubInput.templates,
        mapping: JSON.parse(content)
    }
}

export const upload = async (input: any, kubos: Kubos) :  Promise<string> => {

        let cids : string[] = [];

        if (kubos.externals_url != undefined) {

            for (let kubo of kubos.externals_url) {
                cids.push(await dagPut(input, kubo));
            }
        }

        return cids[0]  
}       

export const uploadAndMerge = async (input: DSGAuthorInput, kubos: Kubos) :  Promise<DSGAuthorInput> => {

    let content = fs.readFileSync(input.content_mappings, "utf8");

    let json = JSON.parse(content);

    input.content_mappings = await upload(
        json,
        kubos
    );

    return input;      
}    