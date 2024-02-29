#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::MountedBinaryResult;
use marine_rs_sdk::module_manifest;
use serde_json;
use serde_json::{json, Value};
use tu_dsg_types::{TuDsgAuthorData,TuDsgPublication, TuDsgRenderObject, TuDsgPublishTask, TuContentItem, TuDsgRipple};
use std::collections::HashMap;
use tu_types::results::AquaMarineResult;
// use tu_types::bytes::{pmEncode, pmDecode};

module_manifest!();

mod content;
mod helpers;
// mod tableland;

pub fn main() {}

#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};

// #[marine]
// pub fn bulk(publication: TuDsgPublication, post_type: String, subnet_kubo: String, ) -> Vec<TuDsgRenderObject> {

//     let mut am_result = AquaMarineResult::new();

//     let mut renderObjects: Vec<TuDsgRenderObject> = vec!();

//     let sql_query = format!("select * from {{table}} where post_type = '{}' and publication = '{}'", post_type, publication.name);

//     am_result = am_result.merge(
//         tableland::query(&sql_query)
//     );

//     let res: Value = serde_json::from_str(&am_result.results[0]).unwrap();
//     let items: Vec<TuContentItem> = serde_json::from_value(res["results"].clone()).unwrap();

//     for item in items {

//         let renderObject = TuDsgRenderObject {
//             name: item.slug.clone(),
//             post_type: post_type.clone(),
//             template : publication.mapping.clone().into_iter().find( |m| m.reference == post_type.clone()).unwrap(),
//             publication_name : publication.name.clone(),
//             domain: publication.domains[0].clone(),
//             body: item.content
//         };

//         println!("ci: {:?}", renderObject);    
//         renderObjects.push(renderObject.clone());
//     }

//     renderObjects
// }

#[marine]
pub fn map(task: TuDsgPublishTask, mappings: &str) -> Vec<u8> {

    let mut am_result = AquaMarineResult::new();

    let payload : Value = serde_json::from_str(&task.payload).unwrap();
    
    let body = content::map(
        serde_json::from_str(&mappings).unwrap(),
        serde_json::from_str(&task.payload).unwrap(),
        &task.post_type
    );

    let content = TuContentItem {
        id: payload["sgId"].to_string().replace("\"","").replace("-",""),
        slug: helpers::slugify(&payload["title"].to_string()), // to do: force unique value 
        publication: task.publication.name.clone(),
        author: task.author.name.clone(),
        post_type: task.post_type.clone(),
        tags: payload["tags"].as_array().unwrap().iter().map( |s|  s.to_string()).collect::<Vec<_>>().join(","),
        categories: payload["categories"].as_array().unwrap().iter().map( |s| s.to_string()).collect::<Vec<_>>().join(","),
        parent: payload["parent"].to_string().replace("\"",""),
        creation_date: payload["creation_date"].to_string().replace("\"",""),
        modified_date: payload["modified_date"].to_string().replace("\"",""),
        content: body 
    };

    let mut buf = Vec::new();
    content.serialize(&mut Serializer::new(&mut buf)).unwrap();
    buf
   

}

//     am_result = am_result.merge(
//         tableland::insert(content)
//     );

//     println!("tl: {:?}", am_result);

//     body_cid
// }

#[marine]
pub fn pebble(task: TuDsgPublishTask, content: Vec<u8>) -> TuDsgRenderObject {

    println!("1");

    let renderObject = TuDsgRenderObject {
        name: task.slug.clone(),
        post_type: task.post_type.clone(),
        template : task.publication.mapping.clone().into_iter().find( |m| m.reference == task.post_type.clone()).unwrap(),
        publication_name : task.publication.name.clone(),
        domain: task.publication.domains[0].clone(),
        body: content
    };

    println!("2");
    
    renderObject
}

