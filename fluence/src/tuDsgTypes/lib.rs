use serde::{Deserialize, Serialize};
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
pub struct TuDsgPublication {
    pub assets: String,
    pub domains: Vec<TuDsgDomain>,
    pub governor: String,
    pub mapping: Vec<TuDsgTemplate>,
    pub name: String,
    pub templates: String
}

#[marine]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct TuDsgRenderObject {
    pub name: String,
    pub post_type: String,
    pub template: TuDsgTemplate,
    pub publication_name: String,
    pub domain: TuDsgDomain,
    pub body: String // Vec<u8>
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