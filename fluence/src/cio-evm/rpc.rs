use eyre::Result;
use std::fs;
use std::path::PathBuf;
use serde_json::Value;
use crate::utils::cleanJson;
use alloy_primitives::Bytes;

pub fn get_transaction_count(sender: &String, rpc: &String) -> Result<u64> {

    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_getTransactionCount\", \"params\":[\"{}\",\"latest\"], \"id\":{}}}", sender, nonce);

    let res: Value = crate::curl::post(&rpc, "gas", data, false)?;

    Ok(
        crate::utils::hex_to_u64(cleanJson(&res))?.into()
    )
}

pub fn feeData(rpc: &String) -> Result<Vec<u128>> {

    let block_count = 5;
    let reward_percentiles = vec![10.0, 20.0, 30.0];
    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_feeHistory\", \"params\":[{},\"latest\",{:?}], \"id\":{}}}", block_count, reward_percentiles, nonce);

    let fee_history: Value = crate::curl::post(&rpc, "gas", data, false)?;

    let max_fee_per_gas = crate::gas::calculate_max_fee(&fee_history["result"]["baseFeePerGas"])?;
    let max_priority_fee_per_gas = crate::gas::calculate_max_priority_fee(&fee_history["result"]["reward"])?;
        
    Ok(
        vec![
            max_fee_per_gas.into(), 
            max_priority_fee_per_gas
        ]
    )
}

pub fn gas_price_for_raw_transaction(rpc: &String) -> Result<u128> {

    let nonce = crate::utils::get_nonce().unwrap();
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_gasPrice\", \"params\":[], \"id\":{}}}", nonce);

    let res: Value = crate::curl::post(&rpc, "gas", data, false)?;
    let n: u64 = crate::utils::hex_to_u64(cleanJson(&res))?;
    let nn = 2 * n;

    Ok(nn.into())
}

pub fn send_raw_tx(rpc: &String, params: String) -> Result<String> {

    let nonce = crate::utils::get_nonce().unwrap();
    let data = format!("{{\"jsonrpc\": \"2.0\",\"method\": \"eth_sendRawTransaction\", \"params\": [\"{}\"],\"id\":{}}}", params, nonce);

    let response: Value = crate::curl::post(rpc, "tx", data, true)?;

    if !response.is_null() {
    
        Ok(
            cleanJson(&response)
        )

    } else {

        Err(eyre::eyre!("error sending raw transaction"))
    }

}

pub fn call(contract_address: String, params: Bytes, rpc: &String) -> Result<String> {

    let nonce = crate::utils::get_nonce()?;

    let params = format!("0x{}", hex::encode(params));

    let data = format!("{{\"jsonrpc\":\"{}\",\"method\":\"{}\", \"params\":[{{\"to\":\"{}\",\"data\":\"{}\"}},\"latest\"], \"id\":{}}}", 
        String::from("2.0"),
        String::from("eth_call"), 
        contract_address, 
        params, 
        nonce   
    );

    let response: Value = crate::curl::post(rpc, "tx", data, false )?;

    if !response.is_null() {
    
        Ok(
            cleanJson(&response)
        )

    } else {

        Err(eyre::eyre!("error sending raw transaction"))
    }

    // println!("kanariez res{:?}", res);
    // let data = cleanJson(&res)[2..].to_string();
    // println!("kanariez data{:?}", data);
    // let bytes = hex::decode(data).unwrap();

    // Ok(
    //     bytes
    // )
}

pub fn create_filter(contract: String, topic: String, from_block: String, rpc: &String) -> Result<String> {
    
    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_newFilter\", \"params\":[{{\"fromBlock\":\"{}\",\"address\":\"{}\",\"topics\":[[\"{}\"],null,null]}}], \"id\":{}}}", from_block, contract, topic, nonce);
    let res: Value = crate::curl::post(rpc, "tx", data, false)?;

    Ok(
        cleanJson(&res)
    )
}

pub fn poll_filter(filter: String, rpc: &String) -> Result<Vec<crate::types::EventLog>> {

    let mut logs: Vec<crate::types::EventLog> = vec!();

    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_getFilterChanges\", \"params\":[\"{}\"], \"id\":{}}}", filter, nonce);
    let v: Value = crate::curl::post(rpc, "tx", data, false)?;

    if let Some(array) = v.as_array() {

        for l in array {

            let mut log = crate::types::EventLog {
                address: cleanJson(&l["address"]),
                block_number: cleanJson(&l["blockNumber"]),
                params: vec!(),
                transaction_hash: cleanJson(&l["transactionHash"])
            };

            //TO DO: make generic

            log.params.push(
                crate::topic::decode_address(cleanJson(&l["topics"][1])[2..].to_string()).unwrap()
            );

            log.params.push(
                crate::topic::decode_address(cleanJson(&l["topics"][2])[2..].to_string()).unwrap()
            );

            log.params.push(
                crate::topic::decode_string(cleanJson(&l["data"])[2..].to_string()).unwrap()
            );
    
            logs.push(log);
        }
    }

    Ok(
        logs
    )

}
// pub fn estimate_gas(rpc: &String) -> Result<u128> {

  
//     let nonce = crate::utils::get_nonce().unwrap();
//     let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_estimateGas\", \"params\":[{{ \"to\": \"{}\", \"gas\": \"{}\", \"gasPrice\": \"{}\", \"value\": \"0x0\", \"data\": \"{}\"}}], \"id\":{}}}"
//     , nonce);

//     let res: Value = curl::post(&rpc, "tx", data);
        
// } 