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
export const bulkUpload_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (call %init_peer_id% ("getDataSrv" "tasks") [] -tasks-arg-)
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

export const renderOnDSG_script = `
(xor
 (new $s-1
  (new $results
   (new $debug
    (new $job_archive_hashes
     (new $cids
      (new $queue
       (new $s
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
                                              (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                                              (call %init_peer_id% ("getDataSrv" "tempTask") [] -tempTask-arg-)
                                             )
                                             (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
                                            )
                                            (call %init_peer_id% ("run-console" "print") ["Starting"])
                                           )
                                           (par
                                            (new $option-inline
                                             (seq
                                              (seq
                                               (new %ContentWorkerV1_obj_map
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj_map)
                                                      (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj_map)
                                                     )
                                                     (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj_map)
                                                    )
                                                    (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj_map)
                                                   )
                                                   (ap ("matched" true) %ContentWorkerV1_obj_map)
                                                  )
                                                  (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj_map)
                                                 )
                                                 (canon %init_peer_id% %ContentWorkerV1_obj_map  ContentWorkerV1_obj)
                                                )
                                               )
                                               (xor
                                                (ap ContentWorkerV1_obj $option-inline)
                                                (null)
                                               )
                                              )
                                              (canon %init_peer_id% $option-inline  #option-inline-0)
                                             )
                                            )
                                            (new $option-inline-1
                                             (seq
                                              (seq
                                               (new %RenderWorkerV0_obj_map
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj_map)
                                                     (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj_map)
                                                    )
                                                    (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj_map)
                                                   )
                                                   (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj_map)
                                                  )
                                                  (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj_map)
                                                 )
                                                 (canon %init_peer_id% %RenderWorkerV0_obj_map  RenderWorkerV0_obj)
                                                )
                                               )
                                               (xor
                                                (ap RenderWorkerV0_obj $option-inline-1)
                                                (null)
                                               )
                                              )
                                              (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                                             )
                                            )
                                           )
                                          )
                                          (new %Deals_obj_map
                                           (seq
                                            (seq
                                             (ap ("contentWorkerV1" #option-inline-0) %Deals_obj_map)
                                             (ap ("renderWorkerV0" #option-inline-1-0) %Deals_obj_map)
                                            )
                                            (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                                           )
                                          )
                                         )
                                         (ap Deals_obj.$.contentWorkerV1 Deals_obj_flat)
                                        )
                                        (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                                       )
                                       (xor
                                        (seq
                                         (seq
                                          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                                          (new -if-error-
                                           (xor
                                            (seq
                                             (match ret.$.success false
                                              (seq
                                               (new $array-inline
                                                (seq
                                                 (seq
                                                  (ap "Failed to resolve subnet: " $array-inline)
                                                  (ap ret.$.error $array-inline)
                                                 )
                                                 (canon -relay- $array-inline  #array-inline-0)
                                                )
                                               )
                                               (call -relay- ("run-console" "print") [#array-inline-0])
                                              )
                                             )
                                             (new $-hop-
                                              (new #-hopc-
                                               (canon -relay- $-hop-  #-hopc-)
                                              )
                                             )
                                            )
                                            (seq
                                             (seq
                                              (ap :error: -if-error-)
                                              (xor
                                               (seq
                                                (match :error:.$.error_code 10001
                                                 (null)
                                                )
                                                (new $-hop-
                                                 (new #-hopc-
                                                  (canon -relay- $-hop-  #-hopc-)
                                                 )
                                                )
                                               )
                                               (fail -if-error-)
                                              )
                                             )
                                             (new $-hop-
                                              (new #-hopc-
                                               (canon -relay- $-hop-  #-hopc-)
                                              )
                                             )
                                            )
                                           )
                                          )
                                         )
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon -relay- $-hop-  #-hopc-)
                                          )
                                         )
                                        )
                                        (fail :error:)
                                       )
                                      )
                                      (ap ret.$.workers ret_flat)
                                     )
                                     (xor
                                      (seq
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (new $-hop-
                                            (new #-hopc-
                                             (canon -relay- $-hop-  #-hopc-)
                                            )
                                           )
                                           (new $-hop-
                                            (new #-hopc-
                                             (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                            )
                                           )
                                          )
                                          (call ret_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" -tempTask-arg-.$.author] ret-0)
                                         )
                                         (ap ret-0 $s)
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon -relay- $-hop-  #-hopc-)
                                        )
                                       )
                                      )
                                      (seq
                                       (seq
                                        (seq
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                          )
                                         )
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon -relay- $-hop-  #-hopc-)
                                          )
                                         )
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon %init_peer_id% $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (fail :error:)
                                      )
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
                                  (par
                                   (new $option-inline-2
                                    (seq
                                     (seq
                                      (new %ContentWorkerV1_obj-0_map
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (seq
                                             (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-0_map)
                                             (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-0_map)
                                            )
                                            (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-0_map)
                                           )
                                           (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj-0_map)
                                          )
                                          (ap ("matched" true) %ContentWorkerV1_obj-0_map)
                                         )
                                         (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj-0_map)
                                        )
                                        (canon %init_peer_id% %ContentWorkerV1_obj-0_map  ContentWorkerV1_obj-0)
                                       )
                                      )
                                      (xor
                                       (ap ContentWorkerV1_obj-0 $option-inline-2)
                                       (null)
                                      )
                                     )
                                     (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                                    )
                                   )
                                   (new $option-inline-3
                                    (seq
                                     (seq
                                      (new %RenderWorkerV0_obj-0_map
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-0_map)
                                            (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-0_map)
                                           )
                                           (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-0_map)
                                          )
                                          (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj-0_map)
                                         )
                                         (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj-0_map)
                                        )
                                        (canon %init_peer_id% %RenderWorkerV0_obj-0_map  RenderWorkerV0_obj-0)
                                       )
                                      )
                                      (xor
                                       (ap RenderWorkerV0_obj-0 $option-inline-3)
                                       (null)
                                      )
                                     )
                                     (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
                                    )
                                   )
                                  )
                                 )
                                 (new %Deals_obj-0_map
                                  (seq
                                   (seq
                                    (ap ("contentWorkerV1" #option-inline-2-0) %Deals_obj-0_map)
                                    (ap ("renderWorkerV0" #option-inline-3-0) %Deals_obj-0_map)
                                   )
                                   (canon %init_peer_id% %Deals_obj-0_map  Deals_obj-0)
                                  )
                                 )
                                )
                                (ap Deals_obj-0.$.contentWorkerV1 Deals_obj-0_flat)
                               )
                               (ap Deals_obj-0_flat.$.[0].dealIdOriginal Deals_obj-0_flat_flat)
                              )
                              (xor
                               (seq
                                (seq
                                 (call -relay- ("subnet" "resolve") [Deals_obj-0_flat_flat] ret-2)
                                 (new -if-error-
                                  (xor
                                   (seq
                                    (match ret-2.$.success false
                                     (seq
                                      (new $array-inline-1
                                       (seq
                                        (seq
                                         (ap "Failed to resolve subnet: " $array-inline-1)
                                         (ap ret-2.$.error $array-inline-1)
                                        )
                                        (canon -relay- $array-inline-1  #array-inline-1-0)
                                       )
                                      )
                                      (call -relay- ("run-console" "print") [#array-inline-1-0])
                                     )
                                    )
                                    (new $-hop-
                                     (new #-hopc-
                                      (canon -relay- $-hop-  #-hopc-)
                                     )
                                    )
                                   )
                                   (seq
                                    (seq
                                     (ap :error: -if-error-)
                                     (xor
                                      (seq
                                       (match :error:.$.error_code 10001
                                        (null)
                                       )
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon -relay- $-hop-  #-hopc-)
                                        )
                                       )
                                      )
                                      (fail -if-error-)
                                     )
                                    )
                                    (new $-hop-
                                     (new #-hopc-
                                      (canon -relay- $-hop-  #-hopc-)
                                     )
                                    )
                                   )
                                  )
                                 )
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon -relay- $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (fail :error:)
                              )
                             )
                             (ap ret-2.$.workers ret-2_flat)
                            )
                            (xor
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (new $-hop-
                                   (new #-hopc-
                                    (canon -relay- $-hop-  #-hopc-)
                                   )
                                  )
                                  (new $-hop-
                                   (new #-hopc-
                                    (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                   )
                                  )
                                 )
                                 (call ret-2_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" -tempTask-arg-.$.publication] ret-3)
                                )
                                (ap ret-3 $s-1)
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                )
                               )
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon -relay- $-hop-  #-hopc-)
                               )
                              )
                             )
                             (seq
                              (seq
                               (seq
                                (new $-hop-
                                 (new #-hopc-
                                  (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                 )
                                )
                                (new $-hop-
                                 (new #-hopc-
                                  (canon -relay- $-hop-  #-hopc-)
                                 )
                                )
                               )
                               (new $-hop-
                                (new #-hopc-
                                 (canon %init_peer_id% $-hop-  #-hopc-)
                                )
                               )
                              )
                              (fail :error:)
                             )
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
                       (par
                        (new $option-inline-4
                         (seq
                          (seq
                           (new %ContentWorkerV1_obj-1_map
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-1_map)
                                  (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-1_map)
                                 )
                                 (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-1_map)
                                )
                                (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj-1_map)
                               )
                               (ap ("matched" true) %ContentWorkerV1_obj-1_map)
                              )
                              (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj-1_map)
                             )
                             (canon %init_peer_id% %ContentWorkerV1_obj-1_map  ContentWorkerV1_obj-1)
                            )
                           )
                           (xor
                            (ap ContentWorkerV1_obj-1 $option-inline-4)
                            (null)
                           )
                          )
                          (canon %init_peer_id% $option-inline-4  #option-inline-4-0)
                         )
                        )
                        (new $option-inline-5
                         (seq
                          (seq
                           (new %RenderWorkerV0_obj-1_map
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-1_map)
                                 (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-1_map)
                                )
                                (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-1_map)
                               )
                               (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj-1_map)
                              )
                              (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj-1_map)
                             )
                             (canon %init_peer_id% %RenderWorkerV0_obj-1_map  RenderWorkerV0_obj-1)
                            )
                           )
                           (xor
                            (ap RenderWorkerV0_obj-1 $option-inline-5)
                            (null)
                           )
                          )
                          (canon %init_peer_id% $option-inline-5  #option-inline-5-0)
                         )
                        )
                       )
                      )
                      (new %Deals_obj-1_map
                       (seq
                        (seq
                         (ap ("contentWorkerV1" #option-inline-4-0) %Deals_obj-1_map)
                         (ap ("renderWorkerV0" #option-inline-5-0) %Deals_obj-1_map)
                        )
                        (canon %init_peer_id% %Deals_obj-1_map  Deals_obj-1)
                       )
                      )
                     )
                     (ap Deals_obj-1.$.contentWorkerV1 Deals_obj-1_flat)
                    )
                    (ap Deals_obj-1_flat.$.[0].dealIdOriginal Deals_obj-1_flat_flat)
                   )
                   (xor
                    (seq
                     (seq
                      (call -relay- ("subnet" "resolve") [Deals_obj-1_flat_flat] ret-5)
                      (new -if-error-
                       (xor
                        (seq
                         (match ret-5.$.success false
                          (seq
                           (new $array-inline-2
                            (seq
                             (seq
                              (ap "Failed to resolve subnet: " $array-inline-2)
                              (ap ret-5.$.error $array-inline-2)
                             )
                             (canon -relay- $array-inline-2  #array-inline-2-0)
                            )
                           )
                           (call -relay- ("run-console" "print") [#array-inline-2-0])
                          )
                         )
                         (new $-hop-
                          (new #-hopc-
                           (canon -relay- $-hop-  #-hopc-)
                          )
                         )
                        )
                        (seq
                         (seq
                          (ap :error: -if-error-)
                          (xor
                           (seq
                            (match :error:.$.error_code 10001
                             (null)
                            )
                            (new $-hop-
                             (new #-hopc-
                              (canon -relay- $-hop-  #-hopc-)
                             )
                            )
                           )
                           (fail -if-error-)
                          )
                         )
                         (new $-hop-
                          (new #-hopc-
                           (canon -relay- $-hop-  #-hopc-)
                          )
                         )
                        )
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (fail :error:)
                   )
                  )
                  (ap ret-5.$.workers ret-5_flat)
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
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon -relay- $-hop-  #-hopc-)
                                    )
                                   )
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                    )
                                   )
                                  )
                                  (call ret-5_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.author.content_mappings] ret-6)
                                 )
                                 (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "map") [TuDsgPublishTask_obj ret-6] ret-7)
                                )
                                (call ret-5_flat.$.[0].worker_id.[0] ("cioPinata" "addAsFile") [ret-7.$.body ret-7.$.item.slug "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow"] ret-8)
                               )
                               (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "includeCid") [ret-7.$.item ret-8.$.result] ret-9)
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                               )
                              )
                             )
                             (new $-hop-
                              (new #-hopc-
                               (canon -relay- $-hop-  #-hopc-)
                              )
                             )
                            )
                            (call %init_peer_id% ("run-console" "print") [ret-9])
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon -relay- $-hop-  #-hopc-)
                            )
                           )
                          )
                          (new $-hop-
                           (new #-hopc-
                            (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                           )
                          )
                         )
                         (call ret-5_flat.$.[0].worker_id.[0] ("tuContentStore" "insert") [ret-9 TuDsgPublishTask_obj.$.publication.table "https://tableland.transport-union.dev"] ret-10)
                        )
                        (ap ret-10 $results)
                       )
                       (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "pebble") [TuDsgPublishTask_obj ret-9] ret-11)
                      )
                      (ap ret-11 $queue)
                     )
                     (fold ret-11.$.[0].template.ripples ripple-0
                      (seq
                       (seq
                        (call ret-5_flat.$.[0].worker_id.[0] ("tuContentStore" "queryRipple") [ripple-0 TuDsgPublishTask_obj.$.publication.table "https://tableland.transport-union.dev"] ret-12)
                        (fold ret-12 item-0
                         (seq
                          (seq
                           (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "ripple") [TuDsgPublishTask_obj ripple-0 item-0] ret-13)
                           (ap ret-13 $queue)
                          )
                          (next item-0)
                         )
                         (null)
                        )
                       )
                       (next ripple-0)
                      )
                      (null)
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                     )
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (seq
                   (seq
                    (seq
                     (new $-hop-
                      (new #-hopc-
                       (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (new $-hop-
                     (new #-hopc-
                      (canon %init_peer_id% $-hop-  #-hopc-)
                     )
                    )
                   )
                   (fail :error:)
                  )
                 )
                )
                (canon %init_peer_id% $queue  #queue_canon)
               )
               (call %init_peer_id% ("run-console" "print") [#queue_canon])
              )
              (par
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (par
                       (new $option-inline-6
                        (seq
                         (seq
                          (new %ContentWorkerV1_obj-2_map
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-2_map)
                                 (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-2_map)
                                )
                                (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-2_map)
                               )
                               (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj-2_map)
                              )
                              (ap ("matched" true) %ContentWorkerV1_obj-2_map)
                             )
                             (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj-2_map)
                            )
                            (canon %init_peer_id% %ContentWorkerV1_obj-2_map  ContentWorkerV1_obj-2)
                           )
                          )
                          (xor
                           (ap ContentWorkerV1_obj-2 $option-inline-6)
                           (null)
                          )
                         )
                         (canon %init_peer_id% $option-inline-6  #option-inline-6-0)
                        )
                       )
                       (new $option-inline-7
                        (seq
                         (seq
                          (new %RenderWorkerV0_obj-2_map
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-2_map)
                                (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-2_map)
                               )
                               (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-2_map)
                              )
                              (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj-2_map)
                             )
                             (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj-2_map)
                            )
                            (canon %init_peer_id% %RenderWorkerV0_obj-2_map  RenderWorkerV0_obj-2)
                           )
                          )
                          (xor
                           (ap RenderWorkerV0_obj-2 $option-inline-7)
                           (null)
                          )
                         )
                         (canon %init_peer_id% $option-inline-7  #option-inline-7-0)
                        )
                       )
                      )
                      (new %Deals_obj-2_map
                       (seq
                        (seq
                         (ap ("contentWorkerV1" #option-inline-6-0) %Deals_obj-2_map)
                         (ap ("renderWorkerV0" #option-inline-7-0) %Deals_obj-2_map)
                        )
                        (canon %init_peer_id% %Deals_obj-2_map  Deals_obj-2)
                       )
                      )
                     )
                     (ap Deals_obj-2.$.renderWorkerV0 Deals_obj-2_flat)
                    )
                    (ap Deals_obj-2_flat.$.[0].dealIdOriginal Deals_obj-2_flat_flat)
                   )
                   (xor
                    (call -relay- ("subnet" "resolve") [Deals_obj-2_flat_flat] ret-14)
                    (fail :error:)
                   )
                  )
                  (new -if-error-
                   (xor
                    (seq
                     (match ret-14.$.success false
                      (seq
                       (new $array-inline-3
                        (seq
                         (seq
                          (ap "Failed to resolve subnet: " $array-inline-3)
                          (ap ret-14.$.error $array-inline-3)
                         )
                         (canon %init_peer_id% $array-inline-3  #array-inline-3-0)
                        )
                       )
                       (call %init_peer_id% ("run-console" "print") [#array-inline-3-0])
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (seq
                     (seq
                      (ap :error: -if-error-)
                      (xor
                       (seq
                        (match :error:.$.error_code 10001
                         (null)
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                       )
                       (fail -if-error-)
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                   )
                  )
                 )
                 (ap ret-14.$.workers ret-14_flat)
                )
                (fold ret-14_flat rw-0
                 (par
                  (xor
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon rw-0.$.host_id $-hop-  #-hopc-)
                         )
                        )
                       )
                       (call rw-0.$.worker_id.[0] ("cioKubo" "getRecursive") ["/dns4/ipfs/tcp/5001" -archive_cid-arg- TuDsgPublishTask_obj.$.publication.name] ret-15)
                      )
                      (call rw-0.$.worker_id.[0] ("cioKubo" "getRecursive") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.publication.templates "templates"] ret-16)
                     )
                     (call rw-0.$.worker_id.[0] ("cioVault" "inspect") ["."] ret-17)
                    )
                    (fold ret-17 f-0
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (new $-hop-
                           (new #-hopc-
                            (canon rw-0.$.host_id $-hop-  #-hopc-)
                           )
                          )
                          (new $-hop-
                           (new #-hopc-
                            (canon -relay- $-hop-  #-hopc-)
                           )
                          )
                         )
                         (call %init_peer_id% ("run-console" "print") [f-0])
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon rw-0.$.host_id $-hop-  #-hopc-)
                        )
                       )
                      )
                      (next f-0)
                     )
                     (null)
                    )
                   )
                   (seq
                    (seq
                     (seq
                      (new $-hop-
                       (new #-hopc-
                        (canon rw-0.$.host_id $-hop-  #-hopc-)
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon -relay- $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon %init_peer_id% $-hop-  #-hopc-)
                      )
                     )
                    )
                    (fail :error:)
                   )
                  )
                  (next rw-0)
                 )
                 (never)
                )
               )
               (null)
              )
             )
             (canon %init_peer_id% $queue  #queue_canon-0)
            )
            (fold #queue_canon-0 ros-0
             (seq
              (par
               (fold ros-0 ro-0
                (new $ro_archive_hashes
                 (par
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
                                      (par
                                       (new $option-inline-8
                                        (seq
                                         (seq
                                          (new %ContentWorkerV1_obj-3_map
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-3_map)
                                                 (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-3_map)
                                                )
                                                (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-3_map)
                                               )
                                               (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj-3_map)
                                              )
                                              (ap ("matched" true) %ContentWorkerV1_obj-3_map)
                                             )
                                             (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj-3_map)
                                            )
                                            (canon %init_peer_id% %ContentWorkerV1_obj-3_map  ContentWorkerV1_obj-3)
                                           )
                                          )
                                          (xor
                                           (ap ContentWorkerV1_obj-3 $option-inline-8)
                                           (null)
                                          )
                                         )
                                         (canon %init_peer_id% $option-inline-8  #option-inline-8-0)
                                        )
                                       )
                                       (new $option-inline-9
                                        (seq
                                         (seq
                                          (new %RenderWorkerV0_obj-3_map
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-3_map)
                                                (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-3_map)
                                               )
                                               (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-3_map)
                                              )
                                              (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj-3_map)
                                             )
                                             (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj-3_map)
                                            )
                                            (canon %init_peer_id% %RenderWorkerV0_obj-3_map  RenderWorkerV0_obj-3)
                                           )
                                          )
                                          (xor
                                           (ap RenderWorkerV0_obj-3 $option-inline-9)
                                           (null)
                                          )
                                         )
                                         (canon %init_peer_id% $option-inline-9  #option-inline-9-0)
                                        )
                                       )
                                      )
                                      (new %Deals_obj-3_map
                                       (seq
                                        (seq
                                         (ap ("contentWorkerV1" #option-inline-8-0) %Deals_obj-3_map)
                                         (ap ("renderWorkerV0" #option-inline-9-0) %Deals_obj-3_map)
                                        )
                                        (canon %init_peer_id% %Deals_obj-3_map  Deals_obj-3)
                                       )
                                      )
                                     )
                                     (ap Deals_obj-3.$.renderWorkerV0 Deals_obj-3_flat)
                                    )
                                    (ap Deals_obj-3_flat.$.[0].dealIdOriginal Deals_obj-3_flat_flat)
                                   )
                                   (xor
                                    (call -relay- ("subnet" "resolve") [Deals_obj-3_flat_flat] ret-18)
                                    (fail :error:)
                                   )
                                  )
                                  (new -if-error-
                                   (xor
                                    (seq
                                     (match ret-18.$.success false
                                      (seq
                                       (new $array-inline-4
                                        (seq
                                         (seq
                                          (ap "Failed to resolve subnet: " $array-inline-4)
                                          (ap ret-18.$.error $array-inline-4)
                                         )
                                         (canon %init_peer_id% $array-inline-4  #array-inline-4-0)
                                        )
                                       )
                                       (call %init_peer_id% ("run-console" "print") [#array-inline-4-0])
                                      )
                                     )
                                     (new $-hop-
                                      (new #-hopc-
                                       (canon -relay- $-hop-  #-hopc-)
                                      )
                                     )
                                    )
                                    (seq
                                     (seq
                                      (ap :error: -if-error-)
                                      (xor
                                       (seq
                                        (match :error:.$.error_code 10001
                                         (null)
                                        )
                                        (new $-hop-
                                         (new #-hopc-
                                          (canon -relay- $-hop-  #-hopc-)
                                         )
                                        )
                                       )
                                       (fail -if-error-)
                                      )
                                     )
                                     (new $-hop-
                                      (new #-hopc-
                                       (canon -relay- $-hop-  #-hopc-)
                                      )
                                     )
                                    )
                                   )
                                  )
                                 )
                                 (ap ret-18.$.workers ret-18_flat)
                                )
                                (fold ret-18_flat rw-1
                                 (new $collections
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
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon -relay- $-hop-  #-hopc-)
                                                     )
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (call rw-1.$.worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" ro-0.$.body_cid] ret-19)
                                                  )
                                                  (fold ro-0.$.template.collections c-0
                                                   (seq
                                                    (new -if-error-
                                                     (xor
                                                      (match c-0.$.source "tableland"
                                                       (seq
                                                        (call rw-1.$.worker_id.[0] ("tuContentStore" "queryCollection") [c-0 TuDsgPublishTask_obj.$.publication.table] ret-20)
                                                        (ap ret-20 $collections)
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
                                                 (canon rw-1.$.worker_id.[0] $collections  #collections_canon)
                                                )
                                                (call rw-1.$.worker_id.[0] ("tuDsgRenderer" "map") [ro-0 ret-19 #collections_canon TuDsgPublishTask_obj.$.publication] ret-21)
                                               )
                                               (call rw-1.$.worker_id.[0] ("tuDsgRenderer" "single") [ro-0 ret-21.$.output.[0]] ret-22)
                                              )
                                              (ap ret-22 $results)
                                             )
                                             (new $-hop-
                                              (new #-hopc-
                                               (canon rw-1.$.host_id $-hop-  #-hopc-)
                                              )
                                             )
                                            )
                                            (new $-hop-
                                             (new #-hopc-
                                              (canon -relay- $-hop-  #-hopc-)
                                             )
                                            )
                                           )
                                           (call %init_peer_id% ("run-console" "print") ["2"])
                                          )
                                          (new $-hop-
                                           (new #-hopc-
                                            (canon -relay- $-hop-  #-hopc-)
                                           )
                                          )
                                         )
                                         (new $-hop-
                                          (new #-hopc-
                                           (canon rw-1.$.host_id $-hop-  #-hopc-)
                                          )
                                         )
                                        )
                                        (call rw-1.$.worker_id.[0] ("cioKubo" "hash") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.publication.name] ret-23)
                                       )
                                       (ap ret-23 $ro_archive_hashes)
                                      )
                                      (new $-hop-
                                       (new #-hopc-
                                        (canon rw-1.$.host_id $-hop-  #-hopc-)
                                       )
                                      )
                                     )
                                     (new $-hop-
                                      (new #-hopc-
                                       (canon -relay- $-hop-  #-hopc-)
                                      )
                                     )
                                    )
                                    (seq
                                     (seq
                                      (seq
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon rw-1.$.host_id $-hop-  #-hopc-)
                                        )
                                       )
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon -relay- $-hop-  #-hopc-)
                                        )
                                       )
                                      )
                                      (new $-hop-
                                       (new #-hopc-
                                        (canon %init_peer_id% $-hop-  #-hopc-)
                                       )
                                      )
                                     )
                                     (fail :error:)
                                    )
                                   )
                                   (next rw-1)
                                  )
                                 )
                                 (null)
                                )
                               )
                               (new $ro_archive_hashes_test
                                (seq
                                 (seq
                                  (fold $ro_archive_hashes ro_archive_hashes_fold_var
                                   (seq
                                    (seq
                                     (ap ro_archive_hashes_fold_var $ro_archive_hashes_test)
                                     (canon %init_peer_id% $ro_archive_hashes_test  #ro_archive_hashes_iter_canon)
                                    )
                                    (xor
                                     (match #ro_archive_hashes_iter_canon.length 1
                                      (null)
                                     )
                                     (next ro_archive_hashes_fold_var)
                                    )
                                   )
                                   (never)
                                  )
                                  (canon %init_peer_id% $ro_archive_hashes_test  #ro_archive_hashes_result_canon)
                                 )
                                 (ap #ro_archive_hashes_result_canon ro_archive_hashes_gate)
                                )
                               )
                              )
                              (new $ro_archive_hashes_test-0
                               (seq
                                (seq
                                 (fold $ro_archive_hashes ro_archive_hashes_fold_var-0
                                  (seq
                                   (seq
                                    (ap ro_archive_hashes_fold_var-0 $ro_archive_hashes_test-0)
                                    (canon %init_peer_id% $ro_archive_hashes_test-0  #ro_archive_hashes_iter_canon-0)
                                   )
                                   (xor
                                    (match #ro_archive_hashes_iter_canon-0.length 1
                                     (null)
                                    )
                                    (next ro_archive_hashes_fold_var-0)
                                   )
                                  )
                                  (never)
                                 )
                                 (canon %init_peer_id% $ro_archive_hashes_test-0  #ro_archive_hashes_result_canon-0)
                                )
                                (ap #ro_archive_hashes_result_canon-0 ro_archive_hashes_gate-0)
                               )
                              )
                             )
                             (ap ro_archive_hashes_gate-0.$.[0] $job_archive_hashes)
                            )
                            (new $ro_archive_hashes_test-1
                             (seq
                              (seq
                               (fold $ro_archive_hashes ro_archive_hashes_fold_var-1
                                (seq
                                 (seq
                                  (ap ro_archive_hashes_fold_var-1 $ro_archive_hashes_test-1)
                                  (canon %init_peer_id% $ro_archive_hashes_test-1  #ro_archive_hashes_iter_canon-1)
                                 )
                                 (xor
                                  (match #ro_archive_hashes_iter_canon-1.length 1
                                   (null)
                                  )
                                  (next ro_archive_hashes_fold_var-1)
                                 )
                                )
                                (never)
                               )
                               (canon %init_peer_id% $ro_archive_hashes_test-1  #ro_archive_hashes_result_canon-1)
                              )
                              (ap #ro_archive_hashes_result_canon-1 ro_archive_hashes_gate-1)
                             )
                            )
                           )
                           (call %init_peer_id% ("run-console" "print") [ro_archive_hashes_gate-1.$.[0]])
                          )
                          (par
                           (new $option-inline-10
                            (seq
                             (seq
                              (new %ContentWorkerV1_obj-4_map
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-4_map)
                                     (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-4_map)
                                    )
                                    (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-4_map)
                                   )
                                   (ap ("definition" "bafkreig7t3dmlsnli5l7jujofovdoa4ki343ymdrkwzixpqn55uapnp7au") %ContentWorkerV1_obj-4_map)
                                  )
                                  (ap ("matched" true) %ContentWorkerV1_obj-4_map)
                                 )
                                 (ap ("timestamp" "2024-04-29T11:28:01.093Z") %ContentWorkerV1_obj-4_map)
                                )
                                (canon %init_peer_id% %ContentWorkerV1_obj-4_map  ContentWorkerV1_obj-4)
                               )
                              )
                              (xor
                               (ap ContentWorkerV1_obj-4 $option-inline-10)
                               (null)
                              )
                             )
                             (canon %init_peer_id% $option-inline-10  #option-inline-10-0)
                            )
                           )
                           (new $option-inline-11
                            (seq
                             (seq
                              (new %RenderWorkerV0_obj-4_map
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-4_map)
                                    (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-4_map)
                                   )
                                   (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-4_map)
                                  )
                                  (ap ("definition" "bafkreibtwjiztp77kailcdavu5qdequvjm4hsncpn6tprzyuudr4epzwge") %RenderWorkerV0_obj-4_map)
                                 )
                                 (ap ("timestamp" "2024-04-29T12:49:20.078Z") %RenderWorkerV0_obj-4_map)
                                )
                                (canon %init_peer_id% %RenderWorkerV0_obj-4_map  RenderWorkerV0_obj-4)
                               )
                              )
                              (xor
                               (ap RenderWorkerV0_obj-4 $option-inline-11)
                               (null)
                              )
                             )
                             (canon %init_peer_id% $option-inline-11  #option-inline-11-0)
                            )
                           )
                          )
                         )
                         (new %Deals_obj-4_map
                          (seq
                           (seq
                            (ap ("contentWorkerV1" #option-inline-10-0) %Deals_obj-4_map)
                            (ap ("renderWorkerV0" #option-inline-11-0) %Deals_obj-4_map)
                           )
                           (canon %init_peer_id% %Deals_obj-4_map  Deals_obj-4)
                          )
                         )
                        )
                        (ap Deals_obj-4.$.renderWorkerV0 Deals_obj-4_flat)
                       )
                       (ap Deals_obj-4_flat.$.[0].dealIdOriginal Deals_obj-4_flat_flat)
                      )
                      (xor
                       (call -relay- ("subnet" "resolve") [Deals_obj-4_flat_flat] ret-24)
                       (fail :error:)
                      )
                     )
                     (new -if-error-
                      (xor
                       (seq
                        (match ret-24.$.success false
                         (seq
                          (new $array-inline-5
                           (seq
                            (seq
                             (ap "Failed to resolve subnet: " $array-inline-5)
                             (ap ret-24.$.error $array-inline-5)
                            )
                            (canon %init_peer_id% $array-inline-5  #array-inline-5-0)
                           )
                          )
                          (call %init_peer_id% ("run-console" "print") [#array-inline-5-0])
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                       )
                       (seq
                        (seq
                         (ap :error: -if-error-)
                         (xor
                          (seq
                           (match :error:.$.error_code 10001
                            (null)
                           )
                           (new $-hop-
                            (new #-hopc-
                             (canon -relay- $-hop-  #-hopc-)
                            )
                           )
                          )
                          (fail -if-error-)
                         )
                        )
                        (new $-hop-
                         (new #-hopc-
                          (canon -relay- $-hop-  #-hopc-)
                         )
                        )
                       )
                      )
                     )
                    )
                    (ap ret-24.$.workers ret-24_flat)
                   )
                   (xor
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (new $-hop-
                           (new #-hopc-
                            (canon -relay- $-hop-  #-hopc-)
                           )
                          )
                          (new $-hop-
                           (new #-hopc-
                            (canon ret-24_flat.$.[0].host_id $-hop-  #-hopc-)
                           )
                          )
                         )
                         (call ret-24_flat.$.[0].worker_id.[0] ("cioPinata" "addFolder") [TuDsgPublishTask_obj.$.publication.name "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow"] ret-25)
                        )
                        (ap ret-25.$.result $cids)
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon ret-24_flat.$.[0].host_id $-hop-  #-hopc-)
                        )
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon -relay- $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon %init_peer_id% $-hop-  #-hopc-)
                      )
                     )
                    )
                    (seq
                     (seq
                      (seq
                       (new $-hop-
                        (new #-hopc-
                         (canon ret-24_flat.$.[0].host_id $-hop-  #-hopc-)
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon %init_peer_id% $-hop-  #-hopc-)
                       )
                      )
                     )
                     (fail :error:)
                    )
                   )
                  )
                  (next ro-0)
                 )
                )
                (never)
               )
               (null)
              )
              (next ros-0)
             )
             (null)
            )
           )
           (new $cids_test
            (seq
             (seq
              (fold $cids cids_fold_var
               (seq
                (seq
                 (ap cids_fold_var $cids_test)
                 (canon %init_peer_id% $cids_test  #cids_iter_canon)
                )
                (xor
                 (match #cids_iter_canon.length 1
                  (null)
                 )
                 (next cids_fold_var)
                )
               )
               (never)
              )
              (canon %init_peer_id% $cids_test  #cids_result_canon)
             )
             (ap #cids_result_canon cids_gate)
            )
           )
          )
          (canon %init_peer_id% $results  #results_canon)
         )
         (call %init_peer_id% ("callbackSrv" "response") [cids_gate.$.[0] #results_canon])
        )
       )
      )
     )
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RenderOnDSGArgTempTask = { author: string; payload: string; post_type: string; slug: string; publication: string; }

export type RenderOnDSGResultType = [string, { errors: string[]; output: number[][]; results: string[]; }[]]

export type RenderOnDSGParams = [tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}];

export type RenderOnDSGResult = Promise<RenderOnDSGResultType>;

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
                    "name": "string",
                    "tag": "scalar"
                },
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
 (new $results
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
    (canon %init_peer_id% $results  #results_canon)
   )
   (call %init_peer_id% ("callbackSrv" "response") [#results_canon])
  )
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

export const subnet_script = `
(xor
 (seq
  (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type SubnetParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type SubnetResult = Promise<boolean>;

export function subnet(...args: SubnetParams): SubnetResult {
    return callFunction$$(
        args,
        {
    "functionName": "subnet",
    "arrow": {
        "domain": {
            "fields": {},
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
        subnet_script
    );
}
