#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{ TuDsgDns, TuDsgDomain, TuDsgPublication };
use tu_types::results::{AquaMarineResult};   

module_manifest!();

pub fn main() {}

#[marine]
pub fn serve(publication: TuDsgPublication, archive_cid: String, kubo_multiaddr: String) -> AquaMarineResult {
    
    // unpack car
    let mut am_result = AquaMarineResult::new();
    let _call_data = marine_rs_sdk::get_call_parameters();
 
    am_result = am_result.merge(
        extract(&archive_cid, &format!("/publication/html/{}/", &publication.name), &format!("/html/{}/", &publication.name), &kubo_multiaddr)
    );

    

    // link of copy to shared volumne

    // nginx

    // certbot 

    am_result
}

// #[marine]
// #[link(wasm_import_module = "host")]
// extern "C" {
//     pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
//     pub fn cp(cmd: Vec<String>) -> MountedBinaryResult;
//     pub fn ln(cmd: Vec<String>) -> MountedBinaryResult;
// }

// #[marine]
// #[link(wasm_import_module = "tu_ipfs")]
// extern "C" {
//     pub fn dag_get(cid: &String, kubo_multiaddr: &String) -> AquaMarineResult;
// }

#[marine]
#[link(wasm_import_module = "tu_car")]
extern "C" {
    pub fn archive(pubname: &String, kubo_multiaddr: &String) -> AquaMarineResult;
    pub fn extract(cid: &String, external_path: &String, aliased_path: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}

// #[marine]
// #[link(wasm_import_module = "tu_volumes")]
// extern "C" {
//     pub fn read(file_name: &str, path: &str ) -> AquaMarineResult;
//     pub fn write(file_name: &str, path: &str, data: &String ) -> AquaMarineResult;
//     pub fn create_dir(path: &str, dir_name: &str) -> AquaMarineResult;
// }
