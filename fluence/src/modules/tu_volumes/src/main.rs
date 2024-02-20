#![allow(non_snake_case)]
use marine_rs_sdk::marine;
// use marine_rs_sdk::MountedBinaryResult;
use tu_types::results::{ AquaMarineResult };

mod filesystem;

pub fn main() {}


#[marine]
pub fn create_dir(path: &str, dir_name: &str) -> AquaMarineResult {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();
    
    if let Ok(_result) =  filesystem::create_dir(path, &dir_name) {
        am_result.results.push(format!("created folder {} in {}", dir_name, path));
    } else { 
        am_result.errors.push(format!("could not create folder {} in {} on {}", dir_name, path, call_data.host_id))
    }

    am_result
}

// #[marine]
// pub fn read_dir(path: &str, dir_name: &str) -> AquaMarineResult {

//     let call_data = marine_rs_sdk::get_call_parameters();
//     let mut am_result = AquaMarineResult::new();
    
//     if let Ok(_result) =  filesystem::read_dir(path) {
//         am_result.results.push(format!("read from folder {}", path));
//     } else { 
//         am_result.errors.push(format!("could not read from folder {} on {}", path, call_data.host_id))
//     }

//     am_result
// }

#[marine]
pub fn read(file_name: &str, path: &str) -> AquaMarineResult{

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) =  filesystem::read(path, &file_name) {
        am_result.output.push(_result);
    } else { 
        am_result.errors.push(format!("could not read file {} from folder {} on {}", file_name, path, call_data.host_id))
    }

    am_result
}

#[marine]
pub fn write(file_name: &str, path: &str, data: &String) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) =  filesystem::write(file_name, path, data) {
        am_result.results.push(format!("wrote to {}/publication{}", calldata.service_id, path));
    } else { 
        am_result.errors.push(format!("could not write file {} to folder {} on {}", file_name, path, calldata.host_id))
    }

    am_result

}

#[marine]
pub fn writeBin(file_name: &str, path: &str, data: &Vec<u8>) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) =  filesystem::writeBin(file_name, path, data) {
        am_result.results.push(format!("wrote {} to {}{}", file_name, calldata.service_id, path));
    } else { 
        am_result.errors.push(format!("could not write {} to folder {} on {}", file_name, path, calldata.host_id))
    }

    am_result

}