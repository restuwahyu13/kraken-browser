import { krakenConfig } from 'kibrow'
import axios from 'axios'
import App from './App.svelte'

/**
 * @description register all module to global access using kibrow
 */

krakenConfig({
	packages: [
		{
			name: '$axios',
			module: axios
		}
	]
})

/**
 * @description render app content into html here
 */

const app = new App({
	target: document.body
})

export default app
