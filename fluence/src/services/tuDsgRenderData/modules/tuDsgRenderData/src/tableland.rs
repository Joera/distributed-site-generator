use serde_json;
use serde::{Serialize, Deserialize};

pub fn query_w_key_value(key: &str, value: &str) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let table = "tusg_content_80001_8434".to_string();
    let url = "http://tl-sidecar:3088/query".to_string();

    let sql_query: String = format!("SELECT * FROM {} WHERE {} = '{}';", table, key, value);

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

    am_result = am_result.merge_mounted_binary_result(
        crate::curl(args)
    );

    // println!("{:?}", am_result);

    am_result
}

pub fn query(query: &str) -> crate::AquaMarineResult {

    let mut am_result = crate::AquaMarineResult::new();

    let table = "tusg_content_80001_8434".to_string();
    let url = "http://tl-sidecar:3088/query".to_string();

    let sql_query: String = query.replace("{table}", &table);

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

    am_result = am_result.merge_mounted_binary_result(
        crate::curl(args)
    );

    // println!("{:?}", am_result);

    am_result
}