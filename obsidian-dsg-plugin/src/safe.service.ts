
import {ethers} from 'ethers';
import Safe from '@safe-global/protocol-kit';
import { MetaTransactionData } from '@safe-global/safe-core-sdk-types'
import { IMainController } from './main.ctrlr';

export interface IGnosisSafeService {
    main: IMainController,
    protocolKit: any,
    tx: (safe_address: string, destination: string, abi: string, method: string, args: string[], callback: Function) => void
    parse_contract_address: (hash: string) => Promise<string> 
}

export class GnosisSafeService implements IGnosisSafeService {

    main: IMainController;
    protocolKit: any;

    constructor(main: IMainController) {

        this.main = main;
    }

    async tx(safe_address: string, destination: string, abi: string, method: string, args: string[], callback: Function) : Promise<string> {
    
        return new Promise( async (resolve,reject) => {

            this.protocolKit = await Safe.init({
                provider: this.main.plugin.settings.db_rpc,
                signer: this.main.oxo.ctrlr.author.private_key,
                safeAddress: safe_address
            })

            const contract = new ethers.Contract(destination, abi, this.protocolKit.signer);
            const callData = contract.interface.encodeFunctionData(method,args); 

            const safeTransaction = await this._create_tx(destination, callData);

            // approve
            const safeTxHash = await this.protocolKit.getTransactionHash(safeTransaction)
            const txResponseApproval = await this.protocolKit.approveTransactionHash(safeTxHash)
            await txResponseApproval.transactionResponse?.wait()

            // tx 
            const txResponse = await this.protocolKit.executeTransaction(safeTransaction);
            const r = await txResponse.transactionResponse?.wait()
            console.log("tx hash: " + r.hash);

            const pub_address = await callback(r.hash)

            resolve(pub_address);
           
        });
       
    }

    async parse_contract_address(hash: string) : Promise<string> {

        // dit is alleen relevant voor contract deploy .. niet voor update 
        // in een callback ...
        // kan dat met een promise? 

        return new Promise( async (resolve,reject) => {

            const getInternalTransactions = async (txHash: string) : Promise<any[]> => {
                console.log("hiiiii");
                return new Promise( (resolve, reject) : any => {
                    fetch(`https://api-sepolia.arbiscan.io/api?module=account&action=txlistinternal&txhash=${txHash}&apikey=RPG6FJDHR6FM8Q1FDU8CQCT2VKXXU8R98V`)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                            resolve(response)
                        })
                        .catch(err => console.error(err));
                });
            }            
            // get contract address
            const interval = setInterval(async () => {   
                try {                        
                    if(hash != null) {
                        console.log("fetching internal tx for: " + hash);
                        console.log("nu dan?")
                        const txsinternalResult: any = await getInternalTransactions(hash);
                        console.log("txsinternalResult: " + txsinternalResult);
                        if(txsinternalResult.status == '1') {
                            clearInterval(interval);
                            console.log(txsinternalResult.result)
                            const possibleContracts = txsinternalResult.result.map( (tx: any) => tx.contractAddress)
                            const pub_addr = possibleContracts.filter( (c: string) => c != "");
                            if(pub_addr[0]) {
                                resolve(pub_addr[0]);
                            } else {
                                resolve("failed");
                            }
                        }
                    } 
                } catch (err) {     
                    // console.log("within interval: " + err)
                } 
            }, 2000);
        }) 
    }

    async _create_tx(to: string, data: string) {

        const transactions: MetaTransactionData[] = [
            {
              to,
              data,
              value: "0",
              operation: 0 
            }
        ]

        return await this.protocolKit.createTransaction({ transactions })
          
    }

    _getInternalTransactions = async (txHash: string) : Promise<any[]> => {

        console.log("hiiiii");

        return new Promise( (resolve, reject) : any => {
          
            fetch(`https://api-sepolia.arbiscan.io/api?module=account&action=txlistinternal&txhash=${txHash}&apikey=RPG6FJDHR6FM8Q1FDU8CQCT2VKXXU8R98V`)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    resolve(response)
                })
                .catch(err => console.error(err));
    
        });
    }
}



