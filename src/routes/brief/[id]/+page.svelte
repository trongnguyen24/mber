<script>
	// import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import { page } from '$app/stores';
	import { createDialog } from 'svelte-headlessui';
	import Transition from 'svelte-transition';

	let idclub = $page.params.id;

	const fetchdata = (async () => {
		const response = await fetch(
			'http://127.0.0.1:8090/api/collections/brief/records?filter=(club~%277nldrfiragiimw4%27)&sort=-created'
		);
		return await response.json();
	})();
</script>

<div class="flex flex-col items-center h-full w-full">
	<div class="w-full">
		{#await fetchdata}
			<p class="text-center">...waiting</p>
		{:then brief}
			<div class="w-full max-w-4xl mx-auto prose">
				{@html brief.items[0].brief}
			</div>
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	</div>
</div>
