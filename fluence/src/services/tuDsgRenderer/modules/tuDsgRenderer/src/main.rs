#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem    };
use tu_types::results::{AquaMarineResult};   

module_manifest!();

mod partials;
mod helpers;
mod renderer;
mod collections;
mod tableland;

pub fn main() {}

// #[marine]
// pub fn test() -> AquaMarineResult {

//     let mut am_result = AquaMarineResult::new();
//     am_result.results.push("harry is gek".to_string());

//     am_result

// }

#[marine]
pub fn imports(archive_cid: String, publication: TuDsgPublication, kubo_multiaddr: String) -> AquaMarineResult {

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

    am_result
}

#[marine]
pub fn single(ro: TuDsgRenderObject, kubo_multiaddr: String) -> AquaMarineResult {

    let mut am_result = AquaMarineResult::new();
    let mut renderer = renderer::Renderer::new();

    renderer.init();

    am_result.merge(
        renderer.render_template(&ro, &kubo_multiaddr)
    )
}

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
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}

#[marine]
#[link(wasm_import_module = "tu_ipfs")]
extern "C" {
    pub fn dag_get(cid: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}

#[marine]
#[link(wasm_import_module = "tu_car")]
extern "C" {
    pub fn archive(pubname: &String, kubo_multiaddr: &String) -> AquaMarineResult;
    pub fn extract(cid: &String, external_path: &String, aliased_path: &String, kubo_multiaddr: &String) -> AquaMarineResult;
}

#[marine]
#[link(wasm_import_module = "tu_volumes")]
extern "C" {
    pub fn read(file_name: &str, path: &str ) -> AquaMarineResult;
    pub fn write(file_name: &str, path: &str, data: &String ) -> AquaMarineResult;
    pub fn create_dir(path: &str, dir_name: &str) -> AquaMarineResult;
    // pub fn read_dir(path: &str) -> AquaMarineResult
}