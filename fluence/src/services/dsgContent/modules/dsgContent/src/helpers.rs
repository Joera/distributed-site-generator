use regex::Regex;

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
