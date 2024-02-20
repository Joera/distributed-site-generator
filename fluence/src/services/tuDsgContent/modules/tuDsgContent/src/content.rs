use serde_json::{json, Value};
use crate::HashMap;

pub fn map(mappings: Value, payload: Value, post_type: &String) -> String {

    let mut mapped_content: serde_json::Map<String, serde_json::Value> = serde_json::Map::new();

    let mapping: HashMap<String,Vec<String>> = serde_json::from_value(mappings[&post_type].clone()).unwrap();

    for (mapping_key, mapping_value) in mapping.iter() {

        let mut content_value: &Value = &json!(null);

        if mapping_value.len() == 1 {
            if payload[&mapping_value[0]] != "null".to_string() {
                content_value = &payload[&mapping_value[0]];
            } else {
                content_value = &json!(null);
            }
        } else if mapping_value.len() == 2 {
           // this is an json like array of json like objects ... 
           // how to quickly do a find? 
            let mut keys: Vec<&String> = vec!();
            if let Value::Array(array) = &payload[&mapping_value[0]] {
                for o in array {
                    if let Some(object) = o.as_object() {
                        keys = object.keys().collect();  
                    } 
                }
            }

            if let Some(index) = keys.iter().position(|&x| x == mapping_key) {
                content_value = &payload[&mapping_value[0]][index][&mapping_value[1]];
            } else {
                content_value = &json!(null);
            }
        }
            
        mapped_content.insert(
            mapping_key.to_string(),
            content_value.clone()
        );
    }

    serde_json::to_string(&Value::Object(mapped_content.clone())).unwrap()
}