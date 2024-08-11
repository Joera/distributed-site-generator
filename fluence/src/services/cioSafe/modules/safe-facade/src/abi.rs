#[allow(deprecated)]
use serde_json::Value;
use ethabi::{Function,Param,ParamType,StateMutability};

pub fn parse(abi_fn: Value) -> Function {


    // abi_fn["inputs"].iter().map(|(input)| Param {
    //     name: input["name"].to_string().replace("\"", ""),
    //     kind: kind.clone(),
    //     internal_type: Some(i.to_string())
    // }).collect(),


    let mut inputs = vec![];
    let mut outputs = vec![];

    if let Some(array) = abi_fn["inputs"].as_array() {

        for input in array {

            let t: &str = &input["type"].to_string().replace("\"", "");

            let kind = match t {
                "uint256" => ParamType::Uint(256),
                "address[]" => ParamType::Array(Box::new(ParamType::Address)),
                "string" => ParamType::String,
                "address" => ParamType::Address,
                &_ => ParamType::Bool
            };

            if Some(&kind).is_some() {
                inputs.push(
                    Param {
                        name: input["name"].to_string().replace("\"", ""),
                        kind,
                        internal_type: Some(input["internalType"].to_string().replace("\"", ""))
                    }
                )
            }
        }
    }

    if let Some(array) = abi_fn["outputs"].as_array() {

        for output in array {

            let t: &str = &output["type"].to_string();

            let kind = match t {
                "uint256" => ParamType::Uint(256),
                "string" => ParamType::String,
                "address[]" => ParamType::Array(Box::new(ParamType::Address)),
                "address" => ParamType::Address,
                &_ => ParamType::String
            };

            if Some(&kind).is_some() {
                outputs.push(
                    Param {
                        name: output["name"].to_string().replace("\"", ""),
                        kind,
                        internal_type: Some(output["internalType"].to_string().replace("\"", ""))
                    }
                )
            }
        }
    }

    Function {
        name: abi_fn["name"].to_string().replace("\"", ""),
        inputs,
        outputs,
        constant: None,
        state_mutability: StateMutability::View,
    }

}
