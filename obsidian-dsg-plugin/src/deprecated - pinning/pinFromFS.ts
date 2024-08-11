// import axios from 'axios';
import { baseUrl } from './constants';
import { validateMetadata, validatePinataOptions} from './util/validators';
import basePathConverter from 'base-path-converter';
import { createReadStream } from 'fs';
import Multipart from '../multi-part-lite-adopted/main';
//@ts-ignore
import electron from 'electron';
const net = electron.remote.net;

/**
 * PinFromFS
 * @param {string} pinataApiKey
 * @param {string} pinataSecretApiKey
 * @param {string} sourcePath
 * @param {*} options
 * @returns {Promise<unknown>}
 */

const pinataJWTKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow";

export default function pinFromFS(sourcePath: string, options) : Promise<string> {

    return new Promise( async (resolve, reject) => {
        
        const endpoint = `${baseUrl}/pinning/pinFileToIPFS`;

        fs.stat(sourcePath, (err, stats) => {
            if (err) {
                reject(err);
            }
            if (stats.isFile()) {
                //we need to create a single read stream instead of reading the directory recursively
                // const data = new NodeFormData();

                // data.append('file', fs.createReadStream(sourcePath));

                // if (options) {
                //     if (options.pinataMetadata) {
                //         validateMetadata(options.pinataMetadata);
                //         data.append('pinataMetadata', JSON.stringify(options.pinataMetadata));
                //     }
                //     if (options.pinataOptions) {
                //         validatePinataOptions(options.pinataOptions);
                //         data.append('pinataOptions', JSON.stringify(options.pinataOptions));
                //     }
                // }

            } else {

                recursive.readdirr(sourcePath, async (err, dirs, files) => {
                    if (err) {
                        console.log("err" + err)
                        reject(new Error(err));
                    }

                    let data = new Multipart();

                    files.forEach(async (file) => {

                      //  Blob is a browser-specific object used to represent raw data in the browser environment. Instead, fs.createReadStream() returns a ReadableStream object, which is a Node.js API for reading data from a stream source.
                        let fileStream = createReadStream(file, { encoding: 'utf-8'});

                        // console.log(basePathConverter(sourcePath, file))
                        //for each file stream, we need to include the correct relative file path
                        data.append('file', fileStream, {
                            'filename': basePathConverter(sourcePath, file)
                        });
                    });

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
                        // console.log(`STATUS: ${response.statusCode}`);
                        // console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
                
                        response.on('data', (chunk) => {
                            console.log(`BODY: ${chunk}`)
                            resolve(chunk);
                        });
                    });
                    request.on('error', (error) => {
                        console.log(`ERROR: ${JSON.stringify(error)}`)
                        reject();
                    });
                    request.write(body);
                    request.end();
                });
            }
        });
    });
}