#[marine]
pub fn ripple(task: TuDsgPublishTask, ripple: TuDsgRipple, content: Vec<u8>) -> TuDsgRenderObject {

    let rippleOject = TuDsgRenderObject {
        name: task.slug.clone(),
        post_type: ripple.post_type.clone(),
        template : task.publication.mapping.clone().into_iter().find( |m| m.reference == ripple.post_type.clone()).unwrap(),
        publication_name : task.publication.name.clone(),
        domain: task.publication.domains[0].clone(),
        body: content
    };

    println!("rippled");

    rippleOject

}


  //  for ripple in renderObject.template.ripples {

        // let tl_result = tableland::query(
        //     &ripple.query
        //     .replace("{value}",&format!("'{}'", &ripple.value))
        //     .replace("{post_type}",&format!("'{}'", &ripple.post_type))
        // );

        // let res : Value = serde_json::from_str(&tl_result.results[0]).unwrap();

        // if let Some(results) = res["results"].as_array() {

        //     for r in results {

        //         // println!("should be an item: : {:?}", r);

        //             let item: TuContentItem = serde_json::from_value(r.clone()).unwrap(); // res["results"][0].into(); // serde_json::from_str(res["results"][0]).unwrap();

        //             // println!("should be the item: : {:?}", item);

        //             // let ipfs_res = dag_get(item.content_cid, &_subnet_kubo);
        //             // let body: Value = serde_json::from_str(&ipfs_res.results[0]).unwrap();

        //             let rippleOject = TuDsgRenderObject {
        //                 name: task.slug.clone(),
        //                 post_type: ripple.post_type.clone(),
        //                 template : task.publication.mapping.clone().into_iter().find( |m| m.reference == ripple.post_type.clone()).unwrap(),
        //                 publication_name : task.publication.name.clone(),
        //                 domain: task.publication.domains[0].clone(),
        //                 body: item.content_cid
        //             };

        //             renderObjects.push(rippleOject);
        //     }
        // }
  //  }

//     println!("renderobjects: {:?}", renderObjects.len());

//     // can i return a tuple? with aqresult AND typed payload? 
//     renderObjects

// }

// #[marine]
// pub fn test() -> TuDsgRenderObject {

//     let a = r#"
//     {
//         "name": "joera.p2p-citizen.eth",
//         "repository": "nieuwsarchief.json",
//         "content_mappings": "bafyreib4clyvdhl3utmca27ktbc6yuj7fm62b5qmwxyamtob5fxz6khski"
//     }"#;

//     let v: serde_json::Value = serde_json::from_str(a).unwrap();
//     let author = TuDsgAuthorData {
//         name: serde_json::to_string(&v["name"]).unwrap(),
//         repository: serde_json::to_string(&v["repository"]).unwrap(), 
//         content_mappings: serde_json::to_string(&v["content_mappings"]).unwrap()
//     };

//     let p = r#"
//         {
//             "name" : "test1",
//             "governor": "joera.p2p-citizen.eth",
//             "domains": [{
//                 "url": "unamore.publikaan.nl",
//                 "dns": {
//                     "custodian" : "digitalocean",
//                     "item_id": "xxx",
//                     "auth_key": "xxx"
//                 } 
//             }],
//             "assets" : "",
//             "templates": "QmfQMarcjyKUNzwQgMKzeY1LS6zEoAQdix2fvcAhMKNdoX",
//             "mapping": [
//                 {
//                     "reference": "home",
//                     "file": "home.handlebars",
//                     "path": "index.html",
//                     "collections": [
//                         {
//                             "key": "posts",
//                             "query": "SELECT * FROM content WHERE post_type = 'post'"
//                         }
//                     ]
//                 },
//                 {
//                     "reference": "post",
//                     "file": "post.handlebars",
//                     "path": "{slug}/index.html",
//                     "collections": [
//                         {
//                             "key": "posts",
//                             "query": "SELECT * from content WHERE post_type = 'post' LIMIT 2"
//                         }
//                     ]
//                 },
//                 {
//                     "reference": "serie",
//                     "file": "serie.handlebars",
//                     "path": "{slug}/index.html",
//                     "collections": [
//                         {
//                             "key": "posts",
//                             "query": "SELECT * from content WHERE post_type = 'post' LIMIT 2"
//                         }
//                     ]
//                 }
//             ]
//         }"#;

//     let v: serde_json::Value = serde_json::from_str(p).unwrap();
//     let publication: TuDsgPublication = serde_json::from_value(v).unwrap();

//     let task = TuDsgPublishTask {
//         payload: String::from("{ \"title\": \"hallo\", \"content\": \"text\" }"),
//         post_type: String::from("post"), 
//         author,
//         publication 
//     };

//     single(task, String::from("/ip4/127.0.0.1/tcp/15001/p2p/xxx"))

// }

// #[marine]
// #[link(wasm_import_module = "tu_ipfs")]
// extern "C" {
//     pub fn file_get(cid: &String, kubo_multiaddr: &String) -> AquaMarineResult;
//     pub fn dag_get(cid: String, kubo_multiaddr: &String) -> AquaMarineResult;
//     pub fn dag_put(obj: String, kubo_multiaddr: &String) -> AquaMarineResult;
// }


