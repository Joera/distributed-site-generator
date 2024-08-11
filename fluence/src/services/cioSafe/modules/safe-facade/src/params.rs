
use eyre::Result;
use std::str::FromStr;
use serde_json::Value;
use hex::{decode as hex_decode, encode as hex_encode};

use ethers_core::abi::{
    ethereum_types::{H160,H256},
    decode
};

use alloy_primitives::{
    Address,
    Bytes,
    Signature,
    TxKind,
    Uint

};


use ethabi_contract::use_contract;

use ethabi::{
    Function,
    Param,
    ParamType,
    StateMutability,
    Token
};


pub const JSON_RPC: &'static str = "2.0";

pub fn create_safe(owners: Vec<String>, treshold: u8) -> Result<Bytes> {

    let function_name = String::from("createSafe");
    let owners_ref: Vec<&str> = owners.iter().map(|s| s.as_str()).collect();

    let data = include_str!("../../../abi.json");
    let abi: Value = serde_json::from_str(data).unwrap(); 

    if let Some(array) = abi.as_array() {
        if let Some(&ref abi_fn) = array.iter().find(|&x| x["name"] == function_name) {

            let function: Function = crate::abi::parse(abi_fn.clone());

            let address_tokens: Vec<Token> = owners_ref.into_iter()
                .map(|addr| H160::from_str(&addr).unwrap()) 
                .map(Token::Address).collect();

            let encoded_input = match function.encode_input(&[
                Token::Array(address_tokens),
                Token::Uint(treshold.into())
            ]) {
                Ok(encoded) => encoded,
                Err(e) => {
                    eprintln!("Error encoding function input: {:?}", e);
                    vec![]
                }
            };
            
           
            Ok(encoded_input.into())
    
        } else {

            println!("kanarie: abi fn not found");
            Ok(Bytes::new())
        }
    } else {

        println!("kanarie: abi file not found");
        Ok(Bytes::new())
    } 
}

pub fn updateHtmlRoot(cid: String) -> Result<Bytes> {

    let function = Function {
        name: "updateHtmlRoot".to_string(),
        inputs: vec![
            Param {
                internal_type: Some("string".to_string()), 
                name: "_html_root".to_string(),
                kind: ParamType::String
            }
        ],
        outputs: vec![],
        constant: Some(false),
        state_mutability: StateMutability::NonPayable
    };

    let encoded_input = match function.encode_input(&[
        Token::String(cid),
    ]) {
        Ok(encoded) => encoded,
        Err(e) => {
            eprintln!("Error encoding function input: {:?}", e);
            vec![]
        }
    };
    
   
    Ok(encoded_input.into())

}
