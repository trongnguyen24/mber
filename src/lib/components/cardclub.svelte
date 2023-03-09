<script>
	export let name;
	export let img;
	export let dev;
	export let test;
	export let uat;
	export let live;
</script>

<article
	class=" bg-[#F6FAFE] overflow-hidden border-l border-t border-white rounded-2xl shadow-3xl dark:bg-[#1D1D23] dark:border-gray-800"
>
	<div class="flex items-center justify-center bg-white h-28 dark:bg-gray-800">
		<picture class="w-16 h-16">
			<img src={img} alt="Welcome" />
		</picture>
	</div>
	<div class="flex flex-col gap-4 p-6 border-t border-slate-100 dark:border-gray-900">
		<h2 class="text-lg font-semibold text-center text-slate-600 dark:text-slate-100">
			{name}
		</h2>
		<div class="flex flex-col gap-2">
			<div
				class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-sky-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
			>
				<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100">Dev</div>
				<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
					{dev}
				</div>
			</div>
			<div
				class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x divide-purple-500 rounded font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
			>
				<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100">Test</div>
				<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
					{test}
				</div>
			</div>
			<div
				class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-emerald-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
			>
				<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100">Uat</div>
				<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
					{uat}
				</div>
			</div>
			<div
				class="flex items-center h-6 overflow-hidden text-xs transition-all border divide-x rounded divide-lime-500 font-code border-slate-200 dark:hover:border-slate-600 hover:border-slate-400 dark:border-gray-800"
			>
				<div class="w-10 pl-2 text-slate-700 shrink-0 dark:text-slate-100">Live</div>
				<div class="h-6 max-w-full pl-2 leading-6 whitespace-nowrap text-slate-400">
					{live}
				</div>
			</div>
		</div>
	</div>
</article>
