// extern crate serde;
#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};


pub fn encode<T>(content: T) -> Vec<u8> {

    let mut buf = Vec::new();
    content.serialize(&mut Serializer::new(&mut buf)).unwrap();
    buf
}

pub fn decode<T>(buf: Vec<u8>) -> T {

    rmp_serde::from_slice(&buf).unwrap()
    
}
