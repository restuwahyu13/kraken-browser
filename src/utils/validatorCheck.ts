/**
 * Kraken Browser
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'
import { matchProperty, matchPropertyDeep, matchFirstProperty } from './matchProperty'

export const validatorCheck = (options: Record<string, any>): boolean | Promise<Error> => {
	let inOption: boolean | undefined = matchProperty(options)

	if (assert.isUndefined(inOption as any)) {
		return Promise.reject(new Error('options property not exist'))
	} else {
		return true
	}
}

export const configValidator = (config: Record<string, any>): boolean | Promise<Error> => {
	const inConfig: boolean | undefined = matchPropertyDeep(config.packages)

	if (assert.isUndefined(inConfig as any)) {
		return Promise.reject(new Error('kraken config property not exist'))
	} else {
		config.packages.forEach((v) => {
			const patternName = /^[$]+[_a-zA-Z.-]+$/gi
			const patternInject = /(true|false)/gi

			if (patternName.test(v.name) !== true) {
				return Promise.reject(new Error('kraken config name must be string and before string include $'))
			} else if (!assert.isFunction(v.module)) {
				return Promise.reject(new Error('kraken config module must be function'))
			} else if (patternInject.test(v.inject) !== true && !assert.isBoolean(v.inject)) {
				return Promise.reject(new Error('kraken config inject must be boolean'))
			}
		})
	}
	return true
}

export const allConfigValidator = (config: Record<string, any>): boolean | Promise<Error> => {
	const inAllConfig: boolean | undefined = matchFirstProperty(config)
	if (assert.isUndefined(inAllConfig as any)) {
		return Promise.reject(new Error('kraken config format not valid'))
	}
	return true
}
