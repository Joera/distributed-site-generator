#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem    };
use cio_response_types::{AquaMarineResult};   

module_manifest!();

pub fn main() {}

#[marine]
pub fn collect(publication_name: &String, kubo_multiaddr: &String) -> AquaMarineResult {

    let mut am_result = AquaMarineResult::new();

    am_result = am_result.merge(
        archive(&format!("/publication/html/{}", publication_name), kubo_multiaddr)
    );

    println!("collectin: {:?}", am_result);

    am_result
}


#[marine]
#[link(wasm_import_module = "tu_car")]
extern "C" {
    pub fn archive(pubname: &String, kubo_multiaddr: &String) -> AquaMarineResult;
    pub fn extract(cid: &String, external_path: &String, aliased_path: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}
