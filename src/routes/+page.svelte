<script lang="ts">
	import { createMenu } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import { Cardclub } from '$lib/components';
	import clubs from '$lib/Store.js';

	let clubscache;
	clubs.subscribe((data) => {
		clubscache = data;
	});

	const sortmenu = createMenu({ label: 'sortmenu' });
	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}
	const groups = [[{ text: `Newest` }, { text: `Name A->Z` }]];
</script>

<svelte:head>
	<title>Mber+®</title>
	<meta name="description" content="" />
</svelte:head>

<section class="container max-w-screen-2xl pt-28">
	<div class="flex justify-between">
		<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-300">Mber+® sites url</h1>
		<div class="relative inline-block">
			<button
				use:sortmenu.button
				on:select={onSelect}
				type="button"
				class="inline-flex items-center justify-center font-medium text-gray-500 group hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50"
			>
				Sort
				<svg
					class=" stroke-gray-500 group-hover:stroke-gray-700 dark:stroke-gray-300 dark:group-hover:stroke-gray-50"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.87891 12L12.6289 15.75L16.3789 12"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>

			<Transition
				show={$sortmenu.expanded}
				enter="transition ease-out duration-150"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-90"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<div
					use:sortmenu.items
					class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-200 focus:outline-none"
				>
					<div class="py-1 divide-y divide-gray-100">
						{#each groups as group}
							<div class="py-1">
								{#each group as option}
									{@const active = $sortmenu.active === option.text}
									<button
										use:sortmenu.item
										class="group flex items-center w-full px-4 py-2 text-sm text-gray-700 {active
											? 'bg-gray-100'
											: ''}"
									>
										{option.text}
									</button>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</Transition>
		</div>
	</div>
	<main class="grid grid-cols-4 gap-10 mt-11">
		{#each clubscache.items as club}
			<Cardclub {club} />
		{/each}
	</main>
</section>
