#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use tu_dsg_types::{TuDsgRenderObject, TuDsgDns, TuDsgDomain, TuDsgPublication, TuContentItem, TemplateData };
use tu_types::results::{AquaMarineResult}; 
// use tu_types::bytes::{any_as_u8_slice};
use serde_json::{Map, Value};
use std::collections::BTreeMap;

#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};

module_manifest!();

mod collections;
mod tableland;

pub fn main() {}


#[marine]
pub fn map(ro: TuDsgRenderObject, body_: String, content: Vec<Vec<String>>, publication: TuDsgPublication) -> AquaMarineResult {

  //  println!( "preparing data: {:?}",ro);
    // println!( "preparing data: {:?}",collections_);

    let mut am_result = AquaMarineResult::new();

    let mut collections: BTreeMap<String, Vec<BTreeMap<String, Value>>> = BTreeMap::new();
 
    let mut i = 0;
    for collection in &ro.template.collections {

        let mut data: Vec<BTreeMap<String, Value>> = vec!(); 

        for item in &content[i] {
            let btm: Result<BTreeMap<String, Value>, serde_json::Error> = serde_json::from_str(&item);
            if btm.is_ok() {
                data.push(btm.unwrap())
            }
        }

        println!("should be an vec with collection config: {:?}", ro.template.collections);

        if data.len() > 0 {
            collections.insert(collection.key.clone(), data);
        }
        i = i + 1;
    }

    let body: BTreeMap<String, Value> = serde_json::from_str(&body_).unwrap();
   
    let template_data = TemplateData {
        body,
        collections,
        base_url: "https://x.yz".to_string(),
        assets_url:"../assets".to_string(),
        render_env: "some_publisher".to_string()
    };

   // println!( "prepared data: {:?}",template_data);

    let mut buf = Vec::new();
    template_data.serialize(&mut Serializer::new(&mut buf)).unwrap();
    am_result.output.push(buf);

    am_result
}

#[marine]
#[link(wasm_import_module = "host")]
extern "C" {
    pub fn curl(cmd: Vec<String>) -> MountedBinaryResult;
}
