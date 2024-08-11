
use eyre::Result;
use std::str::FromStr;
use serde_json::Value;
use hex::{decode as hex_decode, encode as hex_encode};

// use ethers_core::abi::{
//     ethereum_types::{H160,H256},
//     decode
// };

use alloy_primitives::{
    Address,
    Bytes,
    // hex::serialize,
    Signature,
    TxKind,
    Uint

};

use alloy_rlp::Encodable;

// use alloy_primitives::private::serde::ser::{
//     Serialize
// };


// use serde_json::value::Serializer;

use alloy_consensus::{
    SignableTransaction, TxEip1559, TxLegacy
};

use alloy_eips::eip2930::AccessList;

pub fn eip1559(chain_id: u64, params: Bytes, factory_address: String, sender: String, rpc: String) -> Result<TxEip1559> {

    let fees = crate::rpc::feeData(&rpc).unwrap();
    let to = crate::utils::intoAddress(factory_address, chain_id);
    let count = crate::rpc::get_transaction_count(&sender, &rpc).unwrap();

    Ok(TxEip1559 {
        chain_id: chain_id.into(),
        nonce: count.into(),
        gas_limit: 2_000_000u128.into(),
        max_fee_per_gas: fees[0].into(),
        max_priority_fee_per_gas: fees[1].into(),
        to: TxKind::from(Some(to)).into(),
        value: Uint::from(0),
        access_list: AccessList::default(),
        input : params, 
    })
}

pub fn legacy(chain_id: u64, params: Bytes, contract_address: String, sender: String, rpc: String) -> Result<TxLegacy> {

    let gas_price = crate::rpc::gas_price_for_raw_transaction(&rpc).unwrap();
    let to = crate::utils::intoAddress(contract_address, chain_id);
    let count = crate::rpc::get_transaction_count(&sender, &rpc).unwrap();

    Ok(TxLegacy {
        chain_id: chain_id.into(),
        nonce: count.into(),
        gas_price,  
        gas_limit: 7_000_000u128.into(),
        to: TxKind::from(Some(to)).into(),
        value: Uint::from(0),
        input : params, 
    })
}

pub fn encodedLegacy(tx: TxLegacy, sigs: Vec<Signature>) -> String {

    // to do: add multiple signatures 
    let mut buf = Vec::with_capacity(
        crate::signature::encoded_len_with_signature(&tx,&vec![sigs[0]])
    );
    tx.encode_with_signature_fields(&sigs[0], &mut buf);

    format!("0x{}",hex::encode(buf))
}

pub fn wrapLegacy(tx: String, signatures: Vec<String>) -> String {

    let legacy: TxLegacy = serde_json::from_str(&tx).unwrap();
    let sigs: Vec<Signature> = signatures
        .into_iter()
        .map(|s| serde_json::from_str(&s).unwrap()) 
        .collect();
    
    
    encodedLegacy(legacy, sigs)

    // didnt work 
    // let s = legacy.into_signed(sigs[0]);
    // let mut b = vec![];
    // s.tx().encode(&mut b);
    // format!("0x{}", hex::encode(b))

  
}

