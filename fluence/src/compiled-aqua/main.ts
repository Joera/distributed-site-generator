/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
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
 (new $addresses
  (new $check_address
   (new $raw_txs
    (new $signed
     (new $signatures
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
                            (par
                             (par
                              (par
                               (new $option-inline
                                (seq
                                 (xor
                                  (seq
                                   (new %ContentWorkerV1_obj_map
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj_map)
                                         (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %ContentWorkerV1_obj_map)
                                        )
                                        (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %ContentWorkerV1_obj_map)
                                       )
                                       (ap ("definition" "bafkreibhm7bech6wttlrjpqdqjfuktyvmezm6cxom24jjmnnzdqaausqaa") %ContentWorkerV1_obj_map)
                                      )
                                      (ap ("timestamp" "2024-08-11T15:10:57.041Z") %ContentWorkerV1_obj_map)
                                     )
                                     (canon %init_peer_id% %ContentWorkerV1_obj_map  ContentWorkerV1_obj)
                                    )
                                   )
                                   (ap ContentWorkerV1_obj $option-inline)
                                  )
                                  (null)
                                 )
                                 (canon %init_peer_id% $option-inline  #option-inline-0)
                                )
                               )
                               (new $option-inline-1
                                (seq
                                 (xor
                                  (seq
                                   (new %RenderWorkerV1_obj_map
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (ap ("chainNetworkId" 31337) %RenderWorkerV1_obj_map)
                                         (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %RenderWorkerV1_obj_map)
                                        )
                                        (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %RenderWorkerV1_obj_map)
                                       )
                                       (ap ("definition" "bafkreicvhfagg57w5vdze5tje643ipzu3mmp7ckgzj7wcicbx6k6naq6ha") %RenderWorkerV1_obj_map)
                                      )
                                      (ap ("timestamp" "2024-08-11T15:11:01.293Z") %RenderWorkerV1_obj_map)
                                     )
                                     (canon %init_peer_id% %RenderWorkerV1_obj_map  RenderWorkerV1_obj)
                                    )
                                   )
                                   (ap RenderWorkerV1_obj $option-inline-1)
                                  )
                                  (null)
                                 )
                                 (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                                )
                               )
                              )
                              (new $option-inline-2
                               (seq
                                (xor
                                 (seq
                                  (new %TaskWorkerV1_obj_map
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (ap ("chainNetworkId" 31337) %TaskWorkerV1_obj_map)
                                        (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TaskWorkerV1_obj_map)
                                       )
                                       (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TaskWorkerV1_obj_map)
                                      )
                                      (ap ("definition" "bafkreiduvjc5nkvrmcz4xg3zc6otg4l5cdjo7gikzp36dmbzpk3z3ypxyy") %TaskWorkerV1_obj_map)
                                     )
                                     (ap ("timestamp" "2024-08-11T15:10:52.702Z") %TaskWorkerV1_obj_map)
                                    )
                                    (canon %init_peer_id% %TaskWorkerV1_obj_map  TaskWorkerV1_obj)
                                   )
                                  )
                                  (ap TaskWorkerV1_obj $option-inline-2)
                                 )
                                 (null)
                                )
                                (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                               )
                              )
                             )
                             (new $option-inline-3
                              (seq
                               (xor
                                (seq
                                 (new %WebHostWorkerV1_obj_map
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (ap ("chainNetworkId" 31337) %WebHostWorkerV1_obj_map)
                                       (ap ("dealId" "541dfe503202b78c5d78facd6cdb0a04d4b35634") %WebHostWorkerV1_obj_map)
                                      )
                                      (ap ("dealIdOriginal" "0x541Dfe503202b78c5d78FaCd6CDB0a04D4b35634") %WebHostWorkerV1_obj_map)
                                     )
                                     (ap ("definition" "bafkreidai464ybsg2ramp7mv7bjkeaey73wlepfiqaulxn5liastw44yoa") %WebHostWorkerV1_obj_map)
                                    )
                                    (ap ("timestamp" "2024-08-11T09:29:20.637Z") %WebHostWorkerV1_obj_map)
                                   )
                                   (canon %init_peer_id% %WebHostWorkerV1_obj_map  WebHostWorkerV1_obj)
                                  )
                                 )
                                 (ap WebHostWorkerV1_obj $option-inline-3)
                                )
                                (null)
                               )
                               (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
                              )
                             )
                            )
                           )
                           (new %Deals_obj_map
                            (seq
                             (seq
                              (seq
                               (seq
                                (ap ("contentWorkerV1" #option-inline-0) %Deals_obj_map)
                                (ap ("renderWorkerV1" #option-inline-1-0) %Deals_obj_map)
                               )
                               (ap ("taskWorkerV1" #option-inline-2-0) %Deals_obj_map)
                              )
                              (ap ("webHostWorkerV1" #option-inline-3-0) %Deals_obj_map)
                             )
                             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                            )
                           )
                          )
                          (ap Deals_obj.$.webHostWorkerV1 Deals_obj_flat)
                         )
                         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                        )
                        (xor
                         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                         (fail :error:)
                        )
                       )
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
                              (canon %init_peer_id% $array-inline  #array-inline-0)
                             )
                            )
                            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
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
                          (call ret_flat.$.[0].worker_id.[0] ("cioSigner" "public_address") [] ret-0)
                         )
                         (ap ret-0 $addresses)
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
                    (new $addresses_test
                     (seq
                      (seq
                       (fold $addresses addresses_fold_var
                        (seq
                         (seq
                          (ap addresses_fold_var $addresses_test)
                          (canon %init_peer_id% $addresses_test  #addresses_iter_canon)
                         )
                         (xor
                          (match #addresses_iter_canon.length 1
                           (null)
                          )
                          (next addresses_fold_var)
                         )
                        )
                        (never)
                       )
                       (canon %init_peer_id% $addresses_test  #addresses_result_canon)
                      )
                      (ap #addresses_result_canon addresses_gate)
                     )
                    )
                   )
                   (call %init_peer_id% ("run-console" "print") [addresses_gate.$.[0]])
                  )
                  (par
                   (fold ret_flat w-0
                    (par
                     (xor
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
                               (canon w-0.$.host_id $-hop-  #-hopc-)
                              )
                             )
                            )
                            (par
                             (seq
                              (new $array-inline-1
                               (seq
                                (ap "bafygo" $array-inline-1)
                                (canon w-0.$.worker_id.[0] $array-inline-1  #array-inline-1-0)
                               )
                              )
                              (call w-0.$.worker_id.[0] ("debug" "stringify") [#array-inline-1-0] ret-1)
                             )
                             (new $addresses_test-0
                              (seq
                               (seq
                                (fold $addresses addresses_fold_var-0
                                 (seq
                                  (seq
                                   (ap addresses_fold_var-0 $addresses_test-0)
                                   (canon w-0.$.worker_id.[0] $addresses_test-0  #addresses_iter_canon-0)
                                  )
                                  (xor
                                   (match #addresses_iter_canon-0.length 1
                                    (null)
                                   )
                                   (next addresses_fold_var-0)
                                  )
                                 )
                                 (never)
                                )
                                (canon w-0.$.worker_id.[0] $addresses_test-0  #addresses_result_canon-0)
                               )
                               (ap #addresses_result_canon-0 addresses_gate-0)
                              )
                             )
                            )
                           )
                           (call w-0.$.worker_id.[0] ("nPublication" "prep_write") [421614 "0x94cFb1DE6F85b07A1573b626E550113e456D9Ac0" "updateHtmlRoot(string _html_root)" ret-1 addresses_gate-0.$.[0] "https://arb-sepolia.g.alchemy.com/v2/DAfzjixY82ICdLCssh_dTQpoN0I2mthW"] ret-2)
                          )
                          (ap ret-2 $raw_txs)
                         )
                         (new $-hop-
                          (new #-hopc-
                           (canon w-0.$.host_id $-hop-  #-hopc-)
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
                           (canon w-0.$.host_id $-hop-  #-hopc-)
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
                     (next w-0)
                    )
                    (never)
                   )
                   (null)
                  )
                 )
                 (new $raw_txs_test
                  (seq
                   (seq
                    (fold $raw_txs raw_txs_fold_var
                     (seq
                      (seq
                       (ap raw_txs_fold_var $raw_txs_test)
                       (canon %init_peer_id% $raw_txs_test  #raw_txs_iter_canon)
                      )
                      (xor
                       (match #raw_txs_iter_canon.length 1
                        (null)
                       )
                       (next raw_txs_fold_var)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $raw_txs_test  #raw_txs_result_canon)
                   )
                   (ap #raw_txs_result_canon raw_txs_gate)
                  )
                 )
                )
                (new $raw_txs_test-0
                 (seq
                  (seq
                   (fold $raw_txs raw_txs_fold_var-0
                    (seq
                     (seq
                      (ap raw_txs_fold_var-0 $raw_txs_test-0)
                      (canon %init_peer_id% $raw_txs_test-0  #raw_txs_iter_canon-0)
                     )
                     (xor
                      (match #raw_txs_iter_canon-0.length 1
                       (null)
                      )
                      (next raw_txs_fold_var-0)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $raw_txs_test-0  #raw_txs_result_canon-0)
                  )
                  (ap #raw_txs_result_canon-0 raw_txs_gate-0)
                 )
                )
               )
               (call %init_peer_id% ("run-console" "print") [raw_txs_gate-0.$.[0]])
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
                      (call ret_flat.$.[0].worker_id.[0] ("cioSigner" "public_address") [] ret-3)
                     )
                     (ap ret-3 $check_address)
                    )
                    (new $raw_txs_test-1
                     (seq
                      (seq
                       (fold $raw_txs raw_txs_fold_var-1
                        (seq
                         (seq
                          (ap raw_txs_fold_var-1 $raw_txs_test-1)
                          (canon ret_flat.$.[0].worker_id.[0] $raw_txs_test-1  #raw_txs_iter_canon-1)
                         )
                         (xor
                          (match #raw_txs_iter_canon-1.length 1
                           (null)
                          )
                          (next raw_txs_fold_var-1)
                         )
                        )
                        (never)
                       )
                       (canon ret_flat.$.[0].worker_id.[0] $raw_txs_test-1  #raw_txs_result_canon-1)
                      )
                      (ap #raw_txs_result_canon-1 raw_txs_gate-1)
                     )
                    )
                   )
                   (call ret_flat.$.[0].worker_id.[0] ("cioSigner" "rawtx") [raw_txs_gate-1.$.[0] 421614] ret-4)
                  )
                  (ap ret-4 $signatures)
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
             (canon %init_peer_id% $check_address  #check_address_canon)
            )
            (call %init_peer_id% ("run-console" "print") [#check_address_canon])
           )
           (new $signatures_test
            (seq
             (seq
              (fold $signatures signatures_fold_var
               (seq
                (seq
                 (ap signatures_fold_var $signatures_test)
                 (canon %init_peer_id% $signatures_test  #signatures_iter_canon)
                )
                (xor
                 (match #signatures_iter_canon.length 1
                  (null)
                 )
                 (next signatures_fold_var)
                )
               )
               (never)
              )
              (canon %init_peer_id% $signatures_test  #signatures_result_canon)
             )
             (ap #signatures_result_canon signatures_gate)
            )
           )
          )
          (call %init_peer_id% ("run-console" "print") [signatures_gate.$.[0]])
         )
         (xor
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
                   (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                  )
                 )
                )
                (new $raw_txs_test-2
                 (seq
                  (seq
                   (fold $raw_txs raw_txs_fold_var-2
                    (seq
                     (seq
                      (ap raw_txs_fold_var-2 $raw_txs_test-2)
                      (canon ret_flat.$.[0].worker_id.[0] $raw_txs_test-2  #raw_txs_iter_canon-2)
                     )
                     (xor
                      (match #raw_txs_iter_canon-2.length 1
                       (null)
                      )
                      (next raw_txs_fold_var-2)
                     )
                    )
                    (never)
                   )
                   (canon ret_flat.$.[0].worker_id.[0] $raw_txs_test-2  #raw_txs_result_canon-2)
                  )
                  (ap #raw_txs_result_canon-2 raw_txs_gate-2)
                 )
                )
               )
               (canon ret_flat.$.[0].worker_id.[0] $signatures  #signatures_canon)
              )
              (call ret_flat.$.[0].worker_id.[0] ("nPublication" "exec_write") [raw_txs_gate-2.$.[0] #signatures_canon "https://arb-sepolia.g.alchemy.com/v2/DAfzjixY82ICdLCssh_dTQpoN0I2mthW"] ret-5)
             )
             (ap ret-5 $signed)
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
        (new $signed_test
         (seq
          (seq
           (fold $signed signed_fold_var
            (seq
             (seq
              (ap signed_fold_var $signed_test)
              (canon %init_peer_id% $signed_test  #signed_iter_canon)
             )
             (xor
              (match #signed_iter_canon.length 1
               (null)
              )
              (next signed_fold_var)
             )
            )
            (never)
           )
           (canon %init_peer_id% $signed_test  #signed_result_canon)
          )
          (ap #signed_result_canon signed_gate)
         )
        )
       )
       (call %init_peer_id% ("callbackSrv" "response") [signed_gate.$.[0]])
      )
     )
    )
   )
  )
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

export const provision_script = `
(xor
 (new $i
  (new $addresses
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
              (par
               (par
                (par
                 (new $option-inline
                  (seq
                   (xor
                    (seq
                     (new %ContentWorkerV1_obj_map
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj_map)
                           (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %ContentWorkerV1_obj_map)
                          )
                          (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %ContentWorkerV1_obj_map)
                         )
                         (ap ("definition" "bafkreibhm7bech6wttlrjpqdqjfuktyvmezm6cxom24jjmnnzdqaausqaa") %ContentWorkerV1_obj_map)
                        )
                        (ap ("timestamp" "2024-08-11T15:10:57.041Z") %ContentWorkerV1_obj_map)
                       )
                       (canon %init_peer_id% %ContentWorkerV1_obj_map  ContentWorkerV1_obj)
                      )
                     )
                     (ap ContentWorkerV1_obj $option-inline)
                    )
                    (null)
                   )
                   (canon %init_peer_id% $option-inline  #option-inline-0)
                  )
                 )
                 (new $option-inline-1
                  (seq
                   (xor
                    (seq
                     (new %RenderWorkerV1_obj_map
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (ap ("chainNetworkId" 31337) %RenderWorkerV1_obj_map)
                           (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %RenderWorkerV1_obj_map)
                          )
                          (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %RenderWorkerV1_obj_map)
                         )
                         (ap ("definition" "bafkreicvhfagg57w5vdze5tje643ipzu3mmp7ckgzj7wcicbx6k6naq6ha") %RenderWorkerV1_obj_map)
                        )
                        (ap ("timestamp" "2024-08-11T15:11:01.293Z") %RenderWorkerV1_obj_map)
                       )
                       (canon %init_peer_id% %RenderWorkerV1_obj_map  RenderWorkerV1_obj)
                      )
                     )
                     (ap RenderWorkerV1_obj $option-inline-1)
                    )
                    (null)
                   )
                   (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                  )
                 )
                )
                (new $option-inline-2
                 (seq
                  (xor
                   (seq
                    (new %TaskWorkerV1_obj_map
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (ap ("chainNetworkId" 31337) %TaskWorkerV1_obj_map)
                          (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TaskWorkerV1_obj_map)
                         )
                         (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TaskWorkerV1_obj_map)
                        )
                        (ap ("definition" "bafkreiduvjc5nkvrmcz4xg3zc6otg4l5cdjo7gikzp36dmbzpk3z3ypxyy") %TaskWorkerV1_obj_map)
                       )
                       (ap ("timestamp" "2024-08-11T15:10:52.702Z") %TaskWorkerV1_obj_map)
                      )
                      (canon %init_peer_id% %TaskWorkerV1_obj_map  TaskWorkerV1_obj)
                     )
                    )
                    (ap TaskWorkerV1_obj $option-inline-2)
                   )
                   (null)
                  )
                  (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                 )
                )
               )
               (new $option-inline-3
                (seq
                 (xor
                  (seq
                   (new %WebHostWorkerV1_obj_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("chainNetworkId" 31337) %WebHostWorkerV1_obj_map)
                         (ap ("dealId" "541dfe503202b78c5d78facd6cdb0a04d4b35634") %WebHostWorkerV1_obj_map)
                        )
                        (ap ("dealIdOriginal" "0x541Dfe503202b78c5d78FaCd6CDB0a04D4b35634") %WebHostWorkerV1_obj_map)
                       )
                       (ap ("definition" "bafkreidai464ybsg2ramp7mv7bjkeaey73wlepfiqaulxn5liastw44yoa") %WebHostWorkerV1_obj_map)
                      )
                      (ap ("timestamp" "2024-08-11T09:29:20.637Z") %WebHostWorkerV1_obj_map)
                     )
                     (canon %init_peer_id% %WebHostWorkerV1_obj_map  WebHostWorkerV1_obj)
                    )
                   )
                   (ap WebHostWorkerV1_obj $option-inline-3)
                  )
                  (null)
                 )
                 (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
                )
               )
              )
             )
             (new %Deals_obj_map
              (seq
               (seq
                (seq
                 (seq
                  (ap ("contentWorkerV1" #option-inline-0) %Deals_obj_map)
                  (ap ("renderWorkerV1" #option-inline-1-0) %Deals_obj_map)
                 )
                 (ap ("taskWorkerV1" #option-inline-2-0) %Deals_obj_map)
                )
                (ap ("webHostWorkerV1" #option-inline-3-0) %Deals_obj_map)
               )
               (canon %init_peer_id% %Deals_obj_map  Deals_obj)
              )
             )
            )
            (ap Deals_obj.$.webHostWorkerV1 Deals_obj_flat)
           )
           (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
          )
          (xor
           (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
           (fail :error:)
          )
         )
         (new -if-error-
          (xor
           (match ret.$.success false
            (seq
             (new $array-inline
              (seq
               (seq
                (ap "Failed to resolve subnet: " $array-inline)
                (ap ret.$.error $array-inline)
               )
               (canon %init_peer_id% $array-inline  #array-inline-0)
              )
             )
             (call %init_peer_id% ("run-console" "print") [#array-inline-0])
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
        (ap ret.$.workers ret_flat)
       )
       (new $array-inline-1
        (seq
         (seq
          (seq
           (ap "1128ab3ec46956e801f3316df39316f57a24c31bdaafc0ce35edc59312b90b7d" $array-inline-1)
           (ap "e0f4ed7ea095d59270007c6dba78e73b03495f86e7f426f867841d9c3384eaef" $array-inline-1)
          )
          (ap "068993f9dfe2b9d553a609af2fee9d24ecc400832440c452ced26ff0c9d7e45d" $array-inline-1)
         )
         (canon %init_peer_id% $array-inline-1  #array-inline-1-0)
        )
       )
      )
      (fold ret_flat w-0
       (seq
        (seq
         (xor
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
                   (canon w-0.$.host_id $-hop-  #-hopc-)
                  )
                 )
                )
                (canon w-0.$.worker_id.[0] $i  #i_to_functor)
               )
               (ap #i_to_functor.length i_length)
              )
              (call w-0.$.worker_id.[0] ("cioSigner" "provision") [#array-inline-1-0.$.[i_length]] ret-0)
             )
             (ap ret-0 $addresses)
            )
            (new $-hop-
             (new #-hopc-
              (canon w-0.$.host_id $-hop-  #-hopc-)
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
               (canon w-0.$.host_id $-hop-  #-hopc-)
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
         (ap 1 $i)
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $addresses  #addresses_canon)
    )
    (call %init_peer_id% ("callbackSrv" "response") [#addresses_canon])
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type ProvisionParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type ProvisionResult = Promise<string[]>;

export function provision(...args: ProvisionParams): ProvisionResult {
    return callFunction$$(
        args,
        {
    "functionName": "provision",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
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
        provision_script
    );
}

export const read_script = `
(xor
 (new $res
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
            (par
             (par
              (par
               (new $option-inline
                (seq
                 (xor
                  (seq
                   (new %ContentWorkerV1_obj_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj_map)
                         (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %ContentWorkerV1_obj_map)
                        )
                        (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %ContentWorkerV1_obj_map)
                       )
                       (ap ("definition" "bafkreibhm7bech6wttlrjpqdqjfuktyvmezm6cxom24jjmnnzdqaausqaa") %ContentWorkerV1_obj_map)
                      )
                      (ap ("timestamp" "2024-08-11T15:10:57.041Z") %ContentWorkerV1_obj_map)
                     )
                     (canon %init_peer_id% %ContentWorkerV1_obj_map  ContentWorkerV1_obj)
                    )
                   )
                   (ap ContentWorkerV1_obj $option-inline)
                  )
                  (null)
                 )
                 (canon %init_peer_id% $option-inline  #option-inline-0)
                )
               )
               (new $option-inline-1
                (seq
                 (xor
                  (seq
                   (new %RenderWorkerV1_obj_map
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (ap ("chainNetworkId" 31337) %RenderWorkerV1_obj_map)
                         (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %RenderWorkerV1_obj_map)
                        )
                        (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %RenderWorkerV1_obj_map)
                       )
                       (ap ("definition" "bafkreicvhfagg57w5vdze5tje643ipzu3mmp7ckgzj7wcicbx6k6naq6ha") %RenderWorkerV1_obj_map)
                      )
                      (ap ("timestamp" "2024-08-11T15:11:01.293Z") %RenderWorkerV1_obj_map)
                     )
                     (canon %init_peer_id% %RenderWorkerV1_obj_map  RenderWorkerV1_obj)
                    )
                   )
                   (ap RenderWorkerV1_obj $option-inline-1)
                  )
                  (null)
                 )
                 (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                )
               )
              )
              (new $option-inline-2
               (seq
                (xor
                 (seq
                  (new %TaskWorkerV1_obj_map
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (ap ("chainNetworkId" 31337) %TaskWorkerV1_obj_map)
                        (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %TaskWorkerV1_obj_map)
                       )
                       (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %TaskWorkerV1_obj_map)
                      )
                      (ap ("definition" "bafkreiduvjc5nkvrmcz4xg3zc6otg4l5cdjo7gikzp36dmbzpk3z3ypxyy") %TaskWorkerV1_obj_map)
                     )
                     (ap ("timestamp" "2024-08-11T15:10:52.702Z") %TaskWorkerV1_obj_map)
                    )
                    (canon %init_peer_id% %TaskWorkerV1_obj_map  TaskWorkerV1_obj)
                   )
                  )
                  (ap TaskWorkerV1_obj $option-inline-2)
                 )
                 (null)
                )
                (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
               )
              )
             )
             (new $option-inline-3
              (seq
               (xor
                (seq
                 (new %WebHostWorkerV1_obj_map
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (ap ("chainNetworkId" 31337) %WebHostWorkerV1_obj_map)
                       (ap ("dealId" "541dfe503202b78c5d78facd6cdb0a04d4b35634") %WebHostWorkerV1_obj_map)
                      )
                      (ap ("dealIdOriginal" "0x541Dfe503202b78c5d78FaCd6CDB0a04D4b35634") %WebHostWorkerV1_obj_map)
                     )
                     (ap ("definition" "bafkreidai464ybsg2ramp7mv7bjkeaey73wlepfiqaulxn5liastw44yoa") %WebHostWorkerV1_obj_map)
                    )
                    (ap ("timestamp" "2024-08-11T09:29:20.637Z") %WebHostWorkerV1_obj_map)
                   )
                   (canon %init_peer_id% %WebHostWorkerV1_obj_map  WebHostWorkerV1_obj)
                  )
                 )
                 (ap WebHostWorkerV1_obj $option-inline-3)
                )
                (null)
               )
               (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
              )
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (seq
              (seq
               (seq
                (ap ("contentWorkerV1" #option-inline-0) %Deals_obj_map)
                (ap ("renderWorkerV1" #option-inline-1-0) %Deals_obj_map)
               )
               (ap ("taskWorkerV1" #option-inline-2-0) %Deals_obj_map)
              )
              (ap ("webHostWorkerV1" #option-inline-3-0) %Deals_obj_map)
             )
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.webHostWorkerV1 Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
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
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (call %init_peer_id% ("run-console" "print") [#array-inline-0])
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
          (call ret_flat.$.[0].worker_id.[0] ("nPublication" "read") ["0x94cFb1DE6F85b07A1573b626E550113e456D9Ac0" "config" "[]" "https://arb-sepolia.g.alchemy.com/v2/DAfzjixY82ICdLCssh_dTQpoN0I2mthW"] ret-0)
         )
         (ap ret-0 $res)
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
    (canon %init_peer_id% $res  #res_canon)
   )
   (call %init_peer_id% ("callbackSrv" "response") [#res_canon])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type ReadParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type ReadResult = Promise<{ success: boolean; result: string; host_id: string; timestamp: number; result_raw: string; }[]>;

export function read(...args: ReadParams): ReadResult {
    return callFunction$$(
        args,
        {
    "functionName": "read",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "AMResponse",
                        "fields": {
                            "success": {
                                "name": "bool",
                                "tag": "scalar"
                            },
                            "result": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "host_id": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "timestamp": {
                                "name": "i64",
                                "tag": "scalar"
                            },
                            "result_raw": {
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
        read_script
    );
}
