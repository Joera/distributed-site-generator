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


// Functions
export const helloWorldRemote_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (xor
    (seq
     (seq
      (call -relay- ("op" "concat_strings") ["Hello, " -name-arg-] ret)
      (call -relay- ("op" "concat_strings") [ret "! From "] ret-0)
     )
     (call -relay- ("op" "concat_strings") [ret-0 -relay-] ret-1)
    )
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function helloWorldRemote(
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorldRemote(
    peer: IFluenceClient$$,
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorldRemote(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorldRemote",
    "arrow": {
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
        helloWorldRemote_script
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
                     (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj_map)
                    )
                    (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj_map)
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
                    (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj_map)
                    (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj_map)
                   )
                   (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                  )
                  (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                 )
                 (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj_map)
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
            (ap ("dsgWorkerV1" #option-inline-0) %Hosts_obj_map)
            (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
           )
          )
         )
         (ap Hosts_obj.$.dsgWorkerV1 Hosts_obj_flat)
        )
        (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
       )
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
             (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
            )
           )
          )
          (call Hosts_obj_flat_flat.$.[0].workerId ("aqua-ipfs" "get_local_api_multiaddr") [] ret)
         )
         (new -if-error-
          (xor
           (seq
            (seq
             (match ret.$.success true
              (fold -tasks-arg- tempTask-0
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
                                       (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj-0_map)
                                      )
                                      (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj-0_map)
                                     )
                                     (canon Hosts_obj_flat_flat.$.[0].workerId %SpellLocation_obj-0_map  SpellLocation_obj-0)
                                    )
                                   )
                                   (ap SpellLocation_obj-0 $array-inline-1)
                                  )
                                  (canon Hosts_obj_flat_flat.$.[0].workerId $array-inline-1  #array-inline-1-0)
                                 )
                                )
                                (new %Host_obj-0_map
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj-0_map)
                                      (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj-0_map)
                                     )
                                     (ap ("installationSpells" #array-inline-1-0) %Host_obj-0_map)
                                    )
                                    (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-0_map)
                                   )
                                   (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj-0_map)
                                  )
                                  (canon Hosts_obj_flat_flat.$.[0].workerId %Host_obj-0_map  Host_obj-0)
                                 )
                                )
                               )
                               (xor
                                (ap Host_obj-0 $option-inline-1)
                                (null)
                               )
                              )
                              (canon Hosts_obj_flat_flat.$.[0].workerId $option-inline-1  #option-inline-1-0)
                             )
                            )
                            (new %Hosts_obj-0_map
                             (seq
                              (ap ("dsgWorkerV1" #option-inline-1-0) %Hosts_obj-0_map)
                              (canon Hosts_obj_flat_flat.$.[0].workerId %Hosts_obj-0_map  Hosts_obj-0)
                             )
                            )
                           )
                           (ap Hosts_obj-0.$.dsgWorkerV1 Hosts_obj-0_flat)
                          )
                          (ap Hosts_obj-0_flat.$.[0].installationSpells Hosts_obj-0_flat_flat)
                         )
                         (fold Hosts_obj-0_flat_flat w-0-0
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
                                      (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                    (new $-ephemeral-stream-
                                     (new #-ephemeral-canon-
                                      (canon w-0-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                   )
                                   (call w-0-0.$.workerId ("aqua-ipfs" "dag_get") [tempTask-0.$.author] ret-0)
                                  )
                                  (ap ret-0 $ipfs_results)
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
                                (call w-0-0.$.workerId ("vault" "cat") [ipfs_results_gate.$.[0].path] ret-1)
                               )
                               (ap ret-1 $s)
                              )
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon w-0-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                             )
                             (new $-ephemeral-stream-
                              (new #-ephemeral-canon-
                               (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
                                 (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                )
                               )
                              )
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon Hosts_obj_flat_flat.$.[0].workerId $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                             )
                             (fail :error:)
                            )
                           )
                           (next w-0-0)
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
                              (canon Hosts_obj_flat_flat.$.[0].workerId $s_test  #s_iter_canon)
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
                           (canon Hosts_obj_flat_flat.$.[0].workerId $s_test  #s_result_canon)
                          )
                          (ap #s_result_canon s_gate)
                         )
                        )
                       )
                       (call Hosts_obj_flat_flat.$.[0].workerId ("json" "parse") [s_gate.$.[0]] ret-2)
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
                                       (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj-1_map)
                                      )
                                      (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj-1_map)
                                     )
                                     (canon Hosts_obj_flat_flat.$.[0].workerId %SpellLocation_obj-1_map  SpellLocation_obj-1)
                                    )
                                   )
                                   (ap SpellLocation_obj-1 $array-inline-2)
                                  )
                                  (canon Hosts_obj_flat_flat.$.[0].workerId $array-inline-2  #array-inline-2-0)
                                 )
                                )
                                (new %Host_obj-1_map
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj-1_map)
                                      (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj-1_map)
                                     )
                                     (ap ("installationSpells" #array-inline-2-0) %Host_obj-1_map)
                                    )
                                    (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-1_map)
                                   )
                                   (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj-1_map)
                                  )
                                  (canon Hosts_obj_flat_flat.$.[0].workerId %Host_obj-1_map  Host_obj-1)
                                 )
                                )
                               )
                               (xor
                                (ap Host_obj-1 $option-inline-2)
                                (null)
                               )
                              )
                              (canon Hosts_obj_flat_flat.$.[0].workerId $option-inline-2  #option-inline-2-0)
                             )
                            )
                            (new %Hosts_obj-1_map
                             (seq
                              (ap ("dsgWorkerV1" #option-inline-2-0) %Hosts_obj-1_map)
                              (canon Hosts_obj_flat_flat.$.[0].workerId %Hosts_obj-1_map  Hosts_obj-1)
                             )
                            )
                           )
                           (ap Hosts_obj-1.$.dsgWorkerV1 Hosts_obj-1_flat)
                          )
                          (ap Hosts_obj-1_flat.$.[0].installationSpells Hosts_obj-1_flat_flat)
                         )
                         (fold Hosts_obj-1_flat_flat w-1-0
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
                                      (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                    (new $-ephemeral-stream-
                                     (new #-ephemeral-canon-
                                      (canon w-1-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                     )
                                    )
                                   )
                                   (call w-1-0.$.workerId ("aqua-ipfs" "dag_get") [tempTask-0.$.publication] ret-3)
                                  )
                                  (ap ret-3 $ipfs_results-0)
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
                                (call w-1-0.$.workerId ("vault" "cat") [ipfs_results-0_gate.$.[0].path] ret-4)
                               )
                               (ap ret-4 $s-1)
                              )
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon w-1-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                             )
                             (new $-ephemeral-stream-
                              (new #-ephemeral-canon-
                               (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
                                 (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
                                )
                               )
                              )
                              (new $-ephemeral-stream-
                               (new #-ephemeral-canon-
                                (canon Hosts_obj_flat_flat.$.[0].workerId $-ephemeral-stream-  #-ephemeral-canon-)
                               )
                              )
                             )
                             (fail :error:)
                            )
                           )
                           (next w-1-0)
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
                              (canon Hosts_obj_flat_flat.$.[0].workerId $s-1_test  #s-1_iter_canon)
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
                           (canon Hosts_obj_flat_flat.$.[0].workerId $s-1_test  #s-1_result_canon)
                          )
                          (ap #s-1_result_canon s-1_gate)
                         )
                        )
                       )
                       (call Hosts_obj_flat_flat.$.[0].workerId ("json" "parse") [s-1_gate.$.[0]] ret-5)
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
                         (ap ("author" ret-2) %TuDsgPublishTask_obj_map)
                         (ap ("payload" tempTask-0.$.payload) %TuDsgPublishTask_obj_map)
                        )
                        (ap ("post_type" tempTask-0.$.post_type) %TuDsgPublishTask_obj_map)
                       )
                       (ap ("publication" ret-5) %TuDsgPublishTask_obj_map)
                      )
                      (ap ("slug" tempTask-0.$.slug) %TuDsgPublishTask_obj_map)
                     )
                     (canon Hosts_obj_flat_flat.$.[0].workerId %TuDsgPublishTask_obj_map  TuDsgPublishTask_obj)
                    )
                   )
                  )
                  (call Hosts_obj_flat_flat.$.[0].workerId ("tuDsgContent" "persist_single") [TuDsgPublishTask_obj ret.$.multiaddr] ret-6)
                 )
                 (ap ret-6 $results)
                )
                (next tempTask-0)
               )
              )
             )
             (new $-ephemeral-stream-
              (new #-ephemeral-canon-
               (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
                   (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
               (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
             (canon Hosts_obj_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
      (canon %init_peer_id% $results  #results_canon)
     )
     (call %init_peer_id% ("run-console" "print") [#results_canon])
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function bulkUpload(
    tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[],
    config?: {ttl?: number}
): Promise<boolean>;

export function bulkUpload(
    peer: IFluenceClient$$,
    tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[],
    config?: {ttl?: number}
): Promise<boolean>;

export function bulkUpload(...args: any[]) {
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
                      (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj_map)
                     )
                     (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj_map)
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
                     (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj_map)
                     (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj_map)
                    )
                    (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                   )
                   (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                  )
                  (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj_map)
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
             (ap ("dsgWorkerV1" #option-inline-0) %Hosts_obj_map)
             (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
            )
           )
          )
          (ap Hosts_obj.$.dsgWorkerV1 Hosts_obj_flat)
         )
         (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
        )
        (call %init_peer_id% ("run-console" "print") [Hosts_obj_flat_flat])
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
    )
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [Kubos_obj])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type GatherKubosResult = { externals: string[]; internals: string[]; }

export function gatherKubos(
    config?: {ttl?: number}
): Promise<GatherKubosResult>;

export function gatherKubos(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<GatherKubosResult>;

export function gatherKubos(...args: any[]) {
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
                                  (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj_map)
                                 )
                                 (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj_map)
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
                                 (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj_map)
                                 (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj_map)
                                )
                                (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                               )
                               (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                              )
                              (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj_map)
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
                         (ap ("dsgWorkerV1" #option-inline-0) %Hosts_obj_map)
                         (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
                        )
                       )
                      )
                      (ap Hosts_obj.$.dsgWorkerV1 Hosts_obj_flat)
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
                                  (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj-0_map)
                                 )
                                 (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj-0_map)
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
                                 (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj-0_map)
                                 (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj-0_map)
                                )
                                (ap ("installationSpells" #array-inline-1-0) %Host_obj-0_map)
                               )
                               (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-0_map)
                              )
                              (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj-0_map)
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
                         (ap ("dsgWorkerV1" #option-inline-1-0) %Hosts_obj-0_map)
                         (canon %init_peer_id% %Hosts_obj-0_map  Hosts_obj-0)
                        )
                       )
                      )
                      (ap Hosts_obj-0.$.dsgWorkerV1 Hosts_obj-0_flat)
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
                        (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj-1_map)
                       )
                       (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj-1_map)
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
                       (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj-1_map)
                       (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj-1_map)
                      )
                      (ap ("installationSpells" #array-inline-2-0) %Host_obj-1_map)
                     )
                     (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-1_map)
                    )
                    (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj-1_map)
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
              (ap ("dsgWorkerV1" #option-inline-2-0) %Hosts_obj-1_map)
              (canon %init_peer_id% %Hosts_obj-1_map  Hosts_obj-1)
             )
            )
           )
           (ap Hosts_obj-1.$.dsgWorkerV1 Hosts_obj-1_flat)
          )
          (ap Hosts_obj-1_flat.$.[0].installationSpells Hosts_obj-1_flat_flat)
         )
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
               (canon Hosts_obj-1_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
              )
             )
            )
            (call Hosts_obj-1_flat_flat.$.[0].workerId ("aqua-ipfs" "get_local_api_multiaddr") [] ret-5)
           )
           (new -if-error-
            (xor
             (seq
              (seq
               (match ret-5.$.success true
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "persist_single") [TuDsgPublishTask_obj ret-5.$.multiaddr] ret-6)
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgContent" "create_render_objects") [TuDsgPublishTask_obj ret-6 ret-5.$.multiaddr] ret-7)
                       )
                       (ap ret-7 $queue)
                      )
                      (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgRenderer" "imports") [-archive_cid-arg- TuDsgPublishTask_obj.$.publication ret-5.$.multiaddr] ret-8)
                     )
                     (ap ret-8 $debug)
                    )
                    (canon Hosts_obj-1_flat_flat.$.[0].workerId $queue  #queue_canon)
                   )
                   (fold #queue_canon ros-0
                    (seq
                     (fold ros-0 ro-0
                      (seq
                       (seq
                        (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgRenderer" "single") [ro-0 ret-5.$.multiaddr] ret-9)
                        (ap ret-9 $results)
                       )
                       (next ro-0)
                      )
                     )
                     (next ros-0)
                    )
                   )
                  )
                  (call Hosts_obj-1_flat_flat.$.[0].workerId ("tuDsgRenderer" "collect") [TuDsgPublishTask_obj.$.publication.name ret-5.$.multiaddr] ret-10)
                 )
                 (ap ret-10 $results)
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
                (ap :error: -if-error-)
                (xor
                 (seq
                  (seq
                   (match :error:.$.error_code 10001
                    (null)
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
                 (fail -if-error-)
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
        (canon %init_peer_id% $debug  #debug_canon)
       )
       (call %init_peer_id% ("run-console" "print") [#debug_canon])
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

export function renderOnDSG(
    tempTask: RenderOnDSGArgTempTask,
    archive_cid: string,
    config?: {ttl?: number}
): Promise<{ errors: string[]; results: string[]; }[]>;

export function renderOnDSG(
    peer: IFluenceClient$$,
    tempTask: RenderOnDSGArgTempTask,
    archive_cid: string,
    config?: {ttl?: number}
): Promise<{ errors: string[]; results: string[]; }[]>;

export function renderOnDSG(...args: any[]) {
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
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "publication_cid") [] -publication_cid-arg-)
      )
      (call %init_peer_id% ("getDataSrv" "post_type") [] -post_type-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
    )
    (new $queue
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
                              (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj_map)
                             )
                             (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj_map)
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
                             (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj_map)
                             (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj_map)
                            )
                            (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                           )
                           (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj_map)
                          )
                          (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj_map)
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
                     (ap ("dsgWorkerV1" #option-inline-0) %Hosts_obj_map)
                     (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
                    )
                   )
                  )
                  (ap Hosts_obj.$.dsgWorkerV1 Hosts_obj_flat)
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
                          (call w-0-0.$.workerId ("aqua-ipfs" "dag_get") [-publication_cid-arg-] ret)
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
           (call %init_peer_id% ("run-console" "print") [ret-1])
          )
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
                     (ap ("spellId" "4ed24aa7-f796-4db0-a5cf-4863de6faefa") %SpellLocation_obj-0_map)
                    )
                    (ap ("workerId" "12D3KooWNFVvhwo1vYi17wed7gqwuu1SrVys8dit4Syv4Xr8kQPt") %SpellLocation_obj-0_map)
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
                    (ap ("definition" "bafkreibkicou34jhrfycsrx3sc42jnzbtdzbyug4sip547nakawd6umaja") %Host_obj-0_map)
                    (ap ("dummyDealId" "dsgWorkerV1_12D3KooWGLCQNpvW6tyjZQD4JcGYRZg6vw7zneRgCi4D8aEdatKe_21233612088348064") %Host_obj-0_map)
                   )
                   (ap ("installationSpells" #array-inline-1-0) %Host_obj-0_map)
                  )
                  (ap ("relayId" "12D3KooWSMH42NaRdq8uN3pTsBgnJYSZjYrmC1DhBmBXy1hCatrj") %Host_obj-0_map)
                 )
                 (ap ("timestamp" "2024-02-19T18:43:56.059Z") %Host_obj-0_map)
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
         )
         (new %Hosts_obj-0_map
          (seq
           (ap ("dsgWorkerV1" #option-inline-1-0) %Hosts_obj-0_map)
           (canon %init_peer_id% %Hosts_obj-0_map  Hosts_obj-0)
          )
         )
        )
        (ap Hosts_obj-0.$.dsgWorkerV1 Hosts_obj-0_flat)
       )
       (ap Hosts_obj-0_flat.$.[0].installationSpells Hosts_obj-0_flat_flat)
      )
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
            (canon Hosts_obj-0_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (call Hosts_obj-0_flat_flat.$.[0].workerId ("aqua-ipfs" "get_local_api_multiaddr") [] ret-2)
        )
        (new -if-error-
         (xor
          (seq
           (seq
            (match ret-2.$.success true
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (call Hosts_obj-0_flat_flat.$.[0].workerId ("tuDsgContent" "bulk") [ret-1 -post_type-arg- ret-2.$.multiaddr] ret-3)
                   (ap ret-3 $queue)
                  )
                  (call Hosts_obj-0_flat_flat.$.[0].workerId ("tuDsgRenderer" "imports") [-archive_cid-arg- ret-1 ret-2.$.multiaddr] ret-4)
                 )
                 (canon Hosts_obj-0_flat_flat.$.[0].workerId $queue  #queue_canon)
                )
                (fold #queue_canon ros-0
                 (seq
                  (fold ros-0 ro-0
                   (seq
                    (seq
                     (seq
                      (call Hosts_obj-0_flat_flat.$.[0].workerId ("tuDsgRenderer" "single") [ro-0 ret-2.$.multiaddr] ret-5)
                      (ap ret-5 $results)
                     )
                     (call Hosts_obj-0_flat_flat.$.[0].workerId ("peer" "timeout") [10 "buffering not to overload tableland"] ret-6)
                    )
                    (next ro-0)
                   )
                  )
                  (next ros-0)
                 )
                )
               )
               (call Hosts_obj-0_flat_flat.$.[0].workerId ("tuDsgRenderer" "collect") [ret-1.$.name ret-2.$.multiaddr] ret-7)
              )
              (ap ret-7 $results)
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon Hosts_obj-0_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
                  (canon Hosts_obj-0_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
              (canon Hosts_obj-0_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
            (canon Hosts_obj-0_flat_flat.$.[0].hostId $-ephemeral-stream-  #-ephemeral-canon-)
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
   (canon %init_peer_id% $results  #results_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#results_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function bulkRender(
    publication_cid: string,
    post_type: string,
    archive_cid: string,
    config?: {ttl?: number}
): Promise<{ errors: string[]; results: string[]; }[]>;

export function bulkRender(
    peer: IFluenceClient$$,
    publication_cid: string,
    post_type: string,
    archive_cid: string,
    config?: {ttl?: number}
): Promise<{ errors: string[]; results: string[]; }[]>;

export function bulkRender(...args: any[]) {
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
