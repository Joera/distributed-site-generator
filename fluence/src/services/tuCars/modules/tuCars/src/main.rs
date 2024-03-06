#![allow(unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use std::fs;
use std::path::PathBuf;
use serde_json::Value;
use std::{thread, time};
use tu_types::results::AquaMarineResult;
// use tu_dsg_helpers::multiaddr::{to_url};


module_manifest!();

pub fn main() {}

#[marine]
pub fn extract(contents: String, path: String) -> AquaMarineResult {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let vault = format!("/tmp/vault/{}", call_data.particle_id);


WWERE GONNA try and USE IPFS ADD RECURSIVE
-- then do a get from remote in subnet 

    println!("contents: {:?}", contents);
    // let target = format!("/tmp/vault/{}{}", call_data.particle_id, path);
    // println!("target: {:?}", target);

    // let timeout = time::Duration::from_millis(100);
   
    // thread::sleep(timeout);

    
    // let filecontent = fs::read(&source).unwrap();
      

    // println!("what am i seeing: {:?}", filecontent);

    // let tmp_filepath = format!("{}{}", vault, "/archive.car");
    // fs::write(PathBuf::from(tmp_filepath.clone()), filecontent);

    // could this be a buff that can be unpacked? 
 
      
    // am_result = am_result.merge_mounted_binary_result(
    //     car_utils(
    //         vec![
    //             String::from("ex"),
    //             String::from("-c"),
    //             source,
    //             String::from("-t"),
    //             target.to_string()
    //         ]
    //     )
    // );

    // println!("response from car extraction: {:?}", am_result);

    am_result

}

#[marine]
pub fn archive(path: &String, kubo_multiaddr: &String) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let workdir = format!("/.fluence/services/workdir/{}", calldata.service_id);
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
      
    am_result
}


#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn car_utils(md: Vec<String>) -> MountedBinaryResult;
}



