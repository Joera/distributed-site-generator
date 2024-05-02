
use std::fs;
use std::path::Path;
use handlebars::Handlebars;

pub fn load(publication_name : &String, mut handlebars: &mut Handlebars, vault: &String) -> bool {

    // let calldata = marine_rs_sdk::get_call_parameters();
    // let vault = format!("/tmp/vault/{}/templates/partials", calldata.particle_id);

    // println!("vault: {:?}", vault);
    let folder = format!("{}/templates/partials", vault);
    // println!("folder: {:?}", folder);

    // let root = fs::read_dir(&vault)
    //     .unwrap()
    //     .filter_map(|e| e.ok())
    //     .map(|e| e.path())
    //     .collect::<Vec<_>>();

    // println!("{:?}", root);

    let partials = fs::read_dir(&folder)
        .unwrap()
        .filter_map(|e| e.ok())
        .map(|e| e.path())
        .collect::<Vec<_>>();

    // println!("{:?}", partials);

    for path in partials.iter() {

        let _path = Path::new(path);
        let file_name = path.file_stem().unwrap().to_str().unwrap();
        // PARTIALS 
        let res = crate::filesystem::read(&folder, &format!("/{}.handlebars", file_name));

        for e in res.errors.iter() {
            println!("{:?}", e);
        }
        if res.output.len() == 1 {
            handlebars.register_template_string(&file_name, std::str::from_utf8(&res.output[0]).unwrap());
        }
    }

    true

}