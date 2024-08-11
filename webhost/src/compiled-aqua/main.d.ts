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
export type SubnetParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type SubnetResult = Promise<boolean>;

export type RunParams = [campaignCid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, campaignCid: string, config?: {ttl?: number}];

export type RunResult = Promise<boolean>;

export type NewParams = [cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, cid: string, config?: {ttl?: number}];

export type NewResult = Promise<string>;

