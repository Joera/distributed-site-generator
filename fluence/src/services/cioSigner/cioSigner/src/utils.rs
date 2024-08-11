use alloy_signer::Signature;

    // pub fn signature_to_vec(signature: &Signature) -> Vec<u8> {
    //     // Allocate a vector with enough capacity to hold r (32 bytes), s (32 bytes), and v (1 byte)
    //     let mut sig_vec = Vec::with_capacity(65);
    //     sig_vec.extend_from_slice(&signature.r);
    //     sig_vec.extend_from_slice(&signature.s);
    //     sig_vec.push(signature.v);

    //     sig_vec
    // }