#![allow(
    unused_variables, 
    unused_imports, 
    deprecated, 
    non_snake_case,
    dead_code
)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::WasmLoggerBuilder;
use marine_rs_sdk::MountedBinaryResult;
use marine_rs_sdk::get_call_parameters;
use tu_dsg_types::{DsgContentItem, DsgRipple, DsgTable, DsgCollection, DsgRenderObject};
use cio_response_types::{AquaMarineResult,AMResponse};
use crate::serde_json::Value;
use curl_effector_imports as curl;
use cio_curl_effector_imports::{ CurlRequest, CurlResult, HttpHeader};
use std::fs;
use std::path::PathBuf;
use chrono::{Utc};
use serde_json;
use log;

module_manifest!();

mod types;
mod table;

use types::TLRequest;
use types::TLQuery;

pub fn main() {

    WasmLoggerBuilder::new()
    // with_log_level can be skipped,
    // logger will be initialized with Info level in this case.
    .with_log_level(log::LevelFilter::Info)
    .build()
    .unwrap();
}


#[marine]
pub fn insert(content: DsgContentItem, dsg_table: DsgTable, optimistic: bool) -> AMResponse {

    // log::info!("rabbit gateway{:?}", dsg_table.gateway);

    let sql_query: String = format!("INSERT INTO {} (id, title, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", dsg_table.id);

    let tl_request = TLRequest {
        table: dsg_table.id,
        sql_query,
        content: serde_json::to_string(&content).unwrap(),
        optimistic
    };

    // log::info!("rabbit {:?}", tl_request);

    let amr = tl_insert(dsg_table.gateway, &tl_request);

    // log::info!("rabbit {:?}", amr);

    amr

    
}

// #[marine]
// pub fn batch_insert(content: crate::TuContentItem, table: TuDsgTable) -> AMResponse {


//     let _sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table.id);

// }

#[marine]
pub fn queryRipple(ripple: DsgRipple, table: DsgTable) -> AMResponse {

    let mut items: Vec<DsgContentItem> = vec!();

    let sql_query: String = ripple.query
        .replace("{table}", &table.id)
        .replace("{value}",&format!("'{}'", &ripple.value))
        .replace("{post_type}",&format!("'{}'", &ripple.post_type));

    let q = types::TLQuery {
        query : sql_query
    };

    let mut amr = tl_query(table.gateway, &q);

    if amr.success {
        println!("rabbit query ripple result: {:?}", amr);
        let r : Value = serde_json::from_str(&amr.result).unwrap();
        for result in r["results"].as_array().unwrap() {
            items.push(
                serde_json::from_value(result.clone()).unwrap()
            );
        }
        amr.result = serde_json::to_string(&items).unwrap();

        return amr

    } else {
        
        return amr
    } 
}


#[marine]
pub fn queryCollection(collection: DsgCollection, table: DsgTable) -> AMResponse {

    let mut items: Vec<DsgContentItem> = vec!();
    
    let sql_query = collection.query
        .replace("{value}",&format!("'{}'", &collection.value))
        .replace("{table}", &table.id);

    let q = types::TLQuery {
        query : sql_query
    };

    println!("rabbit collection query: {:?}", q);
    
    let mut amr = tl_query(table.gateway.to_string(), &q);

    if amr.success {
        println!("rabbit collection result: {:?}", amr);
        let r : Value = serde_json::from_str(&amr.result).unwrap();
        for result in r["results"].as_array().unwrap() {
            let item: DsgContentItem  = serde_json::from_value(result.clone()).unwrap();
            items.push(item);
        }
        amr.result = serde_json::to_string(&items).unwrap();

        return amr

    } else {
        
        return amr
    }
}

#[marine]
pub fn queryCollectionCids(collection: DsgCollection, table: DsgTable) -> AMResponse {

    let mut items: Vec<String> = vec!();

    let sql_query = collection.query
        .replace("{value}",&format!("'{}'", &collection.value))
        .replace("{table}", &table.id);

    let q = types::TLQuery {
        query : sql_query
    };

    let mut amr = tl_query(table.gateway.to_string(), &q);

    if amr.success {  
        let r : Value = serde_json::from_str(&amr.result).unwrap();   
        for result in r["results"].as_array().unwrap() {
            let item: DsgContentItem  = serde_json::from_value(result.clone()).unwrap();
            items.push(item.content_cid);
        }
        amr.result = serde_json::to_string(&items).unwrap();

        amr

    } else {
        
        amr
    }
}

#[marine]
#[module_import("cio_tableland_effector")]
extern "C" {
    pub fn tl_insert(gateway: String, tl_request: &TLRequest) -> AMResponse;
    pub fn tl_query(gateway: String, tl_query: &TLQuery) -> AMResponse;
}