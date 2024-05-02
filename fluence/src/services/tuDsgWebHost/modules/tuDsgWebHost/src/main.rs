#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use cio_curl_effector_imports as curl;
use cio_curl_effector_imports::{CurlRequest,CurlResult,HttpHeader};
use tu_dsg_types::{ TuDsgPublication }; 
use tu_types::results::{AquaMarineResult};   
use std::fs;
use std::path::PathBuf;
use serde::{Deserialize, Serialize};

module_manifest!();

#[derive(Debug, Serialize, Deserialize)]
struct WebHostTask {
    publication_name: String,
    cid: String
}

pub fn main() {}

#[marine]
pub fn update(publication: TuDsgPublication, cid: String) -> bool {

    let mut bool = false;

    let url = String::from("http://161.35.155.82:3737/publish");

    let b = WebHostTask {
        publication_name : publication.name,
        cid
    };

    let body: String = serde_json::to_string(&b).unwrap();

    let h = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let source_path = vault_path("webhost_body");
    let target_path = vault_path("webhost_response");
    let _ = fs::write(PathBuf::from(source_path.clone()), body);

    let request = CurlRequest {
        url: url.clone(),    
        headers: vec![h]
    };

    let response = curl::curl_post(request, source_path, target_path.clone());

    if response.success  {

       // let_  = fs::read_to_string(target_path.clone()).unwrap();
        bool = true
    } 
 

    bool
}

fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}



