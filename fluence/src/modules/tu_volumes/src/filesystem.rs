#![allow(unused)]

use std::fs;
use std::path::PathBuf;
use std::io;

pub fn create_dir(

    path: &str, 
    dir_name: &str

) -> Result<(), io::Error> {

    let new_path = path;

    if dir_name != "" { let new_path = format!("{}{}", path, dir_name); } 

    fs::create_dir_all(PathBuf::from(new_path))
}

// pub fn read_dir(

//     path: &str, 
//     dir_name: &str

// ) -> Result<(), io::Error> {

//     let new_path = format!("{}{}", path, dir_name);
//     fs::create_dir_all(PathBuf::from(new_path.clone()))
// }

pub fn write(

    file_name: &str,
    path: &str, 
    file_content: &String,

) -> Result<(), io::Error> {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::write(PathBuf::from(tmp_filepath.clone()), file_content)
}

pub fn writeBin(

    file_name: &str,
    path: &str, 
    file_content: &Vec<u8>,

) -> Result<(), io::Error> {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::write(PathBuf::from(tmp_filepath.clone()), file_content)
}

pub fn read(
    
    path: &str, 
    file_name: &str

) -> Result<Vec<u8>, io::Error>  {

    let tmp_filepath = format!("{}{}", path, file_name);
    fs::read(tmp_filepath)
}
