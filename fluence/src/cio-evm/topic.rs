use ethereum_types::H256;
use ethereum_types::Address;
use hex::{decode as hex_decode};
use ethers_core::abi::{decode, ParamType};

pub fn decode_address(topic: String) -> Result<String, Box<dyn std::error::Error>> {

    let t = hex::decode(topic).unwrap();

    let hash = H256::from_slice(&t);
    // Convert the topic to a slice of bytes
    let bytes = hash.as_bytes();
    
    // Extract the last 20 bytes to get the address
    let address_bytes = &bytes[12..32];
    
    // Convert the address bytes to an Ethereum address
    let address = Address::from_slice(address_bytes);

    Ok(
        format!("{:?}", address)
    )
}

pub fn decode_string(topic: String) -> Result<String, Box<dyn std::error::Error>> {

    let encoded_data = hex_decode(topic).unwrap();
    // TO DO:  this uses ethers. switch to ethabi or alloy 
    let decoded_tokens = decode(&[ParamType::String], &encoded_data).unwrap();

    Ok(decoded_tokens[0].to_string())
}