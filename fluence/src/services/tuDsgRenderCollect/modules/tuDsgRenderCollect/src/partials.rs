
use std::fs;
use std::path::Path;
use handlebars::Handlebars;

pub fn load(publication_name : &String, mut handlebars: &mut Handlebars) -> bool {

    let partials = fs::read_dir(&format!("/templates/{}/partials/", publication_name))
    .unwrap()
    .filter_map(|e| e.ok())
    .map(|e| e.path())
    .collect::<Vec<_>>();

    // println!("{:?}", partials);

    for path in partials.iter() {

        let _path = Path::new(path);
        let file_name = path.file_stem().unwrap().to_str().unwrap();
        // PARTIALS 
        let res = crate::read(&format!("{}/partials/{}.handlebars", publication_name, &file_name),"/templates/");

        for e in res.errors.iter() {
            println!("{:?}", e);
        }
        if res.output.len() == 1 {
            handlebars.register_template_string(&file_name, std::str::from_utf8(&res.output[0]).unwrap());
        }
    }

    true

}