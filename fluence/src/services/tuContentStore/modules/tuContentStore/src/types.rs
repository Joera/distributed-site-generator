use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct TLCreds {
    key: String,
    domain: String
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TLReq {
    pub table: String,
    pub sql_query: String,
    pub content: crate::TuContentItem
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TuQuery {
    pub query: String
}



