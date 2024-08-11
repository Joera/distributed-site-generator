#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::get_call_parameters;
use marine_rs_sdk::WasmLoggerBuilder;
use tiny_keccak::{Hasher, Keccak};
use cid::Cid;
use log;
use std::io;

module_manifest!();

pub fn main() {

    WasmLoggerBuilder::new()
    .with_log_level(log::LevelFilter::Info)
    .build()
    .unwrap();
}

fn hash(s: String) ->  [u8; 32] {

    let mut hasher = Keccak::v256();
    hasher.update(s.as_bytes());
    let mut output = [0u8; 32]; // Keccak-256 outputs 32 bytes
    hasher.finalize(&mut output);
    output
}

fn hamming_distance(a: &[u8], b: &[u8]) -> u32 {
    a.iter()
        .zip(b)
        .map(|(&x, &y)| (x ^ y).count_ones())
        .sum()
}

fn cid_to_bytes(cid_str: &str) -> Result<Vec<u8>, io::Error> {
  
    let cid = cid_str.parse::<Cid>().unwrap();  
    let b = cid.hash().to_bytes();
    Ok(b)
} 

fn xorDistance(bytes1: &[u8], bytes2: &[u8])-> Result<Vec<u8>, io::Error> {
 
    let xor_bytes: Vec<u8> = bytes1.iter()
    .zip(bytes2.iter())
    .map(|(b1, b2)| b1 ^ b2)
    .collect();
    
    Ok(xor_bytes)
}

fn bytestoNumber(xor_bytes: Vec<u8>) -> Result<i32, io::Error>{

    let mut distance: i32 = 0;

    let padded_xor_bytes = if xor_bytes.len() % 4 != 0 {
        let mut padded = xor_bytes.clone();
        let padding_length = 4 - (xor_bytes.len() % 4);
        padded.extend(vec![0u8; padding_length]);
        padded
    } else {
        xor_bytes
    };

    for chunk in padded_xor_bytes.chunks(4) {
        let mut chunk_array = [0u8; 4];
        for (i, byte) in chunk.iter().enumerate() {
            chunk_array[i] = *byte;
        }
        distance ^= i32::from_be_bytes(chunk_array);
    }

    Ok(distance)
}

#[marine]
pub fn getHammingDistance(worker_id: String, task: String) -> u32 {
   
    hamming_distance(
        &hash(worker_id), 
        &hash(task)
    )
}

#[marine]
pub fn getXORDistance(cid1: String, cid2: String) -> i32 {
   
    let bytes1 = cid_to_bytes(&cid1).unwrap();
    
    let bytes2 = cid_to_bytes(&cid2).unwrap();
    
    // Ensure both byte arrays have the same length
    let len = std::cmp::min(bytes1.len(), bytes2.len());
    let bytes1 = &bytes1[..len];
    let bytes2 = &bytes2[..len];

    let xor = xorDistance(bytes1,bytes2).unwrap();
    
    let distance = bytestoNumber(xor).unwrap();

    // // will this yield more equitable distribution on fixed set of worker ids 
    // let distance = if distance < 0 {
    //     distance.abs()
    // } else {
    //     distance
    // };

    distance
}


#[marine]
pub fn whoami() -> String {

    let p = get_call_parameters();

    p.host_id
}

