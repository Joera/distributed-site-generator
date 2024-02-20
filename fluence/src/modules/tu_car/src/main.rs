#![allow(unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use std::fs;
use std::path::PathBuf;
use serde_json::Value;

use tu_types::results::AquaMarineResult;
use tu_dsg_helpers::multiaddr::{to_url};

module_manifest!();

pub fn main() {}

#[marine]
pub fn extract(cid: &String, external_path: &String, aliased_path: &String, kubo_multiaddr: &String) -> AquaMarineResult {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let workdir = format!("/.fluence/v1/services/workdir/{}", call_data.service_id);
    let pubdir = format!("{}{}", workdir, external_path);

    let url =  format!("{}/api/v0/cat?arg={}", to_url(kubo_multiaddr), cid);

    let response = curl(
        vec![
            String::from("-s"),
            String::from("-X"),
            String::from("POST"),
            url
        ]
    );
 

    let res = fs::write(PathBuf::from("/templates/tmp.car"), response.stdout);

    let _ = fs::create_dir_all(
        PathBuf::from(
            &aliased_path
        )
    );

    let source = format!("{}/publication/templates/tmp.car", workdir);
      
    am_result = am_result.merge_mounted_binary_result(
        car_utils(
            vec![
                String::from("ex"),
                String::from("-c"),
                source,
                String::from("-t"),
                pubdir.to_string()
            ]
        )
    );

    am_result

}

#[marine]
pub fn archive(path: &String, kubo_multiaddr: &String) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let workdir = format!("/.fluence/v1/services/workdir/{}", calldata.service_id);
    let archive = format!("{}/publication/archive.car",workdir);

    am_result = am_result.merge_mounted_binary_result(
        car_utils(
            vec![
                String::from("ar"),
                String::from("-c"),
                archive.clone(),
                String::from("-s"),
                format!("{}{}", workdir, path)
            ]
        )
    );

    let url = format!(
        "{}/api/v0/add", 
        to_url(kubo_multiaddr)
    ); 

    let data_string = format!("file=@{}", archive).replace("\"","");

    am_result = am_result.merge_mounted_binary_result(
        curl(
            vec![
                String::from("-s"),
                String::from("-X"),
                String::from("POST"),
                String::from("-F"),
                data_string,
                url
            ]
        )
    );

    let v : Value = serde_json::from_str(&am_result.results[am_result.results.len() - 1]).unwrap();

    am_result.results.push(v["Hash"].to_string().replace("\"",""));
      
    am_result
}


#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
    pub fn car_utils(md: Vec<String>) -> MountedBinaryResult;
}



