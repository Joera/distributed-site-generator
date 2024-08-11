use std::cell::RefCell;
use alloy_primitives::{B256};

thread_local!(
    static EPHEMERAL_KEY: RefCell<B256> = RefCell::new(B256::random());
    static PERSISTENT_KEY: RefCell<B256> = RefCell::new(Default::default());
);

pub fn store_persistent_key(key: B256) -> () {
    PERSISTENT_KEY.with(|key_cell| {
          key_cell.replace(key);
    });
} 

pub fn initialized() -> bool {

    let zero: B256 = Default::default();
    let mut key = zero.clone();

    EPHEMERAL_KEY.with(|key_cell| {        
        key = *key_cell.borrow_mut()
    });

    if key == zero {
        false
    } else {
        true
    }
}

pub fn provisioned() -> bool {

    let zero: B256 = Default::default();
    let mut key = zero.clone();

    PERSISTENT_KEY.with(|key_cell| {        
        key = *key_cell.borrow_mut()
    });

    if key == zero {
        false
    } else {
        true
    }
}

pub fn ephemeral_key() -> B256 {

    let zero: B256 = Default::default();
    let mut key = zero.clone();

    EPHEMERAL_KEY.with(|key_cell| {        
        key = *key_cell.borrow_mut()
    });

    key
}

pub fn persistent_key() -> B256 {

    let zero: B256 = Default::default();
    let mut key = zero.clone();

    PERSISTENT_KEY.with(|key_cell| {        
        key = *key_cell.borrow_mut()
    });

    key
}


