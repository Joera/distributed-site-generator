#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use git2::Repository;

module_manifest!();

pub fn main() {}

#[marine]
pub fn clone(repo_url: String) -> String {

    let call_data = marine_rs_sdk::get_call_parameters();
    let mut am_result = AquaMarineResult::new();

    let vault = format!("/tmp/vault/{}", call_data.particle_id);

    let path = vault + "";
    
    let repo = match Repository::clone(repo_url, path) {
        Ok(repo) => repo,
        Err(e) => panic!("failed to clone: {}", e)
    }
}
