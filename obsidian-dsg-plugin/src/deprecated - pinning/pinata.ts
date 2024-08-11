
import { DSGPublicationInput } from "../types";
import { pinFileToIPFS } from "./pinFile";
import pinFromFS from "./pinFromFS";

export const pinFolder = (key: string, pubInput: DSGPublicationInput) : Promise<DSGPublicationInput> => {

    return new Promise( async (resolve,reject) => {

        const r: string = await pinFromFS(pubInput[key],{});

        pubInput[key] = JSON.parse(r)["IpfsHash"];

        resolve(pubInput);

    })
}

export const pinFile = (name: string, path: string) : Promise<string> => {

    return new Promise( async (resolve,reject) => {

        let options = {
            pinataMetadata : {
                name
            },
            pinataOptions : {
                cidVersion : 1
            }
        }

        const r: string = await pinFileToIPFS(path,options);

        resolve(JSON.parse(r)["IpfsHash"]);
    })
} 