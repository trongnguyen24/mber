<script>
	// import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import { page } from '$app/stores';
	let idclub = $page.params.id;

	const fetchdata = (async () => {
		const response = await fetch('http://127.0.0.1:8090/api/collections/club/records/' + idclub);
		return await response.json();
	})();

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;
		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('img-preview');
			preview.src = src;
		}
	};
</script>

<div class="flex flex-col items-center h-full w-full">
	<div class="w-full">
		{#await fetchdata}
			<p class="text-center">...waiting</p>
		{:then club}
			<form
				action="?/updateProject"
				method="POST"
				class="w-full max-w-sm mx-auto"
				enctype="multipart/form-data"
			>
				<h2 class="mb-12 text-center text-2xl font-bold text-slate-800 dark:text-slate-50">
					Edit {club.name}
				</h2>
				{#if club.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -top-1.5 -right-1.5 hover:cursor-pointer" />
						<div class="w-20 mx-auto">
							<img
								id="img-preview"
								src={getImageURL(club.collectionId, club.id, club.thumbnail, '80x80')}
								alt="project thumbnail"
							/>
						</div>
					</label>
				{/if}
				<div class="form-control w-full max-w-lg">
					<label
						for="thumbnail"
						class="block text-sm mb-2 font-semibold leading-6 text-gray-700 dark:text-slate-200"
					>
						<span class="">Thumbnail</span>
					</label>
					<input
						type="file"
						name="thumbnail"
						id="thumbnail"
						on:change={showPreview}
						class="block w-full text-sm text-slate-600 dark:text-slate-400 mb-4
					file:mr-4 file:py-2 file:px-4
					file:rounded file:border-0
					file:text-sm file:font-semibold
					file:bg-sky-100 file:text-sky-600 dark:file:bg-gray-700
					hover:file:bg-sky-200 dark:file:hover:bg-gray-600"
					/>
				</div>
				<Input id="name" label="Club name" value={club.name ?? ''} />
				<Input id="shortname" label="Short name" value={club.shortname ?? ''} />
				<Input id="dev" label="Dev" value={club.dev ?? ''} />
				<Input id="test" label="Test" value={club.test ?? ''} />
				<Input id="uat" label="UAT" value={club.uat ?? ''} />
				<Input id="live" label="Live" value={club.live ?? ''} />

				<div class="w-full max-w-lg pt-6">
					<button
						type="submit"
						class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full dark:bg-lime-600 dark:border dark:border-lime-500 dark:hover:bg-lime-500 transition-colors duration-150"
						>Update Project</button
					>
				</div>
			</form>
		{:catch error}
			<p>An error occurred!</p>
		{/await}
	</div>
</div>
