use curl_effector_imports::{ CurlRequest, CurlResult, HttpHeader, curl_post, curl_get};
use std::path::PathBuf;
use crate::fs;


pub fn post(rpc_url: &String, source_path: &String, target_path: &String) -> CurlResult {

    let h1 = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let request = CurlRequest {
        url: rpc_url.to_string(),    
        headers: vec![h1]
    };

    curl_post(request, source_path.to_string(), target_path.to_string())
}

pub fn get(rpc_url: &String, target_path: &String) -> CurlResult {

    let h1 = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let request = CurlRequest {
        url: rpc_url.to_string(),    
        headers: vec![h1]
    };

    curl_get(request, target_path.to_string())
}


