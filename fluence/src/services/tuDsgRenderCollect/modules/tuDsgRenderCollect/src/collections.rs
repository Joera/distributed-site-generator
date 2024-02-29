#![allow(
    unused
)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_types::results::{ AquaMarineResult};
use tu_dsg_types::{TuDsgRenderObject};

use serde_json::Value;
use std::collections::BTreeMap;

use std::fs;
use std::path::PathBuf;

pub fn fetch_from_api(url: &str) -> AquaMarineResult {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let curl_args = vec![
        String::from("-s"),
        String::from("-X"),
        String::from("GET"),
        url.to_owned()
     //   format!("http://unamore.publikaan.nl/api/images?tags=cd.{{{}}}", "Parijs")
    ];

    let response = crate::curl(curl_args);
      
    am_result.results.push(String::from_utf8(response.stdout).unwrap());
    am_result.errors.push(String::from_utf8(response.stderr).unwrap());

    am_result
}

pub fn gather(ro: &TuDsgRenderObject, data: &BTreeMap<String, Value>, subnet_kubo: &String) -> BTreeMap<String,Vec<BTreeMap<String, Value>>> {

    let mut collections: BTreeMap<String,Vec<BTreeMap<String, Value>>> = BTreeMap::new();

    // println!("ro: {:?}", ro);

    for collection in &ro.template.collections {

        if collection.source == "tableland" {

            let sql_query = collection.query
            .replace("{value}",&format!("'{}'", &collection.value));

            println!("{:?}", sql_query);

            let result = crate::tableland::query(&sql_query);

            if result.results.len() > 0 {
            
                let r: Value = serde_json::from_str(&result.results[0]).unwrap();
                let arr : Vec<Value> = r["results"].as_array().unwrap().to_vec();

                let mut data: Vec<BTreeMap<String, Value>> = vec!(); 

                for i in arr {
                
                    let cid = i["content_cid"].to_string().replace("\"","");
                    let res = crate::dag_get(&cid.clone(), subnet_kubo);
                    if res.results.len() > 0 {
                        data.push(serde_json::from_str(&res.results[0]).unwrap());
                    }
                }

                collections.insert(collection.key.clone(), data);

            }
        }

        if collection.source == "rest" {

            let mut url = format!("http://unamore.publikaan.nl/api/images?tags=cd.\\{{{}\\}}", "Parijs");

            if data.contains_key("args") {
                url = format!("http://unamore.publikaan.nl/api/images?tags=cd.\\{{{}\\}}", data["args"].as_str().unwrap().replace(" ","%20"));
            }

            let res = crate::collections::fetch_from_api(&url);
            let paintings: Vec<BTreeMap<String, Value>> = serde_json::from_str(&res.results[0]).unwrap();
            collections.insert(String::from("paintings"), paintings);
        }
    }
  
    println!("collections: {:?}", collections.len());


    collections
}

