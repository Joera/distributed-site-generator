use regex::Regex;
use std::io::Write;
use handlebars::{
    Handlebars, 
    HelperDef, 
    RenderContext, 
    Helper, 
    Context, 
    JsonRender, 
    HelperResult, 
    Output, 
    RenderError, 
    PathAndJson, 
    ScopedJson
};
use serde_json::{json,Value};
use thiserror::Error;
use markdown::to_html;
use chrono::NaiveDate;

#[derive(Debug, Error)]
enum HelperError {
    #[error("missing param {position} '{name}' of '{helper_signature}'")]
    MissingParameter {
        position: usize,
        name: String,
        helper_signature: String,
    },
}


pub fn slugify(input: &str) -> String {
    
    let separator = "-";
    let text = input.to_lowercase();

    // Define a regex pattern to match non-alphanumeric characters
    let re = Regex::new(r"[^a-z0-9]+").unwrap();

    // Replace non-alphanumeric characters with the separator
    let slug = re.replace_all(&text, separator);

    // Remove leading and trailing separator characters
    let slug = slug.trim_matches(separator.chars().next().unwrap_or('\0'));

    // Return the slugified string
    slug.to_string()
}



pub fn hbs_slugify (h: &Helper, _: &Handlebars, _: &Context, rc: &mut RenderContext, out: &mut dyn Output) -> HelperResult {
    let input = h.param(0).unwrap().value().as_str().unwrap();
    let slug = slugify(input);
    out.write(slug.as_ref())?;
    Ok(())
}

pub fn if_equals (h: &Helper, _: &Handlebars, _: &Context, rc: &mut RenderContext, out: &mut dyn Output) -> HelperResult {
    let v1 = h.param(0).unwrap().value().as_str().unwrap();
    let v2 = h.param(1).unwrap().value().as_str().unwrap();

    if v1 != v2 {
        h.inverse();
    }
   
    Ok(())
    
}


pub fn format_date (
    h: &Helper, 
    _: &Handlebars, 
    ctx: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let date = h.param(0).unwrap().value().as_str().unwrap();
    let formatted = NaiveDate::parse_from_str(&date.to_string().replace("\"",""), "%Y-%m-%dT%H:%M:%S").unwrap().format("%B %Y").to_string();
    out.write(formatted.as_ref())?;
    Ok(())
      
}

// map .. unique 


fn parse_year(d: &Value) -> Value {

    let fmtd = NaiveDate::parse_from_str(&d.to_string().replace("\"",""),"%Y-%m-%dT%H:%M:%S");

    let year = match fmtd {
        Ok(date) => serde_json::from_str(&date.format("%Y").to_string()).unwrap(),
        Err(_) => return json!(""),
    };


    year
}

pub fn unique_years(
    h: &Helper,     
    _: &Handlebars, 
    ctx: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let input = h.param(0).map(|v| v.value()).cloned().ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 0,
                name: "value".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;

    if let Some(posts) = input.as_array() {
        
        let years: Vec<Value> = posts
            .iter()
            .map(|p| parse_year(&p["creation_date"]) )
            .collect();

        let mut unique_years: Vec<Value> = vec!();

        for year in &years {
            if !unique_years.contains(&year) {
                unique_years.push(year.clone());
            }
        }

        unique_years.sort_by( |a,b| b.as_u64().cmp(&a.as_u64()) );

        let mut ctx = ctx.clone();
        match ctx.data_mut() {
            serde_json::value::Value::Object(m) => m.insert("years".to_owned(), serde_json::Value::Array(unique_years)),
            _ => None,
        };
        rc.set_context(ctx);
   
    }

    Ok(())
}

pub fn filter(
    h: &Helper, 
    _: &Handlebars, 
    ctx: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let key = h.param(0).and_then(|v| v.value().as_str()).ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 0,
                name: "var_name".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;

    let value = h.param(1).and_then(|v| v.value().as_str()).ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 0,
                name: "var_name".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;

    let input = h.param(2).map(|v| v.value()).cloned().ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 1,
                name: "value".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;

    if let Some(posts) = input.as_array() {
 
        let filtered_posts: Vec<Value> = posts
            .iter()
            .filter(|&p| p[key] == value)
            .cloned()
            .collect();

        let mut ctx = ctx.clone();
        
        match ctx.data_mut() {
            serde_json::value::Value::Object(m) => m.insert("filtered".to_owned(), serde_json::Value::Array(filtered_posts)),
            _ => None,
        };
        rc.set_context(ctx);
    }
    
    Ok(())
}

