import React from 'react'
import ReactDOM from 'react-dom'
import { krakenConfig } from 'kibrow'
import axios from 'axios'
import _ from 'lodash'

import App from './App'

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

/**
 * @description render content to html
 */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
