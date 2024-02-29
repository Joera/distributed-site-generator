#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem, TemplateData };
use tu_types::results::{AquaMarineResult}; 
// use tu_types::bytes::{any_as_u8_slice};
use serde_json::{Map, Value};
use std::collections::BTreeMap;

module_manifest!();

mod collections;
mod tableland;

pub fn main() {}


#[marine]
pub fn single(ro: TuDsgRenderObject, kubo_multiaddr: String) -> AquaMarineResult {

    println!("{:?}",ro);

    let mut am_result = AquaMarineResult::new();

    let content: &str = rmp_serde::from_slice(&ro.body).unwrap();
 
    let mut data: BTreeMap<String, Value> = serde_json::from_str(&content).unwrap();
   
    let collections = crate::collections::gather(&ro, &data, &kubo_multiaddr);

    let template_data = TemplateData {
        body: data.clone(),
        collections,
        base_url: "https://x.yz".to_string(),
        assets_url:"../assets".to_string(),
        render_env: "some_publisher".to_string()
    };

    // am_result.output.push(
    //     bincode::serialize(&template_data).unwrap()
    // );

    am_result
}


#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}

#[marine]
#[link(wasm_import_module = "tu_ipfs")]
extern "C" {
    pub fn dag_get(cid: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}