pub fn filter_by_year(
    h: &Helper, 
    _: &Handlebars, 
    ctx: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    // let value = h.param(0).unwrap().value().to_string().as_str().unwrap();

    let value =  h.param(0).map(|v| v.value()).cloned().ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 0,
                name: "value".to_owned(),
                helper_signature: "filter_by_year".to_owned(),
            },
        )
    })?;

    let input = h.param(1).map(|v| v.value()).cloned().ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 1,
                name: "input".to_owned(),
                helper_signature: "filter_by_year".to_owned(),
            },
        )
    })?;

    if let Some(posts) = input.as_array() {
 
        let filtered_posts: Vec<Value> = posts
            .iter()
            .filter(|&p| parse_year(&p["creation_date"]) == value)
            .cloned()
            .collect();

        let mut ctx = ctx.clone();
        
        match ctx.data_mut() {
            serde_json::value::Value::Object(m) => m.insert("filtered".to_owned(), serde_json::Value::Array(filtered_posts)),
            _ => None,
        };
        rc.set_context(ctx);
    }
    
    Ok(())
}

pub fn trim_seo_desc (
    h: &Helper, 
    _: &Handlebars, 
    _: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let v = h.param(0);

    if v.is_some() {
        let mut input = serde_json::to_string(h.param(0).unwrap().value()).unwrap(); // .as_str().unwrap();
      
        let mut output = "";
        if input.chars().count() < 140 {
            output = &input;
        } else {
            output = &input[0..140];
        }

        out.write(output)?;
    }
    
    Ok(())
}


pub fn json (
    h: &Helper, 
    _: &Handlebars, 
    _: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let v = h.param(0);

    if v.is_some() {
        let input = serde_json::to_string(h.param(0).unwrap().value()).unwrap(); // .as_str().unwrap();
        out.write(input.as_ref())?;
    }
    
    Ok(())
}

pub fn markdown (
    h: &Helper, 
    _: &Handlebars, 
    _: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let t = h.param(0);

    if t.is_some() {
        let mut s = serde_json::to_string(h.param(0).unwrap().value()).unwrap();
        s = s.replace("\"", "");
        s = s.replace("\\n","\n");
        let mut output = to_html(&s);
        let re = Regex::new(r"(?:\r\n|\r|\n)").unwrap();
        let output = re.replace_all(&output, "");
        // output = output.replace("\n","");
        // output = output.replace("\"","");
        // println!("{:?}", output);
        out.write(output.as_ref())?;
    }
    
    Ok(())
}

pub fn extract_images (
    h: &Helper, 
    _: &Handlebars, 
    _: &Context, 
    rc: &mut RenderContext, 
    out: &mut dyn Output
) -> HelperResult {

    let t = h.param(0);

    if t.is_some() {
        
        let mut s = serde_json::to_string(h.param(0).unwrap().value()).unwrap();
        // println!("{:?}",s);

        let mut arr: Vec<String> = s.split("<").map( |i| i.to_string()).collect();

        let mut prev_was_image: bool = false;

     //   let mut new_arr: Vec<&str> = Vec::new();

        let mut n = String::from("");

        let l = &arr.len();
        arr[0] = "".to_string();
       // arr[l - 1] = "".to_string();
       arr.remove(l - 1);


        for t in  arr.iter_mut() { 

            if t.starts_with("img") && !prev_was_image {

                let mut o : String = "/section><section class='container images'><".to_owned();
                o.push_str(&t);

                *t = o;

                prev_was_image = true;

            } else  if !t.starts_with("img") &&  prev_was_image { 

                let mut o : String = "/section><section class='small-container'><".to_owned();
                o.push_str(&t);

                *t = o;

                prev_was_image = false;
                 
            }
        }

        
        let s = arr.join("<");

        out.write(s.as_ref())?;
    }
    
    Ok(())
}


pub fn assign_fct(
    h: &Helper,
    _: &Handlebars,
    ctx: &Context,
    rc: &mut RenderContext,
    _: &mut dyn Output,
) -> HelperResult {


    // get parameter from helper or throw an error
    let name = h.param(0).and_then(|v| v.value().as_str()).ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 0,
                name: "var_name".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;
    let value = h.param(1).map(|v| v.value()).cloned().ok_or_else(|| {
        RenderError::from_error(
            "missing parameter",
            HelperError::MissingParameter {
                position: 1,
                name: "value".to_owned(),
                helper_signature: "assign var_name value".to_owned(),
            },
        )
    })?;
    let mut ctx = ctx.clone();
    match ctx.data_mut() {
        serde_json::value::Value::Object(m) => m.insert(name.to_owned(), value),
        _ => None,
    };
    rc.set_context(ctx);

    Ok(())
}
