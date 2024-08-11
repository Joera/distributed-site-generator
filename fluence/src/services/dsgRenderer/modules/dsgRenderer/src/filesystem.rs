#![allow(unused)]

use crate::AquaMarineResult;
use std::fs;
use std::path::PathBuf;
use std::io;


pub fn create_dir(path: &str, dir_name: &str) -> AquaMarineResult {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();
    
    if let Ok(_result) =  _create_dir(path, &dir_name) {
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


pub fn read(path: &str, file_name: &str) -> AquaMarineResult{

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) = _read(path, &file_name) {
        am_result.output.push(_result);
    } else { 
        am_result.errors.push(format!("could not read file {} from folder {} on {}", file_name, path, call_data.host_id))
    }

    am_result
}


pub fn write(file_name: &str, path: &str, data: &String) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) =  _write(file_name, path, data) {
        am_result.results.push(format!("wrote to {}/publication{}", calldata.service_id, path));
    } else { 
        am_result.errors.push(format!("could not write file {} to folder {} on {}", file_name, path, calldata.host_id))
    }

    am_result

}


pub fn writeBin(file_name: &str, path: &str, data: &Vec<u8>) -> AquaMarineResult {

    let calldata = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    if let Ok(_result) =  _writeBin(file_name, path, data) {
        am_result.results.push(format!("wrote {} to {}{}", file_name, calldata.service_id, path));
    } else { 
        am_result.errors.push(format!("could not write {} to folder {} on {}", file_name, path, calldata.host_id))
    }

    am_result

}


fn _create_dir(

    path: &str, 
    dir_name: &str

) -> Result<(), io::Error> {

    let new_path = path;

    if dir_name != "" { let new_path = format!("{}{}", path, dir_name); } 

    let r = fs::create_dir_all(PathBuf::from(new_path));

    r
    
}


fn _write(

    file_name: &str,
    path: &str, 
    file_content: &String,

) -> Result<(), io::Error> {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::write(PathBuf::from(tmp_filepath.clone()), file_content)
}

fn _writeBin(

    file_name: &str,
    path: &str, 
    file_content: &Vec<u8>,

) -> Result<(), io::Error> {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::write(PathBuf::from(tmp_filepath.clone()), file_content)
}

fn _read(
    
    path: &str, 
    file_name: &str

) -> Result<Vec<u8>, io::Error>  {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::read(tmp_filepath)
}
