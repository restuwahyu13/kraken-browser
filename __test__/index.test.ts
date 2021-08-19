import path from 'path'
import { assert } from 'is-any-type'
import { matchFirstProperty, matchPropertyDeep } from '../src/utils/matchProperty'
import { mergeProperty } from '../src/utils/mergeProperty'
import { allConfigValidator, configValidator } from '../src/utils/validatorCheck'

describe('Kraken Node Group Testing', function () {
	it('Should be kraken config first property is valid', function () {
		const kibrow = matchFirstProperty({ packages: [] })

		expect(matchFirstProperty).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeTruthy()
		expect(kibrow).toBeTruthy()
	})

	it('Should be kraken config first property  is not valid', function () {
		const kibrow = matchFirstProperty({ packagesx: {} })

		expect(matchFirstProperty).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeFalsy()
		expect(kibrow).toBeFalsy()
	})

	it('Should be kraken config property is valid', function () {
		const kibrow = matchPropertyDeep([{ name: undefined, module: undefined, inject: undefined }])

		expect(matchPropertyDeep).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeTruthy()
		expect(kibrow).toBeTruthy()
	})

	it('Should be kraken config property is not valid', function () {
		const kibrow = matchPropertyDeep([{ namex: undefined, modulex: undefined, injectx: undefined }])

		expect(matchPropertyDeep).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeFalsy()
		expect(kibrow).toBeFalsy()
	})

	it('Should be merge kraken config property is valid', function () {
		const kibrow = mergeProperty({ packages: [{ name: undefined, module: undefined }] })

		expect(matchPropertyDeep).toBeDefined()
		expect(kibrow).toMatchObject({ packages: [{ name: undefined, module: undefined, inject: true }] })
		expect(kibrow).toStrictEqual({ packages: [{ name: undefined, module: undefined, inject: true }] })
	})

	it('Should be kraken all config file valid', function () {
		const kibrow = allConfigValidator({ packages: [{ name: undefined, module: undefined, inject: true }] })

		expect(allConfigValidator).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeTruthy()
		expect(assert.isPromise(kibrow as any)).toBeFalsy()
	})

	it('Should be kraken all config file not valid', function () {
		const kibrow = allConfigValidator({ packagesx: [{ name: undefined, module: undefined, inject: true }] })

		expect(allConfigValidator).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeFalsy()
		expect(assert.isPromise(kibrow as any)).toBeTruthy()
	})

	it('Should be kraken all config file property valid', function () {
		const kibrow = configValidator({ packages: [{ name: undefined, module: undefined, inject: true }] })

		expect(configValidator).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeTruthy()
		expect(assert.isPromise(kibrow as any)).toBeFalsy()
	})

	it('Should be kraken all config file property not valid', function () {
		const kibrow = configValidator({ packages: [{ namex: undefined, modulex: undefined, injectx: true }] })

		expect(configValidator).toBeDefined()
		expect(assert.isBoolean(kibrow as any)).toBeFalsy()
		expect(assert.isPromise(kibrow as any)).toBeTruthy()
	})

	it('Should be kraken all config file property value valid', function () {
		const kibrow = configValidator({ packages: [{ name: '$path', module: path, inject: true }] })

		expect(assert.isBoolean(kibrow as any)).toBeTruthy()
		expect(assert.isPromise(kibrow as any)).toBeFalsy()
	})
})
