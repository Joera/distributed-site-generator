use marine_rs_sdk::MountedBinaryResult;
use crate::marine;
use serde_json;
use serde::{Serialize, Deserialize};

pub fn insert(content: crate::TuContentItem) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let table : String = "tusg_content_80001_8434".to_string();
    let owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // i prolly meant the deal between author and publication 
   
    let url = "http://tl-sidecar:3088/record".to_string();

    let sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table);

    #[derive(Debug, Serialize, Deserialize)]
    struct TLCreds {
        key: String,
        domain: String
    }

    #[derive(Debug, Serialize, Deserialize)]
    struct TLReq {
        table: String,
        sql_query: String,
        content: crate::TuContentItem
    }

    let tl_request = TLReq {
        table,
        sql_query,
        content
    };

    let body: String = serde_json::to_string(&tl_request).unwrap();

    // println!("{:?}", body);
 
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

    println!("TL in file {:?}", am_result);

    // am_result(content: crate::TuContentItem) -> crate::AquaMarineResult {

    am_result
    // }
}

pub fn batch_insert(content: crate::TuContentItem) -> crate::AquaMarineResult {

    let table : String = "tusg_content_80001_8434".to_string();
    let owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

    let mut am_result = crate::AquaMarineResult::new();

    let sql_query: String = format!("INSERT INTO {} (id, slug, _owner, publication, author, post_type, tags, categories, parent, creation_date, modified_date, content_cid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", table);

    am_result
}

pub fn query(query: &str) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let table : String = "tusg_content_80001_8434".to_string();
    let url = "http://tl-sidecar:3088/query".to_string();

    let sql_query: String = query.replace("{table}", &table);

    println!("{:?}", sql_query);

    #[derive(Debug, Serialize, Deserialize)]
    struct TuQuery {
        query: String
    };

    let q = TuQuery {
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

    // println!("{:?}", args);

    am_result = am_result.merge_mounted_binary_result(
        curl(args)   
    );

    // println!("{:?}", am_result);

    am_result
}

#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}