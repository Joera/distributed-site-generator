use marine_rs_sdk::marine;
use marine_rs_sdk::MountedBinaryResult;
use serde::{Deserialize, Serialize};

#[marine]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct AquaMarineResultVecU8 {
    pub output: Vec<Vec<u8>>,
    pub errors: Vec<String>
}

#[marine]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct AquaMarineResultString {
    pub output: Vec<String>,
    pub errors: Vec<String>
}

#[marine]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct AquaMarineResult {
    pub output: Vec<Vec<u8>>,
    pub results: Vec<String>,
    pub errors: Vec<String>
}

impl AquaMarineResult {

    pub fn new() -> AquaMarineResult {

        AquaMarineResult {
            output: vec!(),
            results: vec!(),
            errors: vec!()
        }
    }

    pub fn merge(&mut self, new: AquaMarineResult) -> AquaMarineResult {

        if new.output.len() > 0 {
            for o in new.output {
                self.output.push(o);
            }
        }

        if new.results.len() > 0 {
            for o in new.results {
                self.results.push(o);
            }
        }

        if new.errors.len() > 0 {
            for o in new.errors {
                self.errors.push(o);
            }
        }

        self.clone()
    }

    pub fn merge_mounted_binary_result(&mut self , response: MountedBinaryResult) -> AquaMarineResult {

        // if response.stdout.is_empty() {
        //     self.errors.push("timed_out".into())
        // } 

        if response.stdout.len() > 0  {

            let result = String::from_utf8(response.clone().stdout).unwrap();
            self.results.push(result);
        }

        if response.stderr.len() > 0  {
            self.errors.push(String::from_utf8(response.stderr).unwrap());
        }

        self.clone()
    }
}