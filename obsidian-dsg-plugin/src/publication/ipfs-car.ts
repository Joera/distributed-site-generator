import { filePut } from './ipfs'
import { Kubos } from '../types'
import { DSGPublicationInput } from './note';

export const cars = async (pubInput: DSGPublicationInput, kubos: Kubos) : Promise<DSGPublicationInput>  =>  {

    console.log(kubos);

    await createFromPath("templates",pubInput.templates);
    await createFromPath("assets", pubInput.assets);

 //   setTimeout( async () => {

 if (kubos.externals_url != undefined) {
 
    for (let kubo of kubos.externals_url) {
    
        pubInput.templates = await filePut("/home/joera/Documents/dsg/publications/unamore/cars/templates.car", kubo);
        pubInput.assets = await filePut("/home/joera/Documents/dsg/publications/unamore/cars/assets.car", kubo);
    }
}
    // }, 1000);

    return pubInput;
}



const createFromPath = async (fileName: string, path: string)  => {

    return new Promise( (resolve, reject) => {

        const exec = require('child-process-promise').exec;
        const cmd = `/home/joera/.cargo/bin/car-utils ar -c /home/joera/Documents/dsg/publications/unamore/cars/${fileName}.car -s ${path}`;
        const promise = exec(cmd, { cwd: path, stdio: 'inherit', shell: true }); 
        const childProcess = promise.childProcess;

        childProcess.stdout.on('data', function (data: any) {
            console.log('[serve] stdout: ', data.toString());
            resolve(data.toString());
        });

        childProcess.stderr.on('data', function (data: any) {
            console.log('[serve] stderr: ', data.toString());
            reject(data.toString());
        });

        resolve("whatever");
    });	
}


export const dir = async (key: string, path: string): Promise<string> => {

    return new Promise( (resolve, reject) => {

        const exec = require('child-process-promise').exec;

        const dirPath = `/home/joera/Documents/dsg/publications/${path}`; 
        const cmd = `ipfs add -r -Q ${dirPath}`;
        const promise = exec(cmd, { cwd: dirPath, stdio: 'inherit', shell: true }); 
        const childProcess = promise.childProcess;

        childProcess.stdout.on('data', function (data: any) {
            console.log('[serve] stdout: ', data.toString());
            // pubInput[key] = data.toString()

            resolve(data.toString());
        });

        childProcess.stderr.on('data', function (data: any) {
            console.log('[serve] stderr: ', data.toString());
            reject("");
        });


    });	
}

export const includeDirCid = (hash: string, key: string, input: DSGPublicationInput): Promise<DSGPublicationInput> => {

    return new Promise( async (resolve, reject) => {

        input[key] = hash;
        resolve(input);
    });
}