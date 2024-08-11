// import pinataSDK from '@pinata/sdk';
import { DSGPublicationInput } from '../types';
import { createReadStream } from 'fs';
import Multipart from '../multi-part-lite-adopted/main';

//@ts-ignore
import electron from 'electron';
import { validateMetadata, validatePinataOptions } from './util/validators';
const net = electron.remote.net;

const pinataJWTKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow";

export const pinFileToIPFS = async(path: string, options: any = {}) : Promise<string> => {

    return new Promise ( async (resolve,reject) => { 

        const readStream = createReadStream(path, { encoding: 'utf-8'});

        const data = new Multipart();
        data.append("file", readStream);
        
        if (options) {
            if (options.pinataMetadata) {
                validateMetadata(options.pinataMetadata);
                data.append('pinataMetadata', JSON.stringify(options.pinataMetadata));
            }
            if (options.pinataOptions) {
                validatePinataOptions(options.pinataOptions);
                data.append('pinataOptions', JSON.stringify(options.pinataOptions));
            }
        }

        const body = (await data.buffer()).toString();

        console.log(body);

        const request = net.request({
            method: 'POST',
            protocol: 'https:',
            hostname: 'api.pinata.cloud',
            path: '/pinning/pinFileToIPFS',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data.getBoundary()}`,
                'Authorization':`Bearer ${pinataJWTKey}`
            }
        });

        request.on('response', (response) => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

            response.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`)
                resolve(chunk.toString())
            });
        });
        request.on('error', (error) => {
            console.log(`ERROR: ${JSON.stringify(error)}`)
            reject(error)
        });
        request.write(body);
        request.end();
    });

}
