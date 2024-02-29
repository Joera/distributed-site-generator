#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem    };
use tu_types::results::{AquaMarineResult};   

module_manifest!();


pub fn main() {}

#[marine]
pub fn imports(archive_cid: String, publication: TuDsgPublication, kubo_multiaddr: String) -> AquaMarineResult {

    println!("imports: {:?}", archive_cid);

    let mut am_result = AquaMarineResult::new();
    let call_data = marine_rs_sdk::get_call_parameters();
 
    am_result = am_result.merge(
        extract(&archive_cid, &format!("/publication/html/{}/", &publication.name), &format!("/html/{}/", &publication.name), &kubo_multiaddr)
    );

    // templates
    am_result = am_result.merge(
        extract(&publication.templates, &format!("/publication/templates/{}/", &publication.name), &format!("/templates/{}/", &publication.name), &kubo_multiaddr)
    );

    // assets
    am_result = am_result.merge(
        extract(&publication.assets, &format!("/publication/html/{}/assets/", &publication.name), &format!("/html/{}/assets/", &publication.name), &kubo_multiaddr)
    );

    println!("{:?}",am_result);

    am_result
}

#[marine]
#[link(wasm_import_module = "tu_car")]
extern "C" {
    pub fn archive(pubname: &String, kubo_multiaddr: &String) -> AquaMarineResult;
    pub fn extract(cid: &String, external_path: &String, aliased_path: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}