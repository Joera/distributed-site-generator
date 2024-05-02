import axios from "axios";
import { Kubos, SGContentItem, SGFile } from "./types";
import { Settings } from './settings'
// import { filePut } from "./publication/ipfs";
//@ts-ignore
import * as fs from 'fs';
import { pinFile } from "./pinning/pinata";


// export const dagPutContentItem = async (contentItem: SGContentItem, archive_cid: string, kubos: Kubos) : Promise<[SGContentItem, string, string]>=> {

// 	// use ipfs.transport-union.dev

// 	if(kubos.externals_url != undefined) {

// 		let content_cids: string[]  = [];

// 		for (let kubo of kubos.externals_url) {

// 			const endpoint = kubo + '/api/v0/dag/put?store-codec=dag-cbor&input-codec=dag-json';

// 			let res = await axios.post(endpoint, { body : JSON.stringify(contentItem) }, {
// 				headers: {
// 					"Content-Type": "multipart/form-data",
// 				}
// 			})

// 			content_cids.push(res.data["Cid"]["/"]);

// 		}

// 		return [contentItem, archive_cid, content_cids[0]];

// 	}
	
// 	throw Error('no kubos to upload to')
	
// }

export const putContentItem = async (contentItem: SGContentItem, archive_cid: string) : Promise<[SGContentItem, string, string]>=> {

	let path = "./tmp_note.json"
	await fs.writeFileSync(path,JSON.stringify(contentItem));

	console.log(contentItem)

	let cid = await pinFile(contentItem.title, path)

	console.log(cid);

	return [contentItem, archive_cid, cid];	
}

//  const _filePut = async (path: string, kubo: string) : Promise<string> => {

// 	return new Promise ( async (resolve, reject) => {

// 		const exec = require('child-process-promise').exec;
// 		const cmd = `/usr/bin/curl -X POST -F file=@${path} ${kubo}/api/v0/add`;
// 		const promise = exec(cmd, { stdio: 'inherit', shell: true }); 
// 		const childProcess = promise.childProcess;

// 		childProcess.stdout.on('data', function (data: any) {
// 			const json = JSON.parse(data.toString());
// 			resolve(json['Hash']);
// 		});
// 	});

// };