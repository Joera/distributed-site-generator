#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuContentItem, TuDsgRipple, TuDsgTable, TuDsgCollection, TuDsgRenderObject};
use tu_types::results::AquaMarineResult;
use crate::serde_json::Value;
use cio_curl_effector_imports as curl;
use cio_curl_effector_imports::{CurlRequest,CurlResult,HttpHeader};
use std::fs;
use std::path::PathBuf;


module_manifest!();

mod types;
mod table;
mod query;

pub fn main() {}

use serde_json;

// extern crate serde;
#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};

#[marine]
pub fn insert(content: TuContentItem, table: TuDsgTable, gateway: String) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

  //  let content: crate::TuContentItem = rmp_serde::from_slice(&contentAsBinary).unwrap();

    // let mut buf = Vec::new();
    // content.content.serialize(&mut Serializer::new(&mut buf)).unwrap();
    // am_result.output.push(buf);

    let url = format!("{}/record", gateway);

    let h = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };

    let sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table.id);

    let tl_request = types::TLReq {
        table: table.id,
        sql_query,
        content
    };

    // println!("{:?}", tl_request);

    let body: String = serde_json::to_string(&tl_request).unwrap();
    let source_path = vault_path("tl_body");
    let target_path = vault_path("tl_response");
    let _ = fs::write(PathBuf::from(source_path.clone()), body);

    let request = CurlRequest {
        url,
        headers: vec![h],
    };

    let response = curl::curl_post(request, source_path, target_path);

    if response.success {
        am_result.results.push("record inserted".to_string())
    }

    else {
        am_result.errors.push(response.error);
    }
 
    

    am_result

}

#[marine]
pub fn batch_insert(content: crate::TuContentItem, table: TuDsgTable) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let _sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table.id);

    am_result
}

#[marine]
pub fn queryRipple(ripple: TuDsgRipple, table: TuDsgTable, gateway: String) -> Vec<TuContentItem> {

   // let mut am_result = crate::AquaMarineResult::new();   
    let url = format!("{}/query", gateway);
    let mut items: Vec<TuContentItem> = vec!();

    let sql_query: String = ripple.query
        .replace("{table}", &table.id)
        .replace("{value}",&format!("'{}'", &ripple.value))
        .replace("{post_type}",&format!("'{}'", &ripple.post_type));

    let result = query::run(url, &sql_query);
   
    let r : Value = serde_json::from_str(&result).unwrap();
    for result in r["results"].as_array().unwrap() {
        items.push(
            serde_json::from_value(result.clone()).unwrap()
        );
    }
    items
}


#[marine]
pub fn queryCollection(collection: TuDsgCollection, table: TuDsgTable) -> Vec<TuContentItem> {

    let mut items: Vec<TuContentItem> = vec!();
    let url = format!("{}/query", table::GATEWAY);
    // let sql_query: String = query
    let sql_query = collection.query
        .replace("{value}",&format!("'{}'", &collection.value))
        .replace("{table}", &table.id);

    let result = query::run(url,&sql_query);
   
    let r : Value = serde_json::from_str(&result).unwrap();
    
    for result in r["results"].as_array().unwrap() {
        let item: TuContentItem  = serde_json::from_value(result.clone()).unwrap();
        items.push(item);
    }

    items
}

#[marine]
pub fn queryCollectionCids(collection: TuDsgCollection, table: TuDsgTable) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let url = format!("{}/query", table::GATEWAY);

    // let sql_query: String = query
    let sql_query = collection.query
        .replace("{value}",&format!("'{}'", &collection.value))
        .replace("{table}", &table.id);

    let result = query::run(url, &sql_query);
   
    let r : Value = serde_json::from_str(&result).unwrap();
    for result in r["results"].as_array().unwrap() {
        let ci: TuContentItem = serde_json::from_value(result.clone()).unwrap();
        am_result.results.push(ci.content_cid);
    }

    println!("should be array of cids: {:?}", am_result.results);

    am_result
}

fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}
