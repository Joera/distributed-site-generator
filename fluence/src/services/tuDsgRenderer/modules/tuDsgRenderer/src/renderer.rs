use handlebars::Handlebars;
use handlebars::handlebars_helper;
use chrono::NaiveDate;
use serde_json::{Map, Value};
use std::collections::BTreeMap;
use serde::Serialize;
use std::fs;


#[derive(Debug,Serialize)]
pub struct TemplateData  {
    pub body: BTreeMap<String, Value>,
    pub collections: BTreeMap<String, Vec<BTreeMap<String, Value>>>,
    pub base_url: String,
    pub assets_url: String,
    pub render_env: String
}

pub struct Renderer{
    handlebars: Handlebars<'static>,        
}

impl Renderer {

    pub fn new() -> Renderer  {

        let mut handlebars = Handlebars::new();

        Renderer {
            handlebars
        }
    }

    pub fn init(self: &mut Self) {

     
        self.handlebars.register_helper("format_date", Box::new(crate::helpers::format_date));
        self.handlebars.register_helper("slugify", Box::new(crate::helpers::hbs_slugify));
        self.handlebars.register_helper("json", Box::new(crate::helpers::json));
        self.handlebars.register_helper("assign", Box::new(crate::helpers::assign_fct));
        self.handlebars.register_helper("if_equals", Box::new(crate::helpers::if_equals));
        self.handlebars.register_helper("unique_years", Box::new(crate::helpers::unique_years));
        self.handlebars.register_helper("filter", Box::new(crate::helpers::filter));
        self.handlebars.register_helper("filter_by_year", Box::new(crate::helpers::filter_by_year));
        self.handlebars.register_helper("markdown", Box::new(crate::helpers::markdown));
        self.handlebars.register_helper("extract_images", Box::new(crate::helpers::extract_images));
        self.handlebars.register_helper("trim_seo_desc", Box::new(crate::helpers::trim_seo_desc));


        //  read filelist from dir
    }

    pub fn render_template(self: &mut Self, ro : &crate::TuDsgRenderObject, subnet_kubo: &String) -> crate::AquaMarineResult {
        
        let mut am_result = crate::AquaMarineResult::new();

        crate::partials::load(&ro.publication_name, &mut self.handlebars);

        let res = crate::read(&format!("{}/{}",ro.publication_name,&ro.template.file),"/templates/");
        for e in res.errors.iter() {
            println!("{:?}", e);
        }
        if res.output.len() == 1 {

            self.handlebars.register_template_string("t1",  String::from_utf8(res.output[0].clone()).unwrap());

            let result = crate::dag_get(&ro.body, subnet_kubo);

            // println!("dag get result: {:?}", result);
         
            let mut data: BTreeMap<String, Value> = serde_json::from_str(&result.results[0]).unwrap();
           
            let collections = crate::collections::gather(ro, &data, &subnet_kubo);

            let template_data = TemplateData {
                body: data.clone(),
                collections,
                base_url: "https://x.yz".to_string(),
                assets_url:"../assets".to_string(),
                render_env: "some_publisher".to_string()
            };
        
            let html = self.handlebars.render("t1", &template_data).unwrap();

            let file_name = "index.html";
            let path = ro.template.path.replace("{slug}", &crate::helpers::slugify(data["title"].as_str().unwrap())).to_owned();
            let folder = format!("/html/{}{}", ro.publication_name, path);

            // println!("{:?}", folder);

            am_result = am_result.merge(
                crate::create_dir(
                    &folder,
                    "",
                )
            );

            am_result = am_result.merge(
                crate::write(
                    &file_name,
                    &folder,
                    &html.clone()
                )
            );


        }

        // println!("{:?}", am_result);

        am_result
    }
}

