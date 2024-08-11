#![allow(
    unused_variables, 
    unused_imports, 
    deprecated, 
    non_snake_case,
    dead_code
)]

use cio_evm::utils::cleanJson;
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use cio_response_types::AMResponse;
// use curl_effector_imports::{ CurlRequest, HttpHeader, curl_post};
use std::fs;
use serde_json::Value;
use marine_rs_sdk::get_call_parameters;
use chrono::Utc;
use std::path::{Path, PathBuf};

use cio_evm::{
    abi,
    params,
    tx,
    rpc,
    types
};

module_manifest!();


pub fn main() {}

#[marine]
pub fn prep_write(chain_id: u64, contract_address: String, function: String, args: String, sender: String, rpc: String) -> String {

    let params = params::encode_args(
        function, 
        args
    ).unwrap();

    let tx_request = tx::legacy(chain_id, params.into(), contract_address, sender, rpc).unwrap();

    serde_json::to_string(&tx_request).unwrap()
}

#[marine]
pub fn exec_write(tx_request_string: String, signatures: Vec<String>, rpc: String) -> String {

    let data = tx::wrapLegacy(tx_request_string, signatures);
    let res = rpc::send_raw_tx(&rpc, data);

    match res {
        Ok(r) => r,
        Err(err) => "error writin".to_string()
    }
}

#[marine]
pub fn read(contract_address: String, function: String, args: String, rpc: String) -> AMResponse {

    let params = params::encode_args(function.clone(), args).unwrap();

    let response = rpc::call(contract_address, params, &rpc).unwrap();

    println!("kanariez response {:?}", response);

    let bytes = hex::decode(response[2..].to_string()).unwrap();

    let o  = params::decode(function, bytes).unwrap();

    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();
    
    AMResponse {
        success: true,  
        result_raw: String::from(""),
        result: cleanJson(&o[0]),
        timestamp,
        host_id: cp.host_id
    }  
}

#[marine]
pub fn create_filter(contract_address: String, topic: String, latest_block: String, rpc_url: String) -> AMResponse {

    let response = rpc::create_filter(contract_address, topic, latest_block, &rpc_url);

    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();

    if let Ok(result) = response {
     
        return AMResponse {
            success: true,
            result,
            result_raw: String::from(""),
            timestamp,
            host_id: cp.host_id
        }  

    } else {

        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: response.unwrap(),
            timestamp,
            host_id: cp.host_id
        }  
    }
}

#[marine]
pub fn poll_filter(filter: String, rpc_url: String) -> crate::types::AMEventLogResult {

    let response = rpc::poll_filter(filter, &rpc_url);
    
    if let Ok(logs) = response {
    
        return crate::types::AMEventLogResult {
            success: true,
            results: logs,
            error: String::from("")
        }
    } else {

        return crate::types::AMEventLogResult {
            success: false,
            results: vec![],
            error: "".to_string()
        }
    }




     
}



fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}