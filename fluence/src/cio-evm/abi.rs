use eyre::Result;
use serde_json::Value;
use ethabi::{Address, Function,Param,ParamType,StateMutability};
use std::path::Path;
use crate::utils::cleanJson;
// use alloy_json_abi::JsonAbi;
// use alloy_json_abi::Function as AlloyFunction;


fn format(item: &Value) -> Option<Param>  {

    let r: Option<Param>;
    let t: &str = &cleanJson(&item["type"]);

    let kind = match t {
        "uint256" => ParamType::Uint(256),
        "address[]" => ParamType::Array(Box::new(ParamType::Address)),
        "string" => ParamType::String,
        "address" => ParamType::Address,
        &_ => ParamType::Bool
    };

    if Some(&kind).is_some() {
        
        r = Some(Param {
            name: cleanJson(&item["name"]),
            kind,
            internal_type: Some(cleanJson(&item["internalType"]))
        });

    } else {

        r = None;
    }

    r
    
}

fn insAndOuts(abi_fn: &Value, key: &str) -> Result<Vec<Param>>{

    let mut a = vec![];
    if let Some(array) = abi_fn[key].as_array() {
        for item in array {

            if let Some(param) = format(&item) {
                a.push(param)
            }
        }
    } 

    Ok(a)
    
}

// pub fn parse_alt(s: &str, function_name: &str) -> Result<AlloyFunction, eyre::Report> {

//     let abi: JsonAbi = serde_json::from_str(s).unwrap(); 
//     match abi.functions.get(function_name) {
//         Some(f ) => Ok(f[0].clone()),
//         None => Err(eyre::eyre!("function not found"))
//     }
// }

pub fn parse(s: &str, function_name: &str) -> Result<Function> {

    let mut option: Option<Function> = None;
    let abi: Value = serde_json::from_str(s).unwrap(); 

    if let Some(array) = abi.as_array() {
        if let Some(&ref abi_fn) = array.iter().find(|&x| x["name"] == function_name) {

            let mutability = cleanJson(&abi_fn["stateMutability"]);

            if mutability == "view" || mutability == "pure" {

                option = Some(Function {
                        name: cleanJson(&abi_fn["name"]),
                        inputs: insAndOuts(&abi_fn,"inputs")?,
                        outputs: insAndOuts(&abi_fn,"outputs")?,
                        constant: None,
                        state_mutability: StateMutability::View
                });

            } else if mutability == "nonpayable" {

                option = Some(Function {
                        name: cleanJson(&abi_fn["name"]),
                        inputs: insAndOuts(&abi_fn,"inputs")?,
                        outputs: insAndOuts(&abi_fn,"outputs")?,
                        constant: None,
                        state_mutability: StateMutability::NonPayable
                });
                
            } else {

                option = Some(Function {
                    name: cleanJson(&abi_fn["name"]),
                    inputs: insAndOuts(&abi_fn,"inputs")?,
                    outputs: insAndOuts(&abi_fn,"outputs")?,
                    constant: None,
                    state_mutability: StateMutability::Payable
                });         
            }
        }
    }

    match option {
        Some(function) => Ok(function),
        None => Err(eyre::eyre!("function not found"))
    }    
}
