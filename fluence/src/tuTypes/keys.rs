//use marine_rs_sdk::marine;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct TUSecretKey {
    private_key_bytes: [u8; 32],
    key_format: String
}
