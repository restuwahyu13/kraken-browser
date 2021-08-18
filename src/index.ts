/**
 * Kraken Browser
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import 'regenerator-runtime/runtime.js'
import { assert } from 'is-any-type'
import { configValidator, allConfigValidator } from './utils/validatorCheck'
import { mergeProperty } from './utils/mergeProperty'
import { krakenBrowser } from './lib/index'

interface Options {
	name: string
	module: any
	inject?: boolean
}

export interface KrakenBrowserOptions {
	readonly packages: Options[]
}

/**
 * config to load each given module from kraken config, without the need to rewrite import, then module can also be accessed as a global in every file or route, you haven't to register the same module as you want to use it.
 *
 * @param options - Object
 * @returns void
 */

export function krakenConfig(options: KrakenBrowserOptions): void {
	// let isValidatorCheck: any = validatorCheck(options)

	// if (assert.isBoolean(isValidatorCheck)) {
	let isAllConfigValidator = allConfigValidator(options)

	if (assert.isBoolean(isAllConfigValidator as any)) {
		let isConfigValidator = configValidator(mergeProperty(options))

		if (assert.isBoolean(isConfigValidator as any)) {
			krakenBrowser(mergeProperty(options))
		}
	}
	// }
}
