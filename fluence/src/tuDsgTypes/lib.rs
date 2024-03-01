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
    pub table: TuDsgTable,
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
    pub body: String
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
    pub content: String,
    pub content_cid: String
}

// impl rmp::Encode for TuContentItem {
//     fn encode(&self, encoder: &mut rmp::encode::Encoder) -> Result<(), rmp::encode::EncodeError> {
//         encoder.encode_str(&self.id)?;
//         encoder.encode_str(&self.slug)?;
//         encoder.encode_str(&self.publication)?;
//         encoder.encode_str(&self.author)?;
//         encoder.encode_str(&self.post_type)?;
//         encoder.encode_str(&self.tags)?;
//         encoder.encode_str(&self.categories)?;
//         encoder.encode_str(&self.parent)?;
//         encoder.encode_str(&self.creation_date)?;
//         encoder.encode_str(&self.modified_date)?;
//         encoder.encode_str(&self.content)?;
//         Ok(())
//     }
// }

#[derive(Debug,Serialize, Deserialize)]
pub struct TemplateData  {
    pub body: BTreeMap<String, Value>,
    pub collections: BTreeMap<String, Vec<BTreeMap<String, Value>>>,
    pub base_url: String,
    pub assets_url: String,
    pub render_env: String
}