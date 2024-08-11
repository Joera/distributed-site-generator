
use eyre::Result;
use serde_json::Value;

use alloy_primitives::{
    Address,
    Bytes,
    hex::encode as hex_encode,
    U256
};


use alloy_json_abi::{
    Function
};

use alloy_dyn_abi::{
    DynSolValue,
    JsonAbiExt,
    FunctionExt
};

use std::str::FromStr;


pub enum EvmArg {
    Str(String),
    Address(Address),
    Num(U256),
    ArrayOfStrings(Vec<String>),
    ArrayOfAddresses(Vec<String>),
}

// pub fn tokenize_string(s: String) -> Token {
//     Token::String(s)
// }

pub fn encode(abi_function: String, inputs: &Vec<DynSolValue>) -> Result<Bytes> {

    let func = Function::parse(&abi_function).unwrap();

    let encoded_input = match func.abi_encode_input(&inputs) {
        Ok(encoded) => encoded,
        Err(e) => {
            eprintln!("Error encoding function input: {:?}", e);
            vec![]
        }
    };
    
    Ok(encoded_input.into()) 
}

pub fn decode (abi_function: String, result: Vec<u8>) -> Result<Vec<Value>> {

    let func = Function::parse(&abi_function).unwrap();

    let decoded_output = match func.abi_decode_output(&result,false) {
        Ok(decoded) => decoded,
        Err(e) => {
            println!("kanariez Error decoding function output: {:?}", e);
            vec![]
        }
    };

    println!("kanariez decoded output {:?}", decoded_output);

    let outputs: Vec<Value> = decoded_output.into_iter()
        .map(|d| detokenize(&d))
        .collect();
    
    Ok(outputs.into()) 
}

fn intoArrayOfAddresses(addrs: Vec<Value>) -> DynSolValue {

    let arrr = addrs.into_iter()
        .map(|addr| Address::from_str(&addr.as_str().unwrap()).unwrap())
        .map(DynSolValue::Address)
        .collect();

        DynSolValue::Array(arrr)
}

fn intoArrayOfStrings(arr: Vec<Value>) -> DynSolValue {

    let arrr = arr.into_iter()
        .map(|s| DynSolValue::String(s.to_string()))
        .collect();

        DynSolValue::Array(arrr)
}

fn is_eth_address(arg: &Value) -> bool {
    match arg {
        Value::String(s) => s.len() == 42 && s.starts_with("0x"),
        _ => false
    }
}

fn tokenize(arg: &Value) -> DynSolValue {

    match arg {
        Value::String(s) => {

            if is_eth_address(&arg) {
                DynSolValue::Address(Address::from_str(&s.to_string()).unwrap())
            } else {
                DynSolValue::String(s.to_string())
            }
        },
        Value::Bool(b) => DynSolValue::Bool(*b),
        Value::Number(n) => DynSolValue::Uint(U256::from(n.as_i64().unwrap()),4),
        Value::Array(a) => {
            
            if is_eth_address(&a[0]) { 
                intoArrayOfAddresses(a.to_vec())
            } else {                   
                intoArrayOfStrings(a.to_vec())
            }
        },
        _ => DynSolValue::String("".to_string())
    }
}

fn detokenize(arg: &DynSolValue) -> Value {

    println!("kanariez arg {:?}", arg);
    // TODO: other token types
    match arg {
        DynSolValue::String(s) => serde_json::from_str(&format!("\"{}\"", s)).unwrap(),
        DynSolValue::Uint(n,usize) => serde_json::from_str(&n.to_string()).unwrap(),
        _ => serde_json::from_str("").unwrap()
    }
}

pub fn encode_args(function: String, args: String) -> Result<Bytes> {

    let v: Value = serde_json::from_str(&args).unwrap();
    let args = v.as_array().unwrap().into_iter().map(|a| tokenize(&a)).collect();

    let params = crate::params::encode(
                function,
                &args
            ).unwrap();
    
    Ok(params) 

}