pub const NPUBLISH: &str = r#"event NPublish(address indexed author, address indexed publication, string indexed cid)"#;


pub const NPUBLICATIONABI: &str = r#"
[
    {
        "inputs": [
          {
            "internalType": "string",
            "name": "_config",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_html_root",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "config",
            "type": "string"
          }
        ],
        "name": "NConfigUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "author",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "publication",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "string",
            "name": "content",
            "type": "string"
          }
        ],
        "name": "NOffer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "html_root",
            "type": "string"
          }
        ],
        "name": "NRootUpdate",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "author",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "publication",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "content_cid",
            "type": "string"
          }
        ],
        "name": "acceptOffer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "config",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "html_root",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_config",
            "type": "string"
          }
        ],
        "name": "updateConfig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_html_root",
            "type": "string"
          }
        ],
        "name": "updateHtmlRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "author",
            "type": "address"
          }
        ],
        "name": "whitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "whitelisted_authors",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]
"#;