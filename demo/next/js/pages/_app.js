import { krakenConfig } from 'kibrow/esm'
import axios from 'axios'
import _ from 'lodash'

/**
 * @description register all module to global access using kibrow
 */

krakenConfig({
	packages: [
		{
			name: '$axios',
			module: axios
		},
		{
			name: '$_',
			module: _
		}
	]
})

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
