use eyre::Result;
use ethers_core::types::Signature as EthersSignature;
use alloy_rlp::{
    Header
};

use alloy_consensus::{
    TxLegacy
};

use alloy_primitives::Signature;

pub fn parse_to_ethers(signature: &String) -> Result<EthersSignature> {

    let v: serde_json::Value = serde_json::from_str(signature).unwrap();

    let json_r: String = v["r"].to_string();
    let json_s: String = v["s"].to_string();
    let json_v: String = v["v"].to_string();

    let r = crate::utils::hex_to_U256(json_r).unwrap();
    let s = crate::utils::hex_to_U256(json_s).unwrap();
    let v = crate::utils::hex_to_u64(json_v).unwrap();

    Ok(EthersSignature { r, s, v })
}

pub fn encoded_len_with_signature(tx: &TxLegacy, signatures: &Vec<Signature>) -> usize {
    
    let mut payload_length = tx.fields_len();
    for s in signatures {
        payload_length += s.rlp_vrs_len();
    }

    // Header { list: true, payload_length }.length() + payload_length
    payload_length
}

// pub fn include(tx: TxEip1559, sig:Signature) -> Result<String> {

//     // encoded_len fn is private in 0.1.4. And i cannot update to 2.0 until alloy-signers has a 2.0 version
//     let l = tx.encoded_len_with_signature(&sig, false);
//     let mut buf = Vec::with_capacity(l);
//     let _ = tx.encode_with_signature(&sig, &mut buf, false);
    
//     Ok(
//         String::from(serialize(&buf ).unwrap().as_str().unwrap())
//     )
// }


