use eyre::Result;
use serde_json::Value;

pub fn calculate_max_fee(base_fees: &Value) -> Result<u128> {
    
    let latest_base_fee = base_fees
        .as_array().unwrap()
        .last().unwrap();

    let u = crate::utils::jsonValueToU128(&latest_base_fee).unwrap();

    Ok(u * 2)  // Using a multiplier of 2    
}

pub fn calculate_max_priority_fee(rewards: &Value) -> Result<u128> {
    
    let priority_fees: Vec<u128> = rewards.as_array().unwrap()
        .iter()
        .map(|block| crate::utils::jsonValueToU128(&block[1]).unwrap())
        .collect();

    Ok(*priority_fees.iter().max().unwrap_or(&0u128))
}


