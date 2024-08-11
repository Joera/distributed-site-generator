use curl_effector_imports::{ CurlRequest, CurlResult, HttpHeader, curl_post, curl_get};
use serde_json::Value;
use std::fs;
use std::path::PathBuf;
use eyre::Result;

pub fn post(rpc_url: &String, key: &str, data: String, debug: bool) -> Result<Value, eyre::Report> {

    let mut result: Option<Value> = None;

    let source_path = vault_path(&format!("{}_body", key));
    let target_path = vault_path(&format!("{}_response", key));

    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    let h1 = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let request = CurlRequest {
        url: rpc_url.to_string(),    
        headers: vec![h1]
    };

    let response = curl_post(request, source_path.clone(), target_path.clone());

    if response.success {
        let result_raw = fs::read_to_string(target_path).unwrap();
        let v: Value = serde_json::from_str(&result_raw).unwrap();
        result = Some(v["result"].clone());
        if debug { println!("rabbit result {:?}", result_raw); }

    } else {
        println!("rabbit error {:?}", response.error);
    }

    match result {
        Some(r) => {
            Ok(r)
        },
        None => Err(eyre::eyre!(response.error))
    }


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


pub fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}


