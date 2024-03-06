import { DSGPublicationInput, SGFile } from "../types";
import { Kubos } from "../types";


export const gatherKubos = async () : Promise<Kubos> => {

	return new Promise( async (resolve, reject) => {

		let res = await fetch("http://127.0.0.1:3099/gather_kubos", {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({})
		});
	
		const data = await res.json();

		let kubos: Kubos; 

		try {

				const kubos : any =  {};
				kubos.internals_url = [];
				kubos.externals_url = [];

				for (let multiaddress of data.internals) {
				let snips = multiaddress.split("/");
				
				kubos.internals_url.push('http://' + snips[2] + ":" + snips[4])
				}	

				for (let multiaddress of data.externals) {
				let snips = multiaddress.split("/");
				kubos.externals_url.push('http://' + snips[2] + ":" + snips[4])
				}		
		
				resolve(kubos);

		} catch (e) {
			
			console.log(e);
		}
	
	});                                                                 
}

export const goAndFetch = async (hash: string, ipfs_multiaddress: string) : Promise<string> => {

	return new Promise( async (resolve, reject) => {

		let res = await fetch("http://127.0.0.1:3099/go_and_fetch", {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ hash: hash, ipfs_multiaddress: ipfs_multiaddress})
		});
	
		const data = await res.json();

		console.log(data);

		if (data != undefined) {
			
		}	

		resolve(hash);
	});                                                                 
}