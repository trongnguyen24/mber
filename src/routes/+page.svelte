<script lang="ts">
	import { createMenu } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import { scale } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { Cardclub } from '$lib/components';
	import { clubs, club2s } from '$lib/Store.js';

	let clubscache;
	let clubscache2;
	let sortname;

	clubs.subscribe((dataclub) => {
		clubscache = dataclub;
	});

	club2s.subscribe((dataclub2) => {
		clubscache2 = dataclub2;
	});

	function setnew() {
		localStorage.setItem('sortname', '0');
		sortname = 0;
	}
	function setname() {
		localStorage.setItem('sortname', '1');
		sortname = 1;
	}

	const sortmenu = createMenu({ label: 'sortmenu' });
	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}

	// const searchProducts = clubscache.map((clubscache) => ({
	// 	...clubscache,
	// 	searchTerms: `${clubscache.name} ${clubscache.shortname}`
	// }));

	// function filterItems(arr, query) {
	// 	return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
	// }

	// const filterItems2 = searchProducts.filter((el, query) =>
	// 	el.toLowerCase().includes(query.toLowerCase())
	// );

	// console.log(filterItems(searchProducts, 'cc'));

	// console.log(filterItems(searchProducts, 'cc'));

	if (browser) {
		if (localStorage.sortname == 1) {
			setname();
		} else {
			setnew();
		}
	}
</script>

<svelte:head>
	<title>Mber+®</title>
	<meta name="description" content="" />
</svelte:head>

<section class="container max-w-screen-2xl">
	<div class="flex justify-between">
		<h1 class="text-2xl font-bold text-gray-700 dark:text-gray-300">Mber+® sites url</h1>
		<!-- <div>
			<input class="p-2" type="search" placeholder="Search..." />
		</div> -->

		<div class="relative z-10 inline-block">
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
					class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-200 focus:outline-none dark:ring-gray-700 dark:bg-gray-800"
				>
					<div class="py-1">
						<button
							use:sortmenu.item
							on:click={setnew}
							class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"
						>
							Newest
						</button>
						<button
							use:sortmenu.item
							on:click={setname}
							class="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"
						>
							Name A->Z
						</button>
					</div>
				</div>
			</Transition>
		</div>
	</div>
	<div class="relative">
		{#if sortname === 0}
			<main
				in:scale={{ duration: 700, delay: 200, opacity: 0, start: 0.97 }}
				out:scale={{ duration: 250, delay: 0, opacity: 0, start: 1.01 }}
				class="grid absolute w-full gap-10 my-11 grid-cols-[repeat(auto-fit,minmax(280px,_1fr))]"
			>
				{#each clubscache as club}
					<Cardclub {club} />
				{/each}
			</main>
		{/if}
		{#if sortname === 1}
			<main
				in:scale={{ duration: 700, delay: 200, opacity: 0, start: 0.97 }}
				out:scale={{ duration: 250, delay: 0, opacity: 0, start: 1.01 }}
				class="grid absolute w-full gap-10 my-11 grid-cols-[repeat(auto-fit,minmax(280px,_1fr))]"
			>
				{#each clubscache2 as club}
					<Cardclub {club} />
				{/each}
			</main>
		{/if}
	</div>
</section>
