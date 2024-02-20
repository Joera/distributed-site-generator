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
export const randomWorker_script = `
(xor
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
  (call %init_peer_id% ("callbackSrv" "response") [Hosts_obj_flat_flat.$.[0]])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RandomWorkerResult = { hostId: string; spellId: string; workerId: string; }

export function randomWorker(
    config?: {ttl?: number}
): Promise<RandomWorkerResult>;

export function randomWorker(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<RandomWorkerResult>;

export function randomWorker(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "randomWorker",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "SpellLocation",
                    "fields": {
                        "hostId": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "spellId": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "workerId": {
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
        randomWorker_script
    );
}

export const getWorkerInfo_script = `
(xor
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
  (call %init_peer_id% ("callbackSrv" "response") [Hosts_obj_flat_flat])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function getWorkerInfo(
    config?: {ttl?: number}
): Promise<{ hostId: string; spellId: string; workerId: string; }[]>;

export function getWorkerInfo(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<{ hostId: string; spellId: string; workerId: string; }[]>;

export function getWorkerInfo(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "getWorkerInfo",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "SpellLocation",
                        "fields": {
                            "hostId": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "spellId": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "workerId": {
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
        getWorkerInfo_script
    );
}

export const fetchAuthor_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "cid") [] -cid-arg-)
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
                  (call w-0.$.workerId ("aqua-ipfs" "dag_get") [-cid-arg-] ret)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type FetchAuthorResult = { content_mappings: string; name: string; repository: string; }

export function fetchAuthor(
    cid: string,
    config?: {ttl?: number}
): Promise<FetchAuthorResult>;

export function fetchAuthor(
    peer: IFluenceClient$$,
    cid: string,
    config?: {ttl?: number}
): Promise<FetchAuthorResult>;

export function fetchAuthor(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "fetchAuthor",
    "arrow": {
        "domain": {
            "fields": {
                "cid": {
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
        fetchAuthor_script
    );
}

export const fromTempTask_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (call %init_peer_id% ("getDataSrv" "tempTask") [] -tempTask-arg-)
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
                    (call w-0.$.workerId ("aqua-ipfs" "dag_get") [-tempTask-arg-.$.author] ret)
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
  (call %init_peer_id% ("callbackSrv" "response") [TuDsgPublishTask_obj])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type FromTempTaskArgTempTask = { author: string; payload: string; post_type: string; slug: string; publication: string; }

export type FromTempTaskResult = { author: { content_mappings: string; name: string; repository: string; }; payload: string; post_type: string; slug: string; publication: { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }; }

export function fromTempTask(
    tempTask: FromTempTaskArgTempTask,
    config?: {ttl?: number}
): Promise<FromTempTaskResult>;

export function fromTempTask(
    peer: IFluenceClient$$,
    tempTask: FromTempTaskArgTempTask,
    config?: {ttl?: number}
): Promise<FromTempTaskResult>;

export function fromTempTask(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "fromTempTask",
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
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
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
        fromTempTask_script
    );
}

export const fetchPublication_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "cid") [] -cid-arg-)
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
                  (call w-0.$.workerId ("aqua-ipfs" "dag_get") [-cid-arg-] ret)
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
  (call %init_peer_id% ("callbackSrv" "response") [ret-1])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type FetchPublicationResult = { name: string; assets: string; domains: { dns: { auth_key: string; custodian: string; item_id: string; }; url: string; }[]; mapping: { reference: string; path: string; collections: { key: string; query: string; source: string; value: string; }[]; ripples: { post_type: string; query: string; value: string; }[]; file: string; }[]; templates: string; governor: string; }

export function fetchPublication(
    cid: string,
    config?: {ttl?: number}
): Promise<FetchPublicationResult>;

export function fetchPublication(
    peer: IFluenceClient$$,
    cid: string,
    config?: {ttl?: number}
): Promise<FetchPublicationResult>;

export function fetchPublication(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "fetchPublication",
    "arrow": {
        "domain": {
            "fields": {
                "cid": {
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
        fetchPublication_script
    );
}
