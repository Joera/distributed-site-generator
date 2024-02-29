#![allow(
    unused
)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_types::results::{ AquaMarineResult, AquaMarineResultVecU8, AquaMarineResultString };
use tu_dsg_helpers::multiaddr::{to_url};
use serde_json::Value;

use std::fs;
use std::path::PathBuf;

module_manifest!();


fn main() {}

#[marine]
pub fn file_add(file_path: &String, kubo_multiaddr: &String) -> AquaMarineResult {

  //  let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let url = format!("{}/api/v0/add",  to_url(kubo_multiaddr)); 
    let data_string = format!("file=@{}", file_path).replace("\"","");

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        String::from("-F"),
        data_string,
        url
    ];

    let response = curl(curl_args);

    am_result.errors.push(String::from_utf8(response.stderr).unwrap());
    
    let hash = extract_hash(&String::from_utf8(response.stdout).unwrap());
    am_result.results.push(hash);

    am_result
}  

#[marine]
pub fn cid_to_file(cid: &String, path: &String, kubo_multiaddr: &String) -> AquaMarineResult {

  //  let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let url = format!(
        "{}/api/v0/cat?arg={}", 
        to_url(kubo_multiaddr), 
        cid
    ); 

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        url,
        String::from("--output"),
        path.to_string()
    ];

    let response = curl(curl_args);
      
    am_result.results.push(format!("downloaded cid {} to {} ", cid, path));
    am_result.errors.push(String::from_utf8(response.stderr).unwrap());

    am_result
}

#[marine]
pub fn file_get(cid: &String, kubo_multiaddr: &String) -> AquaMarineResult {

  //  let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let url = format!(
        "{}/api/v0/cat?arg={}", 
        to_url(kubo_multiaddr), 
        cid
    ); 

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        url
    ];

    let response = curl(curl_args);
      
    am_result.output.push(response.stdout);
    am_result.errors.push(String::from_utf8(response.stderr).unwrap());

    am_result
}

#[marine]
pub fn ipfs_hash(data: &String, kubo_multiaddr: &String) -> AquaMarineResultString {

  //  let call_data = marine_rs_sdk::get_call_parameters();
    let mut output: Vec<String> = vec!();
    let mut errors: Vec<String> = vec!();

    let url = format!(
        "{}/api/v0/add?only-hash=true", 
        to_url(kubo_multiaddr)
    ); 

    let data_string = format!("file={:?}", data);

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        String::from("-F"),
        data_string,
        url
    ];

    let response = curl(curl_args);

    let hash = extract_hash(&String::from_utf8(response.stdout).unwrap());
    output.push(hash);

    AquaMarineResultString {
        output,
        errors
    }
}

#[marine] 
pub fn dag_get(cid: String, kubo_multiaddr: &String) -> AquaMarineResult {

    let codec = "dag-json";
    let externaladdr = to_url(kubo_multiaddr);
    let url = format!(
        "{}/api/v0/dag/get?arg={}&output-codec={}", 
        externaladdr,
        cid, 
        codec.to_string()
    );

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        String::from("--max-time"),
        String::from("2"),
        url
    ];

    AquaMarineResult::new()
        .merge_mounted_binary_result(
            curl(curl_args)
        )
}

#[marine]
pub fn dag_put(obj: String, kubo_multiaddr: &String) -> AquaMarineResult{

    let v = serde_json::to_value(obj).unwrap();
    let codec = "dag-cbor";

    let url = format!(
        "{}/api/v0/dag/put?store-codec={}&pin=true", 
        to_url(kubo_multiaddr), 
        codec.to_string()
    );

    let data_string = format!("file={}", v);
  
    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("POST"),
        String::from("-F"),
        data_string,
        url
    ];

    let mut am_result = AquaMarineResult::new()
        .merge_mounted_binary_result(
            curl(curl_args)
        );

    let v : Value = serde_json::from_str(&am_result.results[0]).unwrap();

    am_result.results.push(v["Cid"]["/"].to_string().replace("\"",""));

    am_result

}

pub fn extract_hash (response: &String) -> String {
    let v : serde_json::Value = serde_json::from_str(response).unwrap();
    v["Hash"].as_str().unwrap().to_string()
}


#[marine]
pub fn add_folder (path: &str) -> AquaMarineResultString {

    // uses cli .. so you can create a dag and get its cid .. 
    // then create a .car file for the entire dag
    // add that to a networked ipfs peer 

 //   let call_data = marine_rs_sdk::get_call_parameters();
    let mut output: Vec<String> = vec!();
    let mut errors: Vec<String> = vec!();

    let args = vec![
        String::from("add"),
        String::from("-r"),
        String::from(path)
    ];
  
    let response = ipfs(args);

    let o = String::from_utf8(response.stdout).unwrap();
    let lastline = &o
        .rsplit_once("\n").unwrap().0
        .rsplit_once("\n").unwrap().1
        .split(" ").collect::<Vec<_>>()
        [1];
        
    output.push(lastline.to_string());

    AquaMarineResultString {
        output,
        errors
    }
}

#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
    pub fn ipfs(cmd: Vec<String>) -> MountedBinaryResult;
}




