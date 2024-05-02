import { readFile } from "fs/promises";
import * as fs from 'fs';
import { pinFile } from "../pinning/pinata";
import { DSGAuthorInput, DSGPublicationInput, Kubos } from "../types";

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
    
    assets: string
    domains: any[]
    governor: string
    mapping: DSGTemplate[]
    name: string
    templates: string
    table: DSGTable
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
        domains: [domain],
        governor: pubInput.governor,
        mapping: JSON.parse(content),
        name: pubInput.name,
        templates: pubInput.templates,
        table
    }
}

// export const upload = async (input: any, kubos: Kubos) :  Promise<string> => {

//         let cids : string[] = [];

//         // console.log(input);


//         // if (kubos.externals_url != undefined) {

//         //     for (let kubo of kubos.externals_url) {
//         //         cids.push(await filePut(input, kubo));
//         //     }
//         // }

//         // console.log(cids);

//         return cids[0]  
// }       

export const uploadAndMerge = async (input: DSGAuthorInput, kubos: Kubos) :  Promise<DSGAuthorInput> => {

    const cid = await pinFile("mapping", input.content_mappings);

    input.content_mappings = cid

    return input;      
}    

export const writeAndUpload = async (name: string, input: any, kubos: Kubos) :  Promise<string> => {

        console.log(input);

        let path = "./tmp.json"

        await fs.writeFileSync("./tmp.json",JSON.stringify(input));
        // without writing to file ? 

        let cid = await pinFile(name, path);

        console.log(cid);

      return cid;      
  }  