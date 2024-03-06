#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{ TuDsgDns, TuDsgDomain, TuDsgPublication };
use tu_types::results::{AquaMarineResult};   

module_manifest!();

pub fn main() {}

#[marine]
pub fn serve(publication: TuDsgPublication) -> AquaMarineResult {
    
    let mut am_result = AquaMarineResult::new();
    let _call_data = marine_rs_sdk::get_call_parameters();
 

    am_result
}

#[marine]
pub fn addManual(pubName: String) -> AquaMarineResult {
    
    let mut am_result = AquaMarineResult::new();
    let _call_data = marine_rs_sdk::get_call_parameters();

    let path = format!("/.fluence/shared/{}/", pubName);

    let args = vec![
        String::from("add"),
        String::from("-r"),
        String::from("-Q"),
        String::from(path)
    ];
  
    let response = ipfs(args);

    if response.stdout.len() > 0  {
      
        let r = &String::from_utf8(response.clone().stdout).unwrap();
        println!("ipfs add result: {:?}", r);
        am_result.results.push(r.to_string());
    }

    if response.stderr.len() > 0  {

        let err = String::from_utf8(response.stderr).unwrap();
        println!("tl error: {:?}", err);
        am_result.errors.push(err);
    }
 

    am_result
}

#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn ipfs(cmd: Vec<String>) -> MountedBinaryResult;
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}

