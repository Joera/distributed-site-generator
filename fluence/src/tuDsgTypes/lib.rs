use serde::{Deserialize, Serialize};
use serde_json::{Value};
use std::collections::BTreeMap;
use marine_rs_sdk::marine;

#[marine] 
#[derive(Debug, Serialize, Deserialize)]
pub struct DsgAuthorData {
    pub name: String,
    pub repository: String,
    pub content_mappings: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgCollection {
    pub source: String,
    pub key: String,
    pub value: String,
    pub query: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgRipple {
    pub query: String,
    pub value: String,
    pub post_type: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgTemplate {
    pub reference: String,
    pub file: String,
    pub path: String,
    pub collections: Vec<DsgCollection>,
    pub ripples: Vec<DsgRipple>
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgDns {
    pub custodian: String,
    pub item_id: String,
    pub auth_key: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgDomain {
    pub url: String,
    pub dns: DsgDns
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct DsgTable {
    pub id : String,
    pub gateway: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct DsgPublication {
    pub assets: String,
    pub contract: String,
    pub controller: String,
    pub domains: Vec<DsgDomain>,
    pub mapping: Vec<DsgTemplate>,
    pub name: String,
    pub storage: String,
    pub table: DsgTable,
    pub templates: String,
    pub rpc: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DsgRenderObject {
    pub name: String,
    pub post_type: String,
    pub template: DsgTemplate,
    pub publication_name: String,
    pub domain: DsgDomain,
    pub body_cid: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct DsgTask {
    pub author: DsgAuthorData,
    pub hash: String,
    pub items: Vec<DsgRenderObject>,
    pub payload: String,
    pub post_type: String, 
    pub publication: DsgPublication,
    pub slug: String,
}

#[marine]
#[derive(Debug, Serialize, Deserialize)]
pub struct DsgContentItem {
    pub author: String,
    pub categories: String,
    pub content_cid: String,
    pub creation_date: String,
    pub id: String,
    pub modified_date: String,
    pub parent: String,
    pub post_type: String,
    pub publication: String,
    pub slug: String,
    pub tags: String,
    pub title: String
}

impl DsgContentItem {
    pub fn to_btreemap(&self) -> BTreeMap<String, Value> {
        let mut map = BTreeMap::new();
        // map.insert("id".to_string(), serde_json::to_value(self.id.clone()).unwrap());
        map.insert("title".to_string(), serde_json::to_value(self.title.clone()).unwrap());
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
pub struct DsgMapped {

    pub item: DsgContentItem,
    pub body: String
}


#[derive(Debug,Serialize, Deserialize)]
pub struct TemplateData  {
    pub body: BTreeMap<String, Value>,
    pub collections: BTreeMap<String, Vec<BTreeMap<String, Value>>>,
    pub base_url: String,
    pub assets_url: String,
    pub render_env: String
}

