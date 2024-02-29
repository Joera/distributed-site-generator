#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuContentItem, TuDsgRipple};
use tu_types::results::AquaMarineResult;
use crate::serde_json::Value;


module_manifest!();

mod types;
mod table;

pub fn main() {}

use serde_json;

// extern crate serde;
#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};

#[marine]
pub fn insert(contentAsBinary: Vec<u8>) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let content: crate::TuContentItem = rmp_serde::from_slice(&contentAsBinary).unwrap();

    let url = "http://tl-sidecar:3088/record".to_string();

    let sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table::ID);

    let tl_request = types::TLReq {
        table: table::ID.to_string(),
        sql_query,
        content
    };

    println!("{:?}", tl_request);

    let body: String = serde_json::to_string(&tl_request).unwrap();
 
    let args = vec!(
        "-s".to_owned(),
        "-H".to_owned(),
        "Content-Type: application/json".to_owned(),
        "-X".to_owned(),
        "POST".to_owned(),
        "--data".to_owned(),    
        body,
        url
    );

    am_result = am_result.merge_mounted_binary_result(
        curl(args)
    );

    println!("TL results {:?}", am_result);

    am_result

}

#[marine]
pub fn batch_insert(content: crate::TuContentItem) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let _sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table::ID);

    am_result
}

#[marine]
pub fn queryRipple(ripple: TuDsgRipple) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let url = "http://tl-sidecar:3088/query".to_string();

    let sql_query: String = ripple.query
        .replace("{table}", &table::ID)
        .replace("{value}",&format!("'{}'", &ripple.value))
        .replace("{post_type}",&format!("'{}'", &ripple.post_type));

    println!("{:?}", sql_query);

    let q = types::TuQuery {
        query: sql_query
    };

    let body: String = serde_json::to_string(&q).unwrap();
 
    let args = vec!(
        "-s".to_owned(),
        "-H".to_owned(),
        "Content-Type: application/json".to_owned(),
        "-X".to_owned(),
        "POST".to_owned(),
        "--data".to_owned(),    
        body,
        url
    );

    let response = curl(args);

    if response.stdout.len() > 0  {

        let r : Value = serde_json::from_str(
            &String::from_utf8(response.clone().stdout).unwrap()
        ).unwrap();

        if r["results"].as_array().unwrap().len() > 0 {
            let mut buf = Vec::new();
            r["results"][0].serialize(&mut Serializer::new(&mut buf)).unwrap();
            am_result.output.push(buf);
        }
    }

    if response.stderr.len() > 0  {
        am_result.errors.push(String::from_utf8(response.stderr).unwrap());
    }

    println!("{:?}", am_result);

    am_result
}

#[marine]
pub fn query(query: &str) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let url = "http://tl-sidecar:3088/query".to_string();

    let sql_query: String = query.replace("{table}", &table::ID);

    println!("{:?}", sql_query);

    let q = types::TuQuery {
        query: sql_query
    };

    let body: String = serde_json::to_string(&q).unwrap();
 
    let args = vec!(
        "-s".to_owned(),
        "-H".to_owned(),
        "Content-Type: application/json".to_owned(),
        "-X".to_owned(),
        "POST".to_owned(),
        "--data".to_owned(),    
        body,
        url
    );

    am_result = am_result.merge_mounted_binary_result(
        curl(args)   
    );

    am_result
}

#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}