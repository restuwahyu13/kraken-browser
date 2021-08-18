/**
 * Kraken Browser
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */
import { assert } from 'is-any-type'

class KrakenBrowser {
	private configs: any = {}
	private module: any[] = []
	private input: any[] = []
	private moduleStore: any = []
	private inputStore: any = []

	constructor(input: Record<string, any>[], module: Record<string, any>[]) {
		this.input = input
		this.module = module
	}

	registerModule(): any {
		if (this.input.length > 0 && this.module.length > 0 && assert.isArray(this.input) && assert.isArray(this.module)) {
			this.moduleStore = this.injectModule(this.module)

			this.input.forEach((modules) => {
				this.inputStore = this.input.indexOf(modules)
				this.configs[modules] = {
					value: this.moduleStore[this.inputStore],
					writable: true,
					enumerable: true
				}
			})
			if (!assert.isUndefined(globalThis as any)) {
				Object.defineProperties(globalThis as any, this.configs)
			} else {
				Object.defineProperties(global as any, this.configs)
			}
		}
	}

	injectModule(module: any): Record<string, any>[] {
		if (module.length > 0 && assert.isArray(module)) {
			this.moduleStore = module
		}

		return this.moduleStore
	}
}

export function krakenBrowser(options: Record<string, any>): void {
	let module: Record<string, any>[] = []
	let input: Record<string, any>[] = []

	options.packages.forEach((v) => {
		module.push(v.module)
		input.push(v.name)
	})
	new KrakenBrowser(input, module).registerModule()
}
