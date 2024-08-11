use eyre::Result;
use std::sync::atomic::{AtomicUsize, Ordering};
use ethers_core::types::{U256, Address, NameOrAddress, H160};
use serde_json::Value;


pub static NONCE_COUNTER: AtomicUsize = AtomicUsize::new(1);

pub fn get_nonce() -> Result<u64> {
    let n = NONCE_COUNTER.fetch_add(1, Ordering::SeqCst) as u64;
    Ok(n)
}


pub fn jsonValueToU128(v: &Value) -> Result<u128> {
    let s = v.as_str().unwrap(); 
    Ok(u128::from_str_radix(&s[2..], 16)?)
}

pub fn hex_to_u64(s: String) -> Result<u64> {

    let clean = s.replace("\"","");

    Ok(
        u64::from_str_radix(&clean.as_str()[2..], 16).unwrap()
    )
}

pub fn hex_to_U256(s: String) -> Result<U256> {

    let clean = s.replace("\"","");

    Ok(
        U256::from_str_radix(&clean.as_str()[2..], 16).unwrap()
    )
}



