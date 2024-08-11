use marine_rs_sdk::marine;

#[marine]
#[derive(Debug)]
pub struct EventLog {
    pub address: String,
    pub block_number: String,
    pub params: Vec<String>,
    pub transaction_hash: String
}

#[marine]
#[derive(Debug)]
pub struct AMEventLogResult {
    pub success: bool,
    pub results: Vec<EventLog>,
    pub error: String
}