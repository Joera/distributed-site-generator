use handlebars::Handlebars;
use handlebars::handlebars_helper;
use chrono::NaiveDate;

use serde::Serialize;
use std::fs;
use rmp_serde;

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

    }

    pub fn render_template(self: &mut Self, ro: crate::TuDsgRenderObject, td: &Vec<u8>) -> crate::AquaMarineResult {
        
        let mut am_result = crate::AquaMarineResult::new();
        let calldata = marine_rs_sdk::get_call_parameters();
        let vault = format!("/tmp/vault/{}", calldata.particle_id);

        crate::partials::load(&ro.publication_name, &mut self.handlebars, &vault);

        let res = crate::filesystem::read(&vault, &ro.template.file);
        for e in res.errors.iter() {
            println!("{:?}", e);
        }
        if res.output.len() == 1 {

            self.handlebars.register_template_string("t1",  String::from_utf8(res.output[0].clone()).unwrap());

            let template_data: crate::TemplateData = rmp_serde::from_slice(&td).unwrap();

            println!("should be parsed template data: {:?}", template_data);
        
            let html = self.handlebars.render("t1", &template_data).unwrap();

            let file_name = "index.html";
            let path = ro.template.path.replace("{slug}", &ro.name).to_owned();
            let folder = format!("/html/{}{}", ro.publication_name, path);

            // println!("{:?}", folder);

            am_result = am_result.merge(
                crate::filesystem::create_dir(
                    &folder,
                    "",
                )
            );

            am_result = am_result.merge(
                crate::filesystem::write(
                    &file_name,
                    &folder,
                    &html.clone()
                )
            );
        }

        am_result
    }
}

