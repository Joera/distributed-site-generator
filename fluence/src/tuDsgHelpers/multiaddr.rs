use regex::Regex;
// use std::error;

// Parses an ip4 multiaddress into an HTTP URL
pub fn to_url(ma_str: &String) -> String {

    // println!("{:?}",ma_str);
    // /ip4/143.176.14.172/tcp/15001/p2p/12D3KooWG4kmwMiSEMMkmQbkVpA3vM1bLom4ZX5wx5KLvDP61LE3
    let ip4_regex = Regex::new(r"/ip4/(?P<host>.*)/tcp/(?P<port>.*)/p2p/(?P<host_id>.*)").unwrap();
    let mut url = String::from("");

    url = match ip4_regex.captures(&ma_str) {
        Some(segments) => {
            let host = segments.name("host").unwrap().as_str();
            let port = segments.name("port").unwrap().as_str();
            format!(
                "http://{host}:{port}",
                host = host,
                port = port,
            )
        }
        None => {
          url
        }
    };

    let dns4_regex = Regex::new(r"/dns4/(?P<container>.*)/tcp/(?P<port>.*)").unwrap();

    url = match dns4_regex.captures(&ma_str) {
        Some(segments) => {
            let container = segments.name("container").unwrap().as_str();
            let port = segments.name("port").unwrap().as_str();
            format!(
                "http://{container}:{port}",
                container = container,
                port = port,
            )
        }
        None => {
          url
        }
    };

    // println!("{:?}",url);

    // Print and return the URL
    // println!("Using JSON-RPC v2 HTTP URL: {}", url);
    url.to_string()
}