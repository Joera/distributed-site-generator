use eyre::Result;
use crate::fs;
use std::path::PathBuf;
use serde_json::Value;

pub fn get_transaction_count(sender: &String, rpc: &String) -> Result<u64> {

    let source_path = crate::vault_path("count_body");
    let target_path = crate::vault_path("count_response");
     
    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_getTransactionCount\", \"params\":[\"{}\",\"latest\"], \"id\":{}}}", sender, nonce);

    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    let response = crate::curl::post(rpc, &source_path, &target_path);
     
    if response.success {
        let result_raw = fs::read_to_string(target_path)?;
        let v: Value = serde_json::from_str(&result_raw)?;
        let result = v["result"].to_string().replace("\"","");
        Ok(crate::utils::hex_to_u64(result)?.into())

    } else {

        Ok(33u64)
    }
}

pub fn feeData(rpc: &String) -> Result<Vec<u128>> {

    let source_path = crate::vault_path("fee_body");
    let target_path = crate::vault_path("fee_response");

    let block_count = 5;
    let reward_percentiles = vec![10.0, 20.0, 30.0];
    
    let nonce = crate::utils::get_nonce()?;
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_feeHistory\", \"params\":[{},\"latest\",{:?}], \"id\":{}}}", block_count, reward_percentiles, nonce);
    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    let response = crate::curl::post(rpc, &source_path, &target_path);

    if response.success {
        let result_raw = fs::read_to_string(target_path)?;
        let fee_history: Value = serde_json::from_str(&result_raw)?;

        let max_fee_per_gas = crate::gas::calculate_max_fee(&fee_history["result"]["baseFeePerGas"])?;
        let max_priority_fee_per_gas = crate::gas::calculate_max_priority_fee(&fee_history["result"]["reward"])?;
        
        Ok(vec![max_fee_per_gas.into(), max_priority_fee_per_gas])

    } else {

        Ok(vec![0u128.into(), 0u128.into()])
    }
}

pub fn gas_price_for_raw_transaction(rpc: &String) -> Result<u128> {

    let source_path = crate::vault_path("gas_body");
    let target_path = crate::vault_path("gas_response");
    
    let nonce = crate::utils::get_nonce().unwrap();
    let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_gasPrice\", \"params\":[], \"id\":{}}}", nonce);

    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    let response = crate::curl::post(rpc, &source_path, &target_path);

    if response.success {
        let result_raw = fs::read_to_string(target_path).unwrap();
        let v: Value = serde_json::from_str(&result_raw).unwrap();
        let result = v["result"].to_string().replace("\"","");

        let n: u64 = crate::utils::hex_to_u64(result)?;
        let nn = 10 * n;
        
        Ok(nn.into())

    } else {
        
        Ok(0u64.into())
    }
}

// pub fn estimate_gas(rpc: &String) -> Result<u128> {

//     let source_path = crate::vault_path("rpc_body");
//     let target_path = crate::vault_path("rpc_response");
    
//     let nonce = crate::utils::get_nonce().unwrap();
//     let data = format!("{{\"jsonrpc\":\"2.0\",\"method\":\"eth_estimateGas\", \"params\":[{{ \"to\": \"{}\", \"gas\": \"{}\", \"gasPrice\": \"{}\", \"value\": \"0x0\", \"data\": \"{}\"}}], \"id\":{}}}"
//     , nonce);

//     let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

//     let response = crate::curl::post(rpc, &source_path, &target_path);

//     if response.success {
//         let result_raw = fs::read_to_string(target_path).unwrap();
//         let v: Value = serde_json::from_str(&result_raw).unwrap();
//         let result = v["result"].to_string().replace("\"","");
        
//         Ok(crate::utils::hex_to_u64(result)?.into())

//     } else {
        
//         Ok(0u64.into())
//     }
// }