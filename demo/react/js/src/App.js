import React, { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const res = await self.$axios.get('https://jsonplaceholder.typicode.com/users')
		setData(res.data)
	}

	return (
		<div>
			<h1>kraken Injection Browser</h1>
			<ul>
				{data.length > 0 &&
					self.$_.map(data, (val, index) => (
						<>
							<li key={index}>
								{val.id}. {val.name}
							</li>
						</>
					))}
			</ul>
		</div>
	)
}

export default App
