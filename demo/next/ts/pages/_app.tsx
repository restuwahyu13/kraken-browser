import type { AppProps } from 'next/app'
import { krakenConfig } from 'kibrow/ssr'
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


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
