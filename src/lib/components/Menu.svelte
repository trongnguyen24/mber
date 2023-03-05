<script>
	import { page } from '$app/stores';
</script>

<ul class="flex flex-col gap-6 lg:flex-row">
	<li
		aria-current={$page.url.pathname === '/' ? 'true' : undefined}
		class="font-semibold text-gray-600 dark:text-gray-200 aria-current:text-lime-500 hover:text-lime-500 dark:aria-current:text-mber"
	>
		<a class="block" href="/">Sites</a>
	</li>
	<li
		aria-current={$page.url.pathname === '/documents' ? 'true' : undefined}
		class="font-semibold text-gray-600 dark:text-gray-200 aria-current:text-lime-500 hover:text-lime-500 dark:aria-current:text-mber"
	>
		<a class="block" href="/documents">Documents</a>
	</li>
</ul>
