use eyre::Result;
use alloy_rlp::{
    Header
};

use alloy_consensus::{
    TxLegacy
};

use alloy_primitives::Signature;

pub fn encoded_len_with_signature(tx: &TxLegacy, signatures: &Vec<Signature>) -> usize {
    
    let mut payload_length = tx.fields_len();
    for s in signatures {
        payload_length += s.rlp_vrs_len();
    }

  //  Header { list: true, payload_length }.length() + payload_length
    payload_length
}




