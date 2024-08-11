#![allow(
    non_snake_case,
    unused_imports,
    unused_variables, 
    unused_imports,
    dead_code
)]
use alloy_primitives::FixedBytes;
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;

use alloy_signer::{
    Signer, 
    SignerSync
};

use alloy_signer_local::{
    LocalSigner, 
    PrivateKeySigner
};

use alloy_consensus::{
    TxEip1559,
    TxLegacy,
    Signed,
    SignableTransaction
};

use alloy_network::{
    EthereumWallet, 
    TxSignerSync
};

use alloy_primitives::{
    B256
};

use hex::encode;
use k256::ecdsa;
use serde::{Deserialize, Serialize};
use std::hash::Hash;
use serde_json::json;
use std::convert::TryInto;


module_manifest!();

mod memory;
mod keys;
mod utils;

pub fn main() {}

#[marine]
pub fn public_address() -> String { 
    keys::public_address()
}

#[marine]
pub fn provision(key: String) -> String { 
    let bytes = hex::decode(key).unwrap();
    let u: [u8; 32]  = bytes.try_into().unwrap();
    let k: FixedBytes<32> = u.into();
    memory::store_persistent_key(k);
    keys::public_address()
}

#[marine]
pub fn rawtx(tx_request_string: &str, chain_id: u64) -> String {
    
  //  let tx_request: TxEip1559 = serde_json::from_str(tx_request_string).unwrap();
    let mut tx_request: TxLegacy = serde_json::from_str(tx_request_string).unwrap();

    let key: FixedBytes<32>;

    if crate::memory::provisioned() {
        key = crate::memory::persistent_key();
    } else {
        key = crate::memory::ephemeral_key();
    }

    let key_string = encode(&key);
    let signer: PrivateKeySigner = key_string.parse().unwrap();
    let signer = signer.with_chain_id(Some(chain_id));

    // WAITING FOR ALLOY SIGNER 0.2.0 -- so all can update to that version
    let signature = signer.sign_transaction_sync(&mut tx_request).unwrap();

    serde_json::to_string(&signature).unwrap()

}




