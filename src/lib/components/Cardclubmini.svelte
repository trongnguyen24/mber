<script>
	import { getImageURL } from '$lib/utils';
	export let club;
</script>

<article
	class=" bg-[#F6FAFE] group overflow-hidden border-l border-t relative border-white rounded-2xl shadow-3xl dark:bg-[#1D1D23] dark:border-gray-800"
>
	<a class="hidden w-6 h-6 absolute right-2 top-2 group-hover:block" href="club/edit/{club.id}"
		><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 6.75C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6C12.75 6.19891 12.671 6.38968 12.5303 6.53033C12.3897 6.67098 12.1989 6.75 12 6.75ZM12 12.75C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75ZM12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671 17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z"
				stroke="#94A3B8"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</a>
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
