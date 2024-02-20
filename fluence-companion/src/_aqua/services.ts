/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';

// Services
export interface TuDsgAuthorFromJsonDef {
    parse: (s: string, callParams: CallParams$$<'s'>) => { content_mappings: string; name: string; repository: string; } | Promise<{ content_mappings: string; name: string; repository: string; }>;
}
export function registerTuDsgAuthorFromJson(service: TuDsgAuthorFromJsonDef): void;
export function registerTuDsgAuthorFromJson(serviceId: string, service: TuDsgAuthorFromJsonDef): void;
export function registerTuDsgAuthorFromJson(peer: IFluenceClient$$, service: TuDsgAuthorFromJsonDef): void;
export function registerTuDsgAuthorFromJson(peer: IFluenceClient$$, serviceId: string, service: TuDsgAuthorFromJsonDef): void;
export function registerTuDsgAuthorFromJson(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "json",
    "functions": {
        "fields": {
            "parse": {
                "domain": {
                    "fields": {
                        "s": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "TuDsgAuthorData",
                            "fields": {
                                "content_mappings": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "repository": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgPublicationFromJsonDef {
    parse: (s: string, callParams: CallParams$$<'s'>) => { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; } | Promise<{ name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }>;
}
export function registerTuDsgPublicationFromJson(service: TuDsgPublicationFromJsonDef): void;
export function registerTuDsgPublicationFromJson(serviceId: string, service: TuDsgPublicationFromJsonDef): void;
export function registerTuDsgPublicationFromJson(peer: IFluenceClient$$, service: TuDsgPublicationFromJsonDef): void;
export function registerTuDsgPublicationFromJson(peer: IFluenceClient$$, serviceId: string, service: TuDsgPublicationFromJsonDef): void;
export function registerTuDsgPublicationFromJson(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "json",
    "functions": {
        "fields": {
            "parse": {
                "domain": {
                    "fields": {
                        "s": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgPublishDef {
    fetch: (cid: string, networked_ipfs: string, callParams: CallParams$$<'cid' | 'networked_ipfs'>) => { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; } | Promise<{ name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }>;
    import_templates: (publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, kubo_multiaddr: string, callParams: CallParams$$<'publication' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
}
export function registerTuDsgPublish(service: TuDsgPublishDef): void;
export function registerTuDsgPublish(serviceId: string, service: TuDsgPublishDef): void;
export function registerTuDsgPublish(peer: IFluenceClient$$, service: TuDsgPublishDef): void;
export function registerTuDsgPublish(peer: IFluenceClient$$, serviceId: string, service: TuDsgPublishDef): void;
export function registerTuDsgPublish(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgPublish",
    "functions": {
        "fields": {
            "fetch": {
                "domain": {
                    "fields": {
                        "cid": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "networked_ipfs": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "import_templates": {
                "domain": {
                    "fields": {
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgHostDef {
    a_record: (publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, ip: string, callParams: CallParams$$<'publication' | 'ip'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    certify: (publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, callParams: CallParams$$<'publication'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    restart: (callParams: CallParams$$<null>) => boolean | Promise<boolean>;
    update: (html_cid: string, publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, kubo: string, callParams: CallParams$$<'html_cid' | 'publication' | 'kubo'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
}
export function registerTuDsgHost(service: TuDsgHostDef): void;
export function registerTuDsgHost(serviceId: string, service: TuDsgHostDef): void;
export function registerTuDsgHost(peer: IFluenceClient$$, service: TuDsgHostDef): void;
export function registerTuDsgHost(peer: IFluenceClient$$, serviceId: string, service: TuDsgHostDef): void;
export function registerTuDsgHost(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgHost",
    "functions": {
        "fields": {
            "a_record": {
                "domain": {
                    "fields": {
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "ip": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "certify": {
                "domain": {
                    "fields": {
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "restart": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "bool",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "update": {
                "domain": {
                    "fields": {
                        "html_cid": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgRendererDef {
    collect: (publication_name: string, kubo_multiaddr: string, callParams: CallParams$$<'publication_name' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    imports: (archive_cid: string, publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, kubo_multiaddr: string, callParams: CallParams$$<'archive_cid' | 'publication' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    single: (ro: { body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }, kubo_multiaddr: string, callParams: CallParams$$<'ro' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    test: (callParams: CallParams$$<null>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
}
export function registerTuDsgRenderer(service: TuDsgRendererDef): void;
export function registerTuDsgRenderer(serviceId: string, service: TuDsgRendererDef): void;
export function registerTuDsgRenderer(peer: IFluenceClient$$, service: TuDsgRendererDef): void;
export function registerTuDsgRenderer(peer: IFluenceClient$$, serviceId: string, service: TuDsgRendererDef): void;
export function registerTuDsgRenderer(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgRenderer",
    "functions": {
        "fields": {
            "collect": {
                "domain": {
                    "fields": {
                        "publication_name": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "imports": {
                "domain": {
                    "fields": {
                        "archive_cid": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "single": {
                "domain": {
                    "fields": {
                        "ro": {
                            "name": "TuDsgRenderObject",
                            "fields": {
                                "body": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "path": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domain": {
                                    "name": "TuDsgDomain",
                                    "fields": {
                                        "dns": {
                                            "name": "TuDsgDns",
                                            "fields": {
                                                "auth_key": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                },
                                                "custodian": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                },
                                                "item_id": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                }
                                            },
                                            "tag": "struct"
                                        },
                                        "url": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                },
                                "publication_name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "template": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "test": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgRenderUndressedDef {
    collect: (publication_name: string, kubo_multiaddr: string, callParams: CallParams$$<'publication_name' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    imports: (archive_cid: string, publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, kubo_multiaddr: string, callParams: CallParams$$<'archive_cid' | 'publication' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    single: (ro: { body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }, kubo_multiaddr: string, callParams: CallParams$$<'ro' | 'kubo_multiaddr'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
    test: (callParams: CallParams$$<null>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
}
export function registerTuDsgRenderUndressed(service: TuDsgRenderUndressedDef): void;
export function registerTuDsgRenderUndressed(serviceId: string, service: TuDsgRenderUndressedDef): void;
export function registerTuDsgRenderUndressed(peer: IFluenceClient$$, service: TuDsgRenderUndressedDef): void;
export function registerTuDsgRenderUndressed(peer: IFluenceClient$$, serviceId: string, service: TuDsgRenderUndressedDef): void;
export function registerTuDsgRenderUndressed(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgRenderUndressed",
    "functions": {
        "fields": {
            "collect": {
                "domain": {
                    "fields": {
                        "publication_name": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "imports": {
                "domain": {
                    "fields": {
                        "archive_cid": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "single": {
                "domain": {
                    "fields": {
                        "ro": {
                            "name": "TuDsgRenderObject",
                            "fields": {
                                "body": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "path": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domain": {
                                    "name": "TuDsgDomain",
                                    "fields": {
                                        "dns": {
                                            "name": "TuDsgDns",
                                            "fields": {
                                                "auth_key": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                },
                                                "custodian": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                },
                                                "item_id": {
                                                    "name": "string",
                                                    "tag": "scalar"
                                                }
                                            },
                                            "tag": "struct"
                                        },
                                        "url": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                },
                                "publication_name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "template": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "kubo_multiaddr": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "test": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgContentDef {
    bulk: (publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }, post_type: string, subnet_kubo: string, callParams: CallParams$$<'publication' | 'post_type' | 'subnet_kubo'>) => { body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }[] | Promise<{ body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }[]>;
    create_render_objects: (task: { author: { content_mappings: string; name: string; repository: string; }; payload: string; post_type: string; slug: string; publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }; }, body_cid: string, subnet_kubo: string, callParams: CallParams$$<'task' | 'body_cid' | 'subnet_kubo'>) => { body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }[] | Promise<{ body: string; name: string; path: string; domain: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }; publication_name: string; template: string; }[]>;
    persist_single: (task: { author: { content_mappings: string; name: string; repository: string; }; payload: string; post_type: string; slug: string; publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }; }, subnet_kubo: string, callParams: CallParams$$<'task' | 'subnet_kubo'>) => string | Promise<string>;
    test: (callParams: CallParams$$<null>) => { author: string; slug: string; id: string; date: string; content_hash: string; post_type: string; tags: string[]; } | Promise<{ author: string; slug: string; id: string; date: string; content_hash: string; post_type: string; tags: string[]; }>;
}
export function registerTuDsgContent(service: TuDsgContentDef): void;
export function registerTuDsgContent(serviceId: string, service: TuDsgContentDef): void;
export function registerTuDsgContent(peer: IFluenceClient$$, service: TuDsgContentDef): void;
export function registerTuDsgContent(peer: IFluenceClient$$, serviceId: string, service: TuDsgContentDef): void;
export function registerTuDsgContent(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgContent",
    "functions": {
        "fields": {
            "bulk": {
                "domain": {
                    "fields": {
                        "publication": {
                            "name": "TuDsgPublication",
                            "fields": {
                                "name": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "assets": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "domains": {
                                    "type": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "mapping": {
                                    "type": {
                                        "name": "TuDsgTemplate",
                                        "fields": {
                                            "reference": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "path": {
                                                "name": "string",
                                                "tag": "scalar"
                                            },
                                            "collections": {
                                                "type": {
                                                    "name": "TuDsgCollection",
                                                    "fields": {
                                                        "key": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "source": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "ripples": {
                                                "type": {
                                                    "name": "TuDsgRipple",
                                                    "fields": {
                                                        "post_type": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "query": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        },
                                                        "value": {
                                                            "name": "string",
                                                            "tag": "scalar"
                                                        }
                                                    },
                                                    "tag": "struct"
                                                },
                                                "tag": "array"
                                            },
                                            "file": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "tag": "array"
                                },
                                "templates": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "governor": {
                                    "name": "string",
                                    "tag": "scalar"
                                }
                            },
                            "tag": "struct"
                        },
                        "post_type": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "subnet_kubo": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "type": {
                                "name": "TuDsgRenderObject",
                                "fields": {
                                    "body": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "name": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "path": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "domain": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "publication_name": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "template": {
                                        "name": "string",
                                        "tag": "scalar"
                                    }
                                },
                                "tag": "struct"
                            },
                            "tag": "array"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "create_render_objects": {
                "domain": {
                    "fields": {
                        "task": {
                            "name": "TuDsgPublishTask",
                            "fields": {
                                "author": {
                                    "name": "TuDsgAuthorData",
                                    "fields": {
                                        "content_mappings": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "name": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "repository": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                },
                                "payload": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "post_type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "slug": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "publication": {
                                    "name": "TuDsgPublication",
                                    "fields": {
                                        "name": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "assets": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "domains": {
                                            "type": {
                                                "name": "TuDsgDomain",
                                                "fields": {
                                                    "dns": {
                                                        "name": "TuDsgDns",
                                                        "fields": {
                                                            "auth_key": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            },
                                                            "custodian": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            },
                                                            "item_id": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            }
                                                        },
                                                        "tag": "struct"
                                                    },
                                                    "url": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "tag": "array"
                                        },
                                        "mapping": {
                                            "type": {
                                                "name": "TuDsgTemplate",
                                                "fields": {
                                                    "reference": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "path": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "collections": {
                                                        "type": {
                                                            "name": "TuDsgCollection",
                                                            "fields": {
                                                                "key": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "query": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "source": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "value": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                }
                                                            },
                                                            "tag": "struct"
                                                        },
                                                        "tag": "array"
                                                    },
                                                    "ripples": {
                                                        "type": {
                                                            "name": "TuDsgRipple",
                                                            "fields": {
                                                                "post_type": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "query": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "value": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                }
                                                            },
                                                            "tag": "struct"
                                                        },
                                                        "tag": "array"
                                                    },
                                                    "file": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "tag": "array"
                                        },
                                        "templates": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "governor": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                }
                            },
                            "tag": "struct"
                        },
                        "body_cid": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "subnet_kubo": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "type": {
                                "name": "TuDsgRenderObject",
                                "fields": {
                                    "body": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "name": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "path": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "domain": {
                                        "name": "TuDsgDomain",
                                        "fields": {
                                            "dns": {
                                                "name": "TuDsgDns",
                                                "fields": {
                                                    "auth_key": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "custodian": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "item_id": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "url": {
                                                "name": "string",
                                                "tag": "scalar"
                                            }
                                        },
                                        "tag": "struct"
                                    },
                                    "publication_name": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "template": {
                                        "name": "string",
                                        "tag": "scalar"
                                    }
                                },
                                "tag": "struct"
                            },
                            "tag": "array"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "persist_single": {
                "domain": {
                    "fields": {
                        "task": {
                            "name": "TuDsgPublishTask",
                            "fields": {
                                "author": {
                                    "name": "TuDsgAuthorData",
                                    "fields": {
                                        "content_mappings": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "name": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "repository": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                },
                                "payload": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "post_type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "slug": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "publication": {
                                    "name": "TuDsgPublication",
                                    "fields": {
                                        "name": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "assets": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "domains": {
                                            "type": {
                                                "name": "TuDsgDomain",
                                                "fields": {
                                                    "dns": {
                                                        "name": "TuDsgDns",
                                                        "fields": {
                                                            "auth_key": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            },
                                                            "custodian": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            },
                                                            "item_id": {
                                                                "name": "string",
                                                                "tag": "scalar"
                                                            }
                                                        },
                                                        "tag": "struct"
                                                    },
                                                    "url": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "tag": "array"
                                        },
                                        "mapping": {
                                            "type": {
                                                "name": "TuDsgTemplate",
                                                "fields": {
                                                    "reference": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "path": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    },
                                                    "collections": {
                                                        "type": {
                                                            "name": "TuDsgCollection",
                                                            "fields": {
                                                                "key": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "query": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "source": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "value": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                }
                                                            },
                                                            "tag": "struct"
                                                        },
                                                        "tag": "array"
                                                    },
                                                    "ripples": {
                                                        "type": {
                                                            "name": "TuDsgRipple",
                                                            "fields": {
                                                                "post_type": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "query": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                },
                                                                "value": {
                                                                    "name": "string",
                                                                    "tag": "scalar"
                                                                }
                                                            },
                                                            "tag": "struct"
                                                        },
                                                        "tag": "array"
                                                    },
                                                    "file": {
                                                        "name": "string",
                                                        "tag": "scalar"
                                                    }
                                                },
                                                "tag": "struct"
                                            },
                                            "tag": "array"
                                        },
                                        "templates": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "governor": {
                                            "name": "string",
                                            "tag": "scalar"
                                        }
                                    },
                                    "tag": "struct"
                                }
                            },
                            "tag": "struct"
                        },
                        "subnet_kubo": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "test": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "TuDsgContentData",
                            "fields": {
                                "author": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "slug": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "id": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "date": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "content_hash": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "post_type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tags": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface MyServiceDef {
    greeting: (name: string, callParams: CallParams$$<'name'>) => string | Promise<string>;
}
export function registerMyService(service: MyServiceDef): void;
export function registerMyService(serviceId: string, service: MyServiceDef): void;
export function registerMyService(peer: IFluenceClient$$, service: MyServiceDef): void;
export function registerMyService(peer: IFluenceClient$$, serviceId: string, service: MyServiceDef): void;
export function registerMyService(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "myService",
    "functions": {
        "fields": {
            "greeting": {
                "domain": {
                    "fields": {
                        "name": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}

export interface TuDsgDbDef {
    store: (content: { author: string; slug: string; id: string; date: string; content_hash: string; post_type: string; tags: string[]; }, callParams: CallParams$$<'content'>) => { errors: string[]; results: string[]; } | Promise<{ errors: string[]; results: string[]; }>;
}
export function registerTuDsgDb(service: TuDsgDbDef): void;
export function registerTuDsgDb(serviceId: string, service: TuDsgDbDef): void;
export function registerTuDsgDb(peer: IFluenceClient$$, service: TuDsgDbDef): void;
export function registerTuDsgDb(peer: IFluenceClient$$, serviceId: string, service: TuDsgDbDef): void;
export function registerTuDsgDb(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "tuDsgDb",
    "functions": {
        "fields": {
            "store": {
                "domain": {
                    "fields": {
                        "content": {
                            "name": "TuDsgContentData",
                            "fields": {
                                "author": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "slug": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "id": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "date": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "content_hash": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "post_type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tags": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "AquaMarineResult",
                            "fields": {
                                "errors": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "results": {
                                    "type": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                }
                            },
                            "tag": "struct"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


