use serde::{Deserialize, Serialize};
use serde_json::{Value};
use std::collections::BTreeMap;
use marine_rs_sdk::marine;

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct TuDsgAuthorData {
    pub name: String,
    pub repository: String,
    pub content_mappings: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgCollection {
    pub source: String,
    pub key: String,
    pub value: String,
    pub query: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgRipple {
    pub query: String,
    pub value: String,
    pub post_type: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgTemplate {
    pub reference: String,
    pub file: String,
    pub path: String,
    pub collections: Vec<TuDsgCollection>,
    pub ripples: Vec<TuDsgRipple>
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgDns {
    pub custodian: String,
    pub item_id: String,
    pub auth_key: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgDomain {
    pub url: String,
    pub dns: TuDsgDns
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct TuDsgTable {
    pub id : String,
    pub gateway: String,
    pub owner: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct TuDsgPublication {
    pub assets: String,
    pub domains: Vec<TuDsgDomain>,
    pub governor: String,
    pub mapping: Vec<TuDsgTemplate>,
    pub name: String,
    pub templates: String,
    pub table: TuDsgTable
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgRenderObject {
    pub name: String,
    pub post_type: String,
    pub template: TuDsgTemplate,
    pub publication_name: String,
    pub domain: TuDsgDomain,
    pub body_cid: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct TuDsgPublishTask {
    pub slug: String,
    pub author: TuDsgAuthorData,
    pub payload: String,
    pub post_type: String, // Vec<u8>
    pub publication: TuDsgPublication // cid? 
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct TuContentItem {
    pub id: String,
    pub slug: String,
    pub publication: String,
    pub author: String,
    pub post_type: String,
    pub tags: String,
    pub categories: String,
    pub parent: String,
    pub creation_date: String,
    pub modified_date: String,
    pub content_cid: String
}

impl TuContentItem {
    pub fn to_btreemap(&self) -> BTreeMap<String, Value> {
        let mut map = BTreeMap::new();
        map.insert("id".to_string(), serde_json::to_value(self.id.clone()).unwrap());
        map.insert("slug".to_string(), serde_json::to_value(self.slug.clone()).unwrap());
        map.insert("publication".to_string(), serde_json::to_value(self.publication.clone()).unwrap());
        map.insert("author".to_string(), serde_json::to_value(self.author.clone()).unwrap());
        map.insert("tags".to_string(), serde_json::to_value(self.tags.clone()).unwrap());
        map.insert("categories".to_string(), serde_json::to_value(self.categories.clone()).unwrap());
        map.insert("parent".to_string(), serde_json::to_value(self.parent.clone()).unwrap());
        map.insert("creation_date".to_string(), serde_json::to_value(self.creation_date.clone()).unwrap());
        map.insert("modified_date".to_string(), serde_json::to_value(self.modified_date.clone()).unwrap());
        map.insert("content_cid".to_string(), serde_json::to_value(self.content_cid.clone()).unwrap());

        map
    }
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct TuDsgMapped {

    pub item: TuContentItem,
    pub body: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct AMResponse {
    pub success: bool,
    pub result: Vec<String>,
    pub error: Vec<String>
}

#[derive(Debug,Serialize, Deserialize)]
pub struct TemplateData  {
    pub body: BTreeMap<String, Value>,
    pub collections: BTreeMap<String, Vec<BTreeMap<String, Value>>>,
    pub base_url: String,
    pub assets_url: String,
    pub render_env: String
}

