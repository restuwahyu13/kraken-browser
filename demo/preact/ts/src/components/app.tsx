import { FunctionalComponent, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const App: FunctionalComponent = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const res = await self['$axios'].get('https://jsonplaceholder.typicode.com/users')
		setData(res.data)
	}

	return (
		<div>
			<h1>kraken Injection Browser</h1>
			<ul>
				{data.length > 0 &&
					self['$_'].map(data, (val: any, index: number) => (
						<div>
							<li key={index}>
								{val.id}. {val.name}
							</li>
						</div>
					))}
			</ul>
		</div>
	)
}

export default App
