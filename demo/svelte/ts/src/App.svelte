<script>
	import { onMount } from 'svelte'

	let users = []

	onMount(async () => {
		const res = await self.$axios.get('https://jsonplaceholder.typicode.com/users')
		users = res.data
	})
</script>

<main>
	<h1>kraken Injection Browser</h1>
	<ul>
		{#each users as data}
			<li>
				{data.id}.{data.name}
			</li>
		{/each}
	</ul>
</main>
