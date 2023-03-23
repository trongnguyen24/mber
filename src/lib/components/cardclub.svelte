<script>
	import { getImageURL } from '$lib/utils';
	export let club;
</script>

<article
	class=" bg-[#F6FAFE] overflow-hidden border-l border-t border-white rounded-2xl shadow-3xl dark:bg-[#1D1D23] dark:border-gray-800"
>
	<div class="flex items-center justify-center bg-white h-28 dark:bg-gray-800">
		<picture class="w-16 h-16">
			<img
				src={club?.thumbnail
					? getImageURL(club.collectionId, club.id, club.thumbnail, '100x100')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${club.name}`}
				alt="club thumbnail"
				loading="lazy"
				width="64"
				height="64"
			/>
		</picture>
	</div>
	<div class="flex flex-col gap-4 p-6 border-t border-slate-100 dark:border-gray-900">
		<h2 class="text-lg font-semibold text-center text-slate-600 dark:text-slate-100">
			{club.name}
		</h2>
		<div class="flex flex-col gap-2">
			<a rel="noreferrer" target="_blank" href="https://{club.dev}/page">
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-sky-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Dev</div>

					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.dev}
					</div>
				</div>
			</a>
			<a rel="noreferrer" target="_blank" href="https://{club.test}/page">
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x divide-purple-500 rounded font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Test</div>
					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.test}
					</div>
				</div>
			</a>
			<a rel="noreferrer" target="_blank" href="https://{club.uat}/page">
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-emerald-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Uat</div>
					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.uat}
					</div>
				</div>
			</a>
			<a rel="noreferrer" target="_blank" href="https://{club.live}/page">
				<div
					class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-lime-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
				>
					<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100 select-none">Live</div>
					<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
						{club.live}
					</div>
				</div>
			</a>
		</div>
	</div>
</article>
