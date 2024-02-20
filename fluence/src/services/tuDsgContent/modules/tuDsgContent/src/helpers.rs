use regex::Regex;

pub fn slugify(input: &str) -> String {
    let re = Regex::new(r"[^a-zA-Z0-9_-]").unwrap();

    let slug = re.replace_all(input, "-");
    slug.to_lowercase()
}
