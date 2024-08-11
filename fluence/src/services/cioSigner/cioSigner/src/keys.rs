#[allow(unused_imports)]
use alloy_signer::{Signer, SignerSync};
use alloy_signer_local::PrivateKeySigner;
use alloy_primitives::{FixedBytes, B256};

pub fn new() -> String {

    let signer = PrivateKeySigner::random();
    let bytes: B256 = signer.to_bytes();

    crate::memory::store_persistent_key(bytes);
  
    // let public_key = PublicKey::from_secret_scalar(&bytes);
    
    // format_address(public_key)

    String::from("this")
}

pub fn public_address() -> String {

    let key: FixedBytes<32>;

    if crate::memory::provisioned() {
        key = crate::memory::persistent_key();
    } else {
        key = crate::memory::ephemeral_key();
    }

    let signer = PrivateKeySigner::from_bytes(&key).unwrap();
    signer.address().to_string()
}

// pub fn new_dev() -> Vec<String> {

//     let secret = NonZeroScalar::random(&mut OsRng);
//     crate::memory::store_persistent_key(secret.to_string());

//     let public_key = PublicKey::from_secret_scalar(&secret);
//     let address = format_address(public_key);
  
//   vec!(address, secret_string)
// }

// pub fn wallet() -> Wallet<SigningKey> {
//   let secret_string = crate::memory::persistent_key();
//   let secret_key = decode_secret_key(secret_string).into();
//   Wallet::from_bytes(secret_key)
// }


// pub fn from_secret(seed_phrase: String) -> String {

//     let wallet = Wallet::from_mnemonic(seed_phrase)?;
//     let private_key = wallet.private_key().to_vec().try_into()?;
//     crate::memory::store_persistent_key(private_key);
//     wallet.public_key().unwrap()
// }

// fn format_address(public_key: PublicKey) -> String {

//   let hash = public_key.serialize()[1..65].keccak256();
//   let trimmed: [u8; 20] = hash[12..32].try_into().unwrap();
//   format!("0x{}", hex::encode(trimmed))
// }

// fn encode_secret_key(skey : SecretKey) -> String {
//   hex::encode(skey.serialize())
// }

// fn decode_secret_key(secret_string: String ) -> SecretKey {   
//     SecretKey::from_slice(&hex::decode(secret_string).unwrap()).unwrap()   
// }