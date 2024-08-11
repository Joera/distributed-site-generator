#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use curl_effector_imports as curl;
use curl_effector_imports::{CurlRequest,HttpHeader};
use tu_dsg_types::{ DsgPublication }; 
use cio_response_types::{AMResponse};   
use std::fs;
use std::path::PathBuf;
use serde::{Deserialize, Serialize};
use marine_rs_sdk::get_call_parameters;
use chrono::{Utc};

module_manifest!();

#[derive(Debug, Serialize, Deserialize)]
struct WebHostTask {
    publication_name: String,
    cid: String
}

pub fn main() {}

#[marine]
pub fn update(publication: DsgPublication, cid: String) -> AMResponse {

    let url = String::from("https://webhost1.autonomous-times.com/publish");

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
    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();

    if response.success  {

        let resultString = fs::read_to_string(target_path.clone()).unwrap();

        return AMResponse {
            success: true,
            result: resultString,
            result_raw: String::from(""),
            timestamp,
            host_id: cp.host_id
        }
    }  
    
    else {

        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: response.error,
            timestamp,
            host_id: cp.host_id
        }  
    }
}

fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}