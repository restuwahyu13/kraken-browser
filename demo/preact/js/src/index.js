import { krakenConfig } from 'kibrow'
import axios from 'axios'
import _ from 'lodash'
import App from './components/app'

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

export default App
