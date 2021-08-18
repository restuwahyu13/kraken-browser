/**
 * Kraken Browser
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { assert } from 'is-any-type'

export const matchProperty = (compare: Record<string, any>): boolean | undefined => {
	const defaultProperty = { name: undefined, module: undefined, inject: undefined }
	const compareIn = Object.keys(compare)
	const newInData = compareIn.map((v) => v in defaultProperty)

	return newInData.includes(false) ? undefined : true
}

export const matchPropertyDeep = (compare: Record<string, any>): boolean | undefined => {
	const compareIn: string[] = Object.values(compare)
	const defaultProperty: Record<string, any> = []

	for (let i = 1; i <= compareIn.length; i++) {
		defaultProperty.push({ name: undefined, module: undefined, inject: undefined })
	}

	const keysStore: Record<string, any> = compareIn.map((v) => Object.keys(v)).flat(Infinity)
	const newInData: boolean[] = defaultProperty
		.map((v) => Object.keys(v))
		.flat(Infinity)
		.map((v, i) => v === keysStore[i])

	return newInData.includes(false) ? undefined : true
}

export const matchFirstProperty = (compare: Record<string, any>): boolean | undefined => {
	const isKeys = Object.keys(compare).includes('packages')
	const isValue = assert.isArray(Object.values(compare)[0]) ? true : false
	const isMatch = Object.keys(Object.values(compare)[0])

	return isKeys && isValue && isMatch.length > 0 ? true : undefined
}
