import { TuDsgPublication } from "./publication";


export class CarFile {

    constructor(
        public publication: TuDsgPublication, 
        public cid: string,
        public kubo_address: string
    ){}

    unpack(){
        
        // whats my ipfs connection?

    }



}