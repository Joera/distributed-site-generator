/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const test_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
     (new $array-inline
      (seq
       (seq
        (seq
         (new $array-inline-0
          (seq
           (seq
            (new %SpellLocation_obj_map
             (seq
              (seq
               (seq
                (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                (ap ("spellId" "743113bb-44d3-4544-b7c9-46768eb44b6a") %SpellLocation_obj_map)
               )
               (ap ("workerId" "12D3KooWK7VMoFkhgNkC6BEGi21hVfVcxUKvkTkfWArSrhJRizvk") %SpellLocation_obj_map)
              )
              (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
             )
            )
            (ap SpellLocation_obj $array-inline-0)
           )
           (canon %init_peer_id% $array-inline-0  #array-inline-0-0)
          )
         )
         (new %Host_obj_map
          (seq
           (seq
            (seq
             (seq
              (seq
               (ap ("definition" "bafkreighfmwh6ij3vblgud2bvbpk6hh43joqcyb3oymqv2bfqinhhr56a4") %Host_obj_map)
               (ap ("dummyDealId" "dsgWorkerV3_12D3KooWAD4ShUWoUeoe77EMnosDaicYbjbeHraC6GXsFMQFKhZW_06698790659765042") %Host_obj_map)
              )
              (ap ("installationSpells" #array-inline-0-0) %Host_obj_map)
             )
             (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
            )
            (ap ("timestamp" "2024-02-29T10:46:19.080Z") %Host_obj_map)
           )
           (canon %init_peer_id% %Host_obj_map  Host_obj)
          )
         )
        )
        (ap Host_obj $array-inline)
       )
       (canon %init_peer_id% $array-inline  #array-inline-1)
      )
     )
    )
    (ap #array-inline-1.$.[0].installationSpells array-inline-1_flat)
   )
   (call %init_peer_id% ("run-console" "print") [array-inline-1_flat])
  )
  (call %init_peer_id% ("callbackSrv" "response") ["hi"])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type TestParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type TestResult = Promise<string>;

export function test(...args: TestParams): TestResult {
    return callFunction$$(
        args,
        {
    "functionName": "test",
    "arrow": {
        "domain": {
            "fields": {},
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
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        test_script
    );
}

export const bulkUpload_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "tasks") [] -tasks-arg-)
   )
   (new $results
    (null)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type BulkUploadParams = [tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[], config?: {ttl?: number}] | [peer: IFluenceClient$$, tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[], config?: {ttl?: number}];

export type BulkUploadResult = Promise<boolean>;

export function bulkUpload(...args: BulkUploadParams): BulkUploadResult {
    return callFunction$$(
        args,
        {
    "functionName": "bulkUpload",
    "arrow": {
        "domain": {
            "fields": {
                "tasks": {
                    "type": {
                        "name": "TuDsgPublishTaskTemp",
                        "fields": {
                            "author": {
                                "name": "string",
                                "tag": "scalar"
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
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
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
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        bulkUpload_script
    );
}

export const goAndFetch_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
          (call %init_peer_id% ("getDataSrv" "hash") [] -hash-arg-)
         )
         (call %init_peer_id% ("getDataSrv" "remote_multiaddress") [] -remote_multiaddress-arg-)
        )
        (new $option-inline
         (seq
          (seq
           (seq
            (new $array-inline
             (seq
              (seq
               (new %SpellLocation_obj_map
                (seq
                 (seq
                  (seq
                   (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                   (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj_map)
                  )
                  (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj_map)
                 )
                 (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                )
               )
               (ap SpellLocation_obj $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (new %Host_obj_map
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj_map)
                  (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj_map)
                 )
                 (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                )
                (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
               )
               (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj_map)
              )
              (canon %init_peer_id% %Host_obj_map  Host_obj)
             )
            )
           )
           (xor
            (ap Host_obj $option-inline)
            (null)
           )
          )
          (canon %init_peer_id% $option-inline  #option-inline-0)
         )
        )
       )
       (new %Hosts_obj_map
        (seq
         (ap ("devWorkerV0" #option-inline-0) %Hosts_obj_map)
         (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
        )
       )
      )
      (ap Hosts_obj.$.devWorkerV0 Hosts_obj_flat)
     )
     (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
    )
    (fold Hosts_obj_flat_flat w-0
     (seq
      (xor
       (seq
        (seq
         (seq
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (call w-0.$.workerId ("aqua-ipfs" "get_from") [-hash-arg- -remote_multiaddress-arg-] ret)
        )
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (seq
             (seq
              (match ret.$.success true
               (ap true $success)
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (seq
               (seq
                (match :error:.$.error_code 10001
                 (ap false $success)
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (seq
               (seq
                (seq
                 (seq
                  (ap :error: -else-error-)
                  (xor
                   (seq
                    (match :error:.$.error_code 10001
                     (ap -if-error- -if-else-error-)
                    )
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                   (seq
                    (ap -else-error- -if-else-error-)
                    (new $-ephemeral-stream-
                     (new #-ephemeral-canon-
                      (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                     )
                    )
                   )
                  )
                 )
                 (fail -if-else-error-)
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
             )
            )
           )
          )
         )
        )
       )
       (seq
        (seq
         (seq
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (fail :error:)
       )
      )
      (next w-0)
     )
     (null)
    )
   )
   (canon %init_peer_id% $success  #success_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#success_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type GoAndFetchParams = [hash: string, remote_multiaddress: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, hash: string, remote_multiaddress: string, config?: {ttl?: number}];

export type GoAndFetchResult = Promise<boolean[]>;

export function goAndFetch(...args: GoAndFetchParams): GoAndFetchResult {
    return callFunction$$(
        args,
        {
    "functionName": "goAndFetch",
    "arrow": {
        "domain": {
            "fields": {
                "hash": {
                    "name": "string",
                    "tag": "scalar"
                },
                "remote_multiaddress": {
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
                        "name": "bool",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        goAndFetch_script
    );
}

export const gatherKubos_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (new $externals
    (new $internals
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (new $option-inline
            (seq
             (seq
              (seq
               (new $array-inline
                (seq
                 (seq
                  (new %SpellLocation_obj_map
                   (seq
                    (seq
                     (seq
                      (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                      (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj_map)
                     )
                     (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj_map)
                    )
                    (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                   )
                  )
                  (ap SpellLocation_obj $array-inline)
                 )
                 (canon %init_peer_id% $array-inline  #array-inline-0)
                )
               )
               (new %Host_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj_map)
                     (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj_map)
                    )
                    (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                   )
                   (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                  )
                  (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj_map)
                 )
                 (canon %init_peer_id% %Host_obj_map  Host_obj)
                )
               )
              )
              (xor
               (ap Host_obj $option-inline)
               (null)
              )
             )
             (canon %init_peer_id% $option-inline  #option-inline-0)
            )
           )
           (new %Hosts_obj_map
            (seq
             (ap ("devWorkerV0" #option-inline-0) %Hosts_obj_map)
             (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
            )
           )
          )
          (ap Hosts_obj.$.devWorkerV0 Hosts_obj_flat)
         )
         (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
        )
        (fold Hosts_obj_flat_flat w-0
         (seq
          (new $res_
           (new $res
            (xor
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (call w-0.$.workerId ("aqua-ipfs" "get_local_api_multiaddr") [] ret)
                    )
                    (ap ret $res)
                   )
                   (new $res_test
                    (seq
                     (seq
                      (fold $res res_fold_var
                       (seq
                        (seq
                         (ap res_fold_var $res_test)
                         (canon w-0.$.workerId $res_test  #res_iter_canon)
                        )
                        (xor
                         (match #res_iter_canon.length 1
                          (null)
                         )
                         (next res_fold_var)
                        )
                       )
                       (never)
                      )
                      (canon w-0.$.workerId $res_test  #res_result_canon)
                     )
                     (ap #res_result_canon res_gate)
                    )
                   )
                  )
                  (new -if-error-
                   (xor
                    (match res_gate.$.[0].success true
                     (seq
                      (new $res_test-0
                       (seq
                        (seq
                         (fold $res res_fold_var-0
                          (seq
                           (seq
                            (ap res_fold_var-0 $res_test-0)
                            (canon w-0.$.workerId $res_test-0  #res_iter_canon-0)
                           )
                           (xor
                            (match #res_iter_canon-0.length 1
                             (null)
                            )
                            (next res_fold_var-0)
                           )
                          )
                          (never)
                         )
                         (canon w-0.$.workerId $res_test-0  #res_result_canon-0)
                        )
                        (ap #res_result_canon-0 res_gate-0)
                       )
                      )
                      (ap res_gate-0.$.[0].multiaddr $internals)
                     )
                    )
                    (seq
                     (ap :error: -if-error-)
                     (xor
                      (match :error:.$.error_code 10001
                       (null)
                      )
                      (fail -if-error-)
                     )
                    )
                   )
                  )
                 )
                 (call w-0.$.workerId ("aqua-ipfs" "get_external_api_multiaddr") [] ret-0)
                )
                (ap ret-0 $res_)
               )
               (new $res__test
                (seq
                 (seq
                  (fold $res_ res__fold_var
                   (seq
                    (seq
                     (ap res__fold_var $res__test)
                     (canon w-0.$.workerId $res__test  #res__iter_canon)
                    )
                    (xor
                     (match #res__iter_canon.length 1
                      (null)
                     )
                     (next res__fold_var)
                    )
                   )
                   (never)
                  )
                  (canon w-0.$.workerId $res__test  #res__result_canon)
                 )
                 (ap #res__result_canon res__gate)
                )
               )
              )
              (new -if-error-
               (xor
                (seq
                 (seq
                  (match res__gate.$.[0].success true
                   (seq
                    (new $res__test-0
                     (seq
                      (seq
                       (fold $res_ res__fold_var-0
                        (seq
                         (seq
                          (ap res__fold_var-0 $res__test-0)
                          (canon w-0.$.workerId $res__test-0  #res__iter_canon-0)
                         )
                         (xor
                          (match #res__iter_canon-0.length 1
                           (null)
                          )
                          (next res__fold_var-0)
                         )
                        )
                        (never)
                       )
                       (canon w-0.$.workerId $res__test-0  #res__result_canon-0)
                      )
                      (ap #res__result_canon-0 res__gate-0)
                     )
                    )
                    (ap res__gate-0.$.[0].multiaddr $externals)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (ap :error: -if-error-)
                   (xor
                    (seq
                     (seq
                      (match :error:.$.error_code 10001
                       (null)
                      )
                      (new $-ephemeral-stream-
                       (new #-ephemeral-canon-
                        (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                       )
                      )
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (fail -if-error-)
                   )
                  )
                  (new $-ephemeral-stream-
                   (new #-ephemeral-canon-
                    (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                   )
                  )
                 )
                 (new $-ephemeral-stream-
                  (new #-ephemeral-canon-
                   (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                  )
                 )
                )
               )
              )
             )
             (seq
              (seq
               (seq
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (fail :error:)
             )
            )
           )
          )
          (next w-0)
         )
         (null)
        )
       )
       (new %Kubos_obj_map
        (seq
         (seq
          (seq
           (seq
            (canon %init_peer_id% $externals  #externals_canon)
            (canon %init_peer_id% $internals  #internals_canon)
           )
           (ap ("externals" #externals_canon) %Kubos_obj_map)
          )
          (ap ("internals" #internals_canon) %Kubos_obj_map)
         )
         (canon %init_peer_id% %Kubos_obj_map  Kubos_obj)
        )
       )
      )
      (call %init_peer_id% ("run-console" "print") [Kubos_obj])
     )
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [Kubos_obj])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type GatherKubosResultType = { externals: string[]; internals: string[]; }

export type GatherKubosParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type GatherKubosResult = Promise<GatherKubosResultType>;

export function gatherKubos(...args: GatherKubosParams): GatherKubosResult {
    return callFunction$$(
        args,
        {
    "functionName": "gatherKubos",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "Kubos",
                    "fields": {
                        "externals": {
                            "type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "tag": "array"
                        },
                        "internals": {
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
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        gatherKubos_script
    );
}

export const testCar_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
        (new $option-inline
         (seq
          (seq
           (seq
            (new $array-inline
             (seq
              (seq
               (new %SpellLocation_obj_map
                (seq
                 (seq
                  (seq
                   (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                   (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj_map)
                  )
                  (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj_map)
                 )
                 (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                )
               )
               (ap SpellLocation_obj $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (new %Host_obj_map
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj_map)
                  (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj_map)
                 )
                 (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                )
                (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
               )
               (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj_map)
              )
              (canon %init_peer_id% %Host_obj_map  Host_obj)
             )
            )
           )
           (xor
            (ap Host_obj $option-inline)
            (null)
           )
          )
          (canon %init_peer_id% $option-inline  #option-inline-0)
         )
        )
       )
       (new %Hosts_obj_map
        (seq
         (ap ("devWorkerV0" #option-inline-0) %Hosts_obj_map)
         (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
        )
       )
      )
      (ap Hosts_obj.$.devWorkerV0 Hosts_obj_flat)
     )
     (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
    )
    (fold Hosts_obj_flat_flat w-0
     (seq
      (seq
       (call %init_peer_id% ("run-console" "print") [w-0])
       (xor
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (ap "kip" $kippen)
              )
              (call w-0.$.workerId ("aqua-ipfs" "get_external_api_multiaddr") [] ret)
             )
             (ap ret $locals)
            )
            (call w-0.$.workerId ("aqua-ipfs" "cat") ["Qmcgjcrdqgs2G99wW9FtiCcUTA2pAVP8gcKV2Cb3KBLN1L"] ret-0)
           )
           (ap ret-0 $res)
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (seq
         (seq
          (seq
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (fail :error:)
        )
       )
      )
      (next w-0)
     )
     (null)
    )
   )
   (par
    (par
     (canon %init_peer_id% $res  #res_canon)
     (canon %init_peer_id% $locals  #locals_canon)
    )
    (canon %init_peer_id% $kippen  #kippen_canon)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [#res_canon #locals_canon #kippen_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type TestCarResultType = [{ contents: string; error: string; success: boolean; }[], { error: string; multiaddr: string; success: boolean; }[], string[]]

export type TestCarParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type TestCarResult = Promise<TestCarResultType>;

export function testCar(...args: TestCarParams): TestCarResult {
    return callFunction$$(
        args,
        {
    "functionName": "testCar",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "IpfsCatResult",
                        "fields": {
                            "contents": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "error": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "success": {
                                "name": "bool",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                },
                {
                    "type": {
                        "name": "IpfsMultiaddrResult",
                        "fields": {
                            "error": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "multiaddr": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "success": {
                                "name": "bool",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                },
                {
                    "type": {
                        "name": "string",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        testCar_script
    );
}

export const renderOnDSG_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "tempTask") [] -tempTask-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
    )
    (new $debug
     (new $cids
      (new $queue
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (new $ipfs_results
                 (new $s
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $option-inline
                         (seq
                          (seq
                           (seq
                            (new $array-inline
                             (seq
                              (seq
                               (new %SpellLocation_obj_map
                                (seq
                                 (seq
                                  (seq
                                   (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                                   (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj_map)
                                  )
                                  (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj_map)
                                 )
                                 (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                                )
                               )
                               (ap SpellLocation_obj $array-inline)
                              )
                              (canon %init_peer_id% $array-inline  #array-inline-0)
                             )
                            )
                            (new %Host_obj_map
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj_map)
                                  (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj_map)
                                 )
                                 (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                                )
                                (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                               )
                               (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj_map)
                              )
                              (canon %init_peer_id% %Host_obj_map  Host_obj)
                             )
                            )
                           )
                           (xor
                            (ap Host_obj $option-inline)
                            (null)
                           )
                          )
                          (canon %init_peer_id% $option-inline  #option-inline-0)
                         )
                        )
                        (new %Hosts_obj_map
                         (seq
                          (ap ("devWorkerV0" #option-inline-0) %Hosts_obj_map)
                          (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
                         )
                        )
                       )
                       (ap Hosts_obj.$.devWorkerV0 Hosts_obj_flat)
                      )
                      (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
                     )
                     (fold Hosts_obj_flat_flat w-0-0
                      (seq
                       (xor
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon w-0-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                               (call w-0-0.$.workerId ("aqua-ipfs" "dag_get") [-tempTask-arg-.$.author] ret)
                              )
                              (ap ret $ipfs_results)
                             )
                             (new $ipfs_results_test
                              (seq
                               (seq
                                (fold $ipfs_results ipfs_results_fold_var
                                 (seq
                                  (seq
                                   (ap ipfs_results_fold_var $ipfs_results_test)
                                   (canon w-0-0.$.workerId $ipfs_results_test  #ipfs_results_iter_canon)
                                  )
                                  (xor
                                   (match #ipfs_results_iter_canon.length 1
                                    (null)
                                   )
                                   (next ipfs_results_fold_var)
                                  )
                                 )
                                 (never)
                                )
                                (canon w-0-0.$.workerId $ipfs_results_test  #ipfs_results_result_canon)
                               )
                               (ap #ipfs_results_result_canon ipfs_results_gate)
                              )
                             )
                            )
                            (call w-0-0.$.workerId ("vault" "cat") [ipfs_results_gate.$.[0].path] ret-0)
                           )
                           (ap ret-0 $s)
                          )
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon w-0-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (new $-ephemeral-stream-
                          (new #-ephemeral-canon-
                           (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                          )
                         )
                        )
                        (seq
                         (seq
                          (seq
                           (new $-ephemeral-stream-
                            (new #-ephemeral-canon-
                             (canon w-0-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                            )
                           )
                           (new $-ephemeral-stream-
                            (new #-ephemeral-canon-
                             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                            )
                           )
                          )
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (fail :error:)
                        )
                       )
                       (next w-0-0)
                      )
                      (null)
                     )
                    )
                    (new $s_test
                     (seq
                      (seq
                       (fold $s s_fold_var
                        (seq
                         (seq
                          (ap s_fold_var $s_test)
                          (canon %init_peer_id% $s_test  #s_iter_canon)
                         )
                         (xor
                          (match #s_iter_canon.length 1
                           (null)
                          )
                          (next s_fold_var)
                         )
                        )
                        (never)
                       )
                       (canon %init_peer_id% $s_test  #s_result_canon)
                      )
                      (ap #s_result_canon s_gate)
                     )
                    )
                   )
                   (call %init_peer_id% ("json" "parse") [s_gate.$.[0]] ret-1)
                  )
                 )
                )
                (new $ipfs_results-0
                 (new $s-1
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $option-inline-1
                         (seq
                          (seq
                           (seq
                            (new $array-inline-1
                             (seq
                              (seq
                               (new %SpellLocation_obj-0_map
                                (seq
                                 (seq
                                  (seq
                                   (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj-0_map)
                                   (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj-0_map)
                                  )
                                  (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj-0_map)
                                 )
                                 (canon %init_peer_id% %SpellLocation_obj-0_map  SpellLocation_obj-0)
                                )
                               )
                               (ap SpellLocation_obj-0 $array-inline-1)
                              )
                              (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
                             )
                            )
                            (new %Host_obj-0_map
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj-0_map)
                                  (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj-0_map)
                                 )
                                 (ap ("installationSpells" #array-inline-1-0) %Host_obj-0_map)
                                )
                                (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-0_map)
                               )
                               (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj-0_map)
                              )
                              (canon %init_peer_id% %Host_obj-0_map  Host_obj-0)
                             )
                            )
                           )
                           (xor
                            (ap Host_obj-0 $option-inline-1)
                            (null)
                           )
                          )
                          (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                         )
                        )
                        (new %Hosts_obj-0_map
                         (seq
                          (ap ("devWorkerV0" #option-inline-1-0) %Hosts_obj-0_map)
                          (canon %init_peer_id% %Hosts_obj-0_map  Hosts_obj-0)
                         )
                        )
                       )
                       (ap Hosts_obj-0.$.devWorkerV0 Hosts_obj-0_flat)
                      )
                      (ap Hosts_obj-0_flat.$.[0].installationSpells Hosts_obj-0_flat_flat)
                     )
                     (fold Hosts_obj-0_flat_flat w-1-0
                      (seq
                       (xor
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                                (new $-ephemeral-stream-
                                 (new #-ephemeral-canon-
                                  (canon w-1-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                 )
                                )
                               )
                               (call w-1-0.$.workerId ("aqua-ipfs" "dag_get") [-tempTask-arg-.$.publication] ret-2)
                              )
                              (ap ret-2 $ipfs_results-0)
                             )
                             (new $ipfs_results-0_test
                              (seq
                               (seq
                                (fold $ipfs_results-0 ipfs_results-0_fold_var
                                 (seq
                                  (seq
                                   (ap ipfs_results-0_fold_var $ipfs_results-0_test)
                                   (canon w-1-0.$.workerId $ipfs_results-0_test  #ipfs_results-0_iter_canon)
                                  )
                                  (xor
                                   (match #ipfs_results-0_iter_canon.length 1
                                    (null)
                                   )
                                   (next ipfs_results-0_fold_var)
                                  )
                                 )
                                 (never)
                                )
                                (canon w-1-0.$.workerId $ipfs_results-0_test  #ipfs_results-0_result_canon)
                               )
                               (ap #ipfs_results-0_result_canon ipfs_results-0_gate)
                              )
                             )
                            )
                            (call w-1-0.$.workerId ("vault" "cat") [ipfs_results-0_gate.$.[0].path] ret-3)
                           )
                           (ap ret-3 $s-1)
                          )
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon w-1-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (new $-ephemeral-stream-
                          (new #-ephemeral-canon-
                           (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                          )
                         )
                        )
                        (seq
                         (seq
                          (seq
                           (new $-ephemeral-stream-
                            (new #-ephemeral-canon-
                             (canon w-1-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                            )
                           )
                           (new $-ephemeral-stream-
                            (new #-ephemeral-canon-
                             (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                            )
                           )
                          )
                          (new $-ephemeral-stream-
                           (new #-ephemeral-canon-
                            (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                           )
                          )
                         )
                         (fail :error:)
                        )
                       )
                       (next w-1-0)
                      )
                      (null)
                     )
                    )
                    (new $s-1_test
                     (seq
                      (seq
                       (fold $s-1 s-1_fold_var
                        (seq
                         (seq
                          (ap s-1_fold_var $s-1_test)
                          (canon %init_peer_id% $s-1_test  #s-1_iter_canon)
                         )
                         (xor
                          (match #s-1_iter_canon.length 1
                           (null)
                          )
                          (next s-1_fold_var)
                         )
                        )
                        (never)
                       )
                       (canon %init_peer_id% $s-1_test  #s-1_result_canon)
                      )
                      (ap #s-1_result_canon s-1_gate)
                     )
                    )
                   )
                   (call %init_peer_id% ("json" "parse") [s-1_gate.$.[0]] ret-4)
                  )
                 )
                )
               )
               (new %TuDsgPublishTask_obj_map
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (ap ("author" ret-1) %TuDsgPublishTask_obj_map)
                     (ap ("payload" -tempTask-arg-.$.payload) %TuDsgPublishTask_obj_map)
                    )
                    (ap ("post_type" -tempTask-arg-.$.post_type) %TuDsgPublishTask_obj_map)
                   )
                   (ap ("publication" ret-4) %TuDsgPublishTask_obj_map)
                  )
                  (ap ("slug" -tempTask-arg-.$.slug) %TuDsgPublishTask_obj_map)
                 )
                 (canon %init_peer_id% %TuDsgPublishTask_obj_map  TuDsgPublishTask_obj)
                )
               )
              )
              (call %init_peer_id% ("run-console" "print") [TuDsgPublishTask_obj])
             )
             (new $option-inline-2
              (seq
               (seq
                (seq
                 (new $array-inline-2
                  (seq
                   (seq
                    (new %SpellLocation_obj-1_map
                     (seq
                      (seq
                       (seq
                        (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj-1_map)
                        (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj-1_map)
                       )
                       (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj-1_map)
                      )
                      (canon %init_peer_id% %SpellLocation_obj-1_map  SpellLocation_obj-1)
                     )
                    )
                    (ap SpellLocation_obj-1 $array-inline-2)
                   )
                   (canon %init_peer_id% $array-inline-2  #array-inline-2-0)
                  )
                 )
                 (new %Host_obj-1_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj-1_map)
                       (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj-1_map)
                      )
                      (ap ("installationSpells" #array-inline-2-0) %Host_obj-1_map)
                     )
                     (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-1_map)
                    )
                    (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj-1_map)
                   )
                   (canon %init_peer_id% %Host_obj-1_map  Host_obj-1)
                  )
                 )
                )
                (xor
                 (ap Host_obj-1 $option-inline-2)
                 (null)
                )
               )
               (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
              )
             )
            )
            (new %Hosts_obj-1_map
             (seq
              (ap ("devWorkerV0" #option-inline-2-0) %Hosts_obj-1_map)
              (canon %init_peer_id% %Hosts_obj-1_map  Hosts_obj-1)
             )
            )
           )
           (ap Hosts_obj-1.$.devWorkerV0 Hosts_obj-1_flat)
          )
          (ap Hosts_obj-1_flat.$.[0].installationSpells Hosts_obj-1_flat_flat)
         )
         (call %init_peer_id% ("run-console" "print") [Hosts_obj-1_flat_flat.$.[0]])
        )
        (xor
         (seq
          (seq
           (seq
            (seq
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon Hosts_obj-1_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                             )
                             (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "dag_get") [TuDsgPublishTask_obj.$.author.content_mappings] ret-5)
                            )
                            (call Hosts_obj-1_flat_flat.$.[0].workerId ("vault" "cat") [ret-5.$.path] ret-6)
                           )
                           (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "map") [TuDsgPublishTask_obj ret-6] ret-7)
                          )
                          (new $rez
                           (seq
                            (seq
                             (seq
                              (call Hosts_obj-1_flat_flat.$.[0].workerId ("vault" "put") [ret-7.$.body] ret-8)
                              (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "dag_put") [ret-8] ret-9)
                             )
                             (new -if-else-error-
                              (new -else-error-
                               (new -if-error-
                                (xor
                                 (match ret-9.$.success true
                                  (ap ret-9.$.hash $rez)
                                 )
                                 (seq
                                  (ap :error: -if-error-)
                                  (xor
                                   (match :error:.$.error_code 10001
                                    (ap ret-9.$.error $rez)
                                   )
                                   (seq
                                    (seq
                                     (ap :error: -else-error-)
                                     (xor
                                      (match :error:.$.error_code 10001
                                       (ap -if-error- -if-else-error-)
                                      )
                                      (ap -else-error- -if-else-error-)
                                     )
                                    )
                                    (fail -if-else-error-)
                                   )
                                  )
                                 )
                                )
                               )
                              )
                             )
                            )
                            (new $rez_test
                             (seq
                              (seq
                               (fold $rez rez_fold_var
                                (seq
                                 (seq
                                  (ap rez_fold_var $rez_test)
                                  (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez_test  #rez_iter_canon)
                                 )
                                 (xor
                                  (match #rez_iter_canon.length 1
                                   (null)
                                  )
                                  (next rez_fold_var)
                                 )
                                )
                                (never)
                               )
                               (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez_test  #rez_result_canon)
                              )
                              (ap #rez_result_canon rez_gate)
                             )
                            )
                           )
                          )
                         )
                         (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "includeCid") [ret-7.$.item rez_gate.$.[0]] ret-10)
                        )
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuContentStore" "insert") [ret-10 TuDsgPublishTask_obj.$.publication.table] ret-11)
                       )
                       (ap ret-11 $results)
                      )
                      (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "pebble") [TuDsgPublishTask_obj ret-10] ret-12)
                     )
                     (ap ret-12 $queue)
                    )
                    (fold ret-12.$.[0].template.ripples ripple-0
                     (seq
                      (seq
                       (seq
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuContentStore" "queryRipple") [ripple-0 TuDsgPublishTask_obj.$.publication.table] ret-13)
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "ripple") [TuDsgPublishTask_obj ripple-0 ret-13.$.results.[0]] ret-14)
                       )
                       (ap ret-14 $queue)
                      )
                      (next ripple-0)
                     )
                     (null)
                    )
                   )
                   (new $rez-0
                    (seq
                     (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "cat") [-archive_cid-arg-] ret-15)
                     (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuCars" "extract") [ret-15.$.contents "/publication"] ret-16)
                    )
                   )
                  )
                  (ap ret-16 $debug)
                 )
                 (new $rez-1
                  (seq
                   (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "cat") [TuDsgPublishTask_obj.$.publication.templates] ret-17)
                   (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuCars" "extract") [ret-17.$.contents "/templates"] ret-18)
                  )
                 )
                )
                (ap ret-18 $debug)
               )
               (new $rez-2
                (seq
                 (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "cat") [TuDsgPublishTask_obj.$.publication.assets] ret-19)
                 (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuCars" "extract") [ret-19.$.contents "/publication/assets"] ret-20)
                )
               )
              )
              (ap ret-20 $debug)
             )
             (canon Hosts_obj-1_flat_flat.$.[0].workerId $queue  #queue_canon)
            )
            (fold #queue_canon ros-0
             (seq
              (fold ros-0 ro-0
               (seq
                (new $collections
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (new $rez-3
                       (seq
                        (seq
                         (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "dag_get") [ro-0.$.body_cid] ret-21)
                         (new -if-else-error-
                          (new -else-error-
                           (new -if-error-
                            (xor
                             (match ret-21.$.success true
                              (seq
                               (call Hosts_obj-1_flat_flat.$.[0].workerId ("vault" "cat") [ret-21.$.path] ret-22)
                               (ap ret-22 $rez-3)
                              )
                             )
                             (seq
                              (ap :error: -if-error-)
                              (xor
                               (match :error:.$.error_code 10001
                                (ap ret-21.$.error $rez-3)
                               )
                               (seq
                                (seq
                                 (ap :error: -else-error-)
                                 (xor
                                  (match :error:.$.error_code 10001
                                   (ap -if-error- -if-else-error-)
                                  )
                                  (ap -else-error- -if-else-error-)
                                 )
                                )
                                (fail -if-else-error-)
                               )
                              )
                             )
                            )
                           )
                          )
                         )
                        )
                        (new $rez-3_test
                         (seq
                          (seq
                           (fold $rez-3 rez-3_fold_var
                            (seq
                             (seq
                              (ap rez-3_fold_var $rez-3_test)
                              (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez-3_test  #rez-3_iter_canon)
                             )
                             (xor
                              (match #rez-3_iter_canon.length 1
                               (null)
                              )
                              (next rez-3_fold_var)
                             )
                            )
                            (never)
                           )
                           (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez-3_test  #rez-3_result_canon)
                          )
                          (ap #rez-3_result_canon rez-3_gate)
                         )
                        )
                       )
                      )
                      (fold ro-0.$.template.collections c-0
                       (seq
                        (new -if-error-
                         (xor
                          (match c-0.$.source "tableland"
                           (new $collection
                            (seq
                             (seq
                              (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuContentStore" "queryCollection") [c-0 TuDsgPublishTask_obj.$.publication.table] ret-23)
                              (ap ret-23 $debug)
                             )
                             (fold ret-23.$.results res-0
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (new $rez-4
                                   (seq
                                    (seq
                                     (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "dag_get") [res-0] ret-24)
                                     (new -if-else-error-
                                      (new -else-error-
                                       (new -if-error-
                                        (xor
                                         (match ret-24.$.success true
                                          (seq
                                           (call Hosts_obj-1_flat_flat.$.[0].workerId ("vault" "cat") [ret-24.$.path] ret-25)
                                           (ap ret-25 $rez-4)
                                          )
                                         )
                                         (seq
                                          (ap :error: -if-error-)
                                          (xor
                                           (match :error:.$.error_code 10001
                                            (ap ret-24.$.error $rez-4)
                                           )
                                           (seq
                                            (seq
                                             (ap :error: -else-error-)
                                             (xor
                                              (match :error:.$.error_code 10001
                                               (ap -if-error- -if-else-error-)
                                              )
                                              (ap -else-error- -if-else-error-)
                                             )
                                            )
                                            (fail -if-else-error-)
                                           )
                                          )
                                         )
                                        )
                                       )
                                      )
                                     )
                                    )
                                    (new $rez-4_test
                                     (seq
                                      (seq
                                       (fold $rez-4 rez-4_fold_var
                                        (seq
                                         (seq
                                          (ap rez-4_fold_var $rez-4_test)
                                          (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez-4_test  #rez-4_iter_canon)
                                         )
                                         (xor
                                          (match #rez-4_iter_canon.length 1
                                           (null)
                                          )
                                          (next rez-4_fold_var)
                                         )
                                        )
                                        (never)
                                       )
                                       (canon Hosts_obj-1_flat_flat.$.[0].workerId $rez-4_test  #rez-4_result_canon)
                                      )
                                      (ap #rez-4_result_canon rez-4_gate)
                                     )
                                    )
                                   )
                                  )
                                  (ap rez-4_gate.$.[0] $collection)
                                 )
                                 (canon Hosts_obj-1_flat_flat.$.[0].workerId $collection  #push-to-stream-326)
                                )
                                (ap #push-to-stream-326 $collections)
                               )
                               (next res-0)
                              )
                              (null)
                             )
                            )
                           )
                          )
                          (seq
                           (ap :error: -if-error-)
                           (xor
                            (match :error:.$.error_code 10001
                             (null)
                            )
                            (fail -if-error-)
                           )
                          )
                         )
                        )
                        (next c-0)
                       )
                       (null)
                      )
                     )
                     (canon Hosts_obj-1_flat_flat.$.[0].workerId $collections  #collections_canon)
                    )
                    (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgTemplateData" "map") [ro-0 rez-3_gate.$.[0] #collections_canon TuDsgPublishTask_obj.$.publication] ret-26)
                   )
                   (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgRenderer" "single") [ro-0 ret-26.$.output.[0]] ret-27)
                  )
                  (ap ret-27 $results)
                 )
                )
                (next ro-0)
               )
               (null)
              )
              (next ros-0)
             )
             (null)
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon Hosts_obj-1_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (seq
          (seq
           (seq
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon Hosts_obj-1_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (new $-ephemeral-stream-
            (new #-ephemeral-canon-
             (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (fail :error:)
         )
        )
       )
      )
     )
    )
   )
   (canon %init_peer_id% $results  #results_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#results_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RenderOnDSGArgTempTask = { author: string; payload: string; post_type: string; slug: string; publication: string; }

export type RenderOnDSGParams = [tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}];

export type RenderOnDSGResult = Promise<{ errors: string[]; output: number[][]; results: string[]; }[]>;

export function renderOnDSG(...args: RenderOnDSGParams): RenderOnDSGResult {
    return callFunction$$(
        args,
        {
    "functionName": "renderOnDSG",
    "arrow": {
        "domain": {
            "fields": {
                "tempTask": {
                    "name": "TuDsgPublishTaskTemp",
                    "fields": {
                        "author": {
                            "name": "string",
                            "tag": "scalar"
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
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                },
                "archive_cid": {
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
                        "name": "AquaMarineResult",
                        "fields": {
                            "errors": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "output": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
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
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        renderOnDSG_script
    );
}

export const bulkRender_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
        (call %init_peer_id% ("getDataSrv" "publication_cid") [] -publication_cid-arg-)
       )
       (call %init_peer_id% ("getDataSrv" "post_type") [] -post_type-arg-)
      )
      (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
     )
     (new $ipfs_results
      (new $s
       (seq
        (seq
         (seq
          (seq
           (seq
            (seq
             (new $option-inline
              (seq
               (seq
                (seq
                 (new $array-inline
                  (seq
                   (seq
                    (new %SpellLocation_obj_map
                     (seq
                      (seq
                       (seq
                        (ap ("hostId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %SpellLocation_obj_map)
                        (ap ("spellId" "c03ae619-0a1b-42ff-8456-535260b0f0d8") %SpellLocation_obj_map)
                       )
                       (ap ("workerId" "12D3KooWFzPWuEUaJiECELrKtxqXUNtQx982uSCqRdVGr3Pfkerz") %SpellLocation_obj_map)
                      )
                      (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                     )
                    )
                    (ap SpellLocation_obj $array-inline)
                   )
                   (canon %init_peer_id% $array-inline  #array-inline-0)
                  )
                 )
                 (new %Host_obj_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("definition" "bafkreicpercsz5cstg2fg7raoikoyfgmq4wbpljtoreiamvg4jmdigrkpi") %Host_obj_map)
                       (ap ("dummyDealId" "devWorkerV0_12D3KooWMLZgCmxYXXhWzqgYUf9TzT8QaPCKfHieywC86Q2LdiSA_14402867373201356") %Host_obj_map)
                      )
                      (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                     )
                     (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                    )
                    (ap ("timestamp" "2024-03-02T20:06:32.544Z") %Host_obj_map)
                   )
                   (canon %init_peer_id% %Host_obj_map  Host_obj)
                  )
                 )
                )
                (xor
                 (ap Host_obj $option-inline)
                 (null)
                )
               )
               (canon %init_peer_id% $option-inline  #option-inline-0)
              )
             )
             (new %Hosts_obj_map
              (seq
               (ap ("devWorkerV0" #option-inline-0) %Hosts_obj_map)
               (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
              )
             )
            )
            (ap Hosts_obj.$.devWorkerV0 Hosts_obj_flat)
           )
           (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
          )
          (fold Hosts_obj_flat_flat w-0
           (seq
            (xor
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                     (new $-ephemeral-stream-
                      (new #-ephemeral-canon-
                       (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                      )
                     )
                    )
                    (call w-0.$.workerId ("aqua-ipfs" "dag_get") [-publication_cid-arg-] ret)
                   )
                   (ap ret $ipfs_results)
                  )
                  (new $ipfs_results_test
                   (seq
                    (seq
                     (fold $ipfs_results ipfs_results_fold_var
                      (seq
                       (seq
                        (ap ipfs_results_fold_var $ipfs_results_test)
                        (canon w-0.$.workerId $ipfs_results_test  #ipfs_results_iter_canon)
                       )
                       (xor
                        (match #ipfs_results_iter_canon.length 1
                         (null)
                        )
                        (next ipfs_results_fold_var)
                       )
                      )
                      (never)
                     )
                     (canon w-0.$.workerId $ipfs_results_test  #ipfs_results_result_canon)
                    )
                    (ap #ipfs_results_result_canon ipfs_results_gate)
                   )
                  )
                 )
                 (call w-0.$.workerId ("vault" "cat") [ipfs_results_gate.$.[0].path] ret-0)
                )
                (ap ret-0 $s)
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (new $-ephemeral-stream-
               (new #-ephemeral-canon-
                (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
               )
              )
             )
             (seq
              (seq
               (seq
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
                (new $-ephemeral-stream-
                 (new #-ephemeral-canon-
                  (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
                 )
                )
               )
               (new $-ephemeral-stream-
                (new #-ephemeral-canon-
                 (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
                )
               )
              )
              (fail :error:)
             )
            )
            (next w-0)
           )
           (null)
          )
         )
         (new $s_test
          (seq
           (seq
            (fold $s s_fold_var
             (seq
              (seq
               (ap s_fold_var $s_test)
               (canon %init_peer_id% $s_test  #s_iter_canon)
              )
              (xor
               (match #s_iter_canon.length 1
                (null)
               )
               (next s_fold_var)
              )
             )
             (never)
            )
            (canon %init_peer_id% $s_test  #s_result_canon)
           )
           (ap #s_result_canon s_gate)
          )
         )
        )
        (call %init_peer_id% ("json" "parse") [s_gate.$.[0]] ret-1)
       )
      )
     )
    )
    (call %init_peer_id% ("run-console" "print") [ret-1])
   )
   (canon %init_peer_id% $results  #results_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#results_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type BulkRenderParams = [publication_cid: string, post_type: string, archive_cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, publication_cid: string, post_type: string, archive_cid: string, config?: {ttl?: number}];

export type BulkRenderResult = Promise<{ errors: string[]; output: number[][]; results: string[]; }[]>;

export function bulkRender(...args: BulkRenderParams): BulkRenderResult {
    return callFunction$$(
        args,
        {
    "functionName": "bulkRender",
    "arrow": {
        "domain": {
            "fields": {
                "publication_cid": {
                    "name": "string",
                    "tag": "scalar"
                },
                "post_type": {
                    "name": "string",
                    "tag": "scalar"
                },
                "archive_cid": {
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
                        "name": "AquaMarineResult",
                        "fields": {
                            "errors": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "output": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
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
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        bulkRender_script
    );
}
