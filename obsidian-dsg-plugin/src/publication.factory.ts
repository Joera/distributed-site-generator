
import { DSGPublication, DSGTable } from "./types";
import fs from 'fs';

// export const parsePublication =  async (main: IMainController, file: TFile) : Promise<DSGPublicationInput> =>   {

// 	return new Promise ( async (resolve, reject) => { 
    
//         await main.plugin.app.fileManager.processFrontMatter( file, (frontmatter) => {

//             const p = {
//                 assets: frontmatter.assets,
//                 contract: frontmatter.contract,
//                 domains : [],
//                 controller: frontmatter.controller,
//                 mapping : frontmatter.mapping,
//                 name : frontmatter.name,
//                 table: frontmatter.table,
//                 templates: frontmatter.templates,
//                 type : frontmatter.type,
//             }

//             resolve(p)
//         })

//         reject()
//     });
// }

export const publicationConfig = (dev_folder: any, fm: any, assets: string, templates: string):  DSGPublication => {
  
    let content = fs.readFileSync(dev_folder + "/mapping.json", "utf8");
    
    let domain = {
        url: "unamore.publikaan.nl",
        dns: {
            custodian: "digitalocean",
            item_id: "xxx",
            auth_key: "xxx"
        }
    }

    let table : DSGTable = {
        id: fm.db_table,
        gateway: fm.db_gateway,
    }

   return  {
        assets: assets,
        contract: fm.contract,
        domains: [domain],
        controller: fm.controller,
        mapping: JSON.parse(content),
        name: fm.name,
        rpc: fm.rpc,
        storage: fm.storage,
        templates: templates,
        table
    }
}