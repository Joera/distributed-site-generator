#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem, TemplateData };
use tu_types::results::{AquaMarineResult};   

module_manifest!();

mod partials;
mod helpers;
mod renderer;

pub fn main() {}

#[marine]
pub fn single(ro: TuDsgRenderObject, td: Vec<u8>) -> AquaMarineResult {

    println!("{:?}",td);

    let mut am_result = AquaMarineResult::new();
    let mut renderer = renderer::Renderer::new();

    renderer.init();

    am_result.merge(
        renderer.render_template(ro, &td)
    )
}


#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}

#[marine]
#[link(wasm_import_module = "tu_volumes")]
extern "C" {
    pub fn read(file_name: &str, path: &str ) -> AquaMarineResult;
    pub fn write(file_name: &str, path: &str, data: &String ) -> AquaMarineResult;
    pub fn create_dir(path: &str, dir_name: &str) -> AquaMarineResult;
    // pub fn read_dir(path: &str) -> AquaMarineResult
}