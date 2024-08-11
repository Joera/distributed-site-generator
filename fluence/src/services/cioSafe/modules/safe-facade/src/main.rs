#![allow(
    unused_variables, 
    unused_imports, 
    deprecated, 
    non_snake_case,
    dead_code
)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::get_call_parameters;
use cio_response_types::AMResponse;
use std::fs;
use std::path::PathBuf;
use serde_json::Value;
use chrono::Utc;
use serde::{Serialize, Deserialize};

use alloy_consensus::{
    TxLegacy,
    TxEip1559,
    Signed,
    SignableTransaction
};

use alloy_primitives::{
    Signature,
    hex
};

use alloy_rlp::Encodable;




// temp 
// use ethers_core::types::transaction::eip1559::Eip1559TransactionRequest;
// use ethers_core::types::TransactionRequest;
// use ethers_core::types::Signature as EthersSignature;
// use ethers_core::utils::serialize as ethers_serialize;
// use ethers_core::types::U256;


module_manifest!();

mod abi;
mod utils;
mod curl;
mod params;
mod tx;
mod rpc;
mod gas;
mod signature;


pub fn main() {}

// deploy a safe with owners and treshold 
#[marine]
pub fn tx_request(sender: String, chain_id: u64, factory_address: String, rpc: String, owners: Vec<String>, treshold: u8) -> String {

    let params = params::create_safe(owners, treshold).unwrap();
   
   // let tx_request = tx::eip1559(chain_id, params, factory_address, sender, rpc).unwrap();
    let tx_request = tx::legacy(chain_id, params, factory_address, sender, rpc).unwrap();

    println!("kanariez tx_request: {:?}", tx_request);

    serde_json::to_string(&tx_request).unwrap()

}

#[marine]
pub fn tx_request_2(sender: String, chain_id: u64, publication_address: String, rpc: String, cid: String) -> String {

    let params = params::updateHtmlRoot(cid).unwrap();
   
   // let tx_request = tx::eip1559(chain_id, params, factory_address, sender, rpc).unwrap();
    let tx_request = tx::legacy(chain_id, params, publication_address, sender, rpc).unwrap();

    println!("kanariez tx_request: {:?}", tx_request);

    serde_json::to_string(&tx_request).unwrap()

}

#[marine]
pub fn exec_tx(tx_request_string: String, signatures: Vec<String>, rpc: String) -> String {

    let signature = &signatures[0];

    let tx: TxLegacy = serde_json::from_str(&tx_request_string).unwrap();
    let sig: Signature = serde_json::from_str(&signature).unwrap();

    let mut buf = Vec::with_capacity(
        signature::encoded_len_with_signature(&tx, &vec![sig])
    );
    tx.encode_with_signature_fields(&sig, &mut buf);

    let stx = format!("0x{}",hex::encode(buf));

    let nonce = utils::get_nonce().unwrap();

    let data = format!("{{\"jsonrpc\": \"2.0\",\"method\": \"eth_sendRawTransaction\",\"params\": [\"{}\"],\"id\": {}}}", stx, nonce);

    println!("birdz signed tx: {:?}", data);

    let source_path = vault_path("tx_body");
    let target_path = vault_path("tx_response");

    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    let response = curl::post(&rpc, &source_path, &target_path);

    if response.success {
        let result_raw = fs::read_to_string(target_path).unwrap();
        // let v: Value = serde_json::from_str(&result_raw).unwrap();
        // let result = v["result"].to_string().replace("\"","");
        result_raw

    } else {
        "errorred".to_string()
    }

    // String::from("")
     
}

// fn into_multisigned(tx: TxLegacy, signatures: Vec<Signature>) -> Signed<Self> {
//     let mut len = tx.size();
//     for signature in &signatures {
//         len += signature.len();
//     }
//     let mut buf = Vec::with_capacity(len);
//     self.encode_with_signature_fields(&signature, &mut buf);
//     let hash = keccak256(&buf);
//     Signed::new_unchecked(self, signature, hash)
// }


// in future case of reprevision of workers to other peers 
// #[marine]
// pub fn swap_owner(_old_owner: String, _new_owner: String) -> String {
    
//     // deploy a safe from 


//     "0x".to_string()
// }


fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}