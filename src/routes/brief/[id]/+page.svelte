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
			'https://lazy-traffic.pockethost.io//api/collections/brief/records?filter=(club~%277nldrfiragiimw4%27)&sort=-created'
		);
		return await response.json();
	})();

	// static defaultEditorOptions() {
	//     return {
	//         branding: !1,
	//         promotion: !1,
	//         menubar: !1,
	//         min_height: 270,
	//         height: 270,
	//         max_height: 700,
	//         autoresize_bottom_margin: 30,
	//         skin: "pocketbase",
	//         content_style: "body { font-size: 14px }",
	//         plugins: ["autoresize", "autolink", "lists", "link", "image", "searchreplace", "fullscreen", "media", "table", "code", "codesample"],
	//         toolbar: "undo redo | styles | alignleft aligncenter alignright | bold italic forecolor backcolor | bullist numlist | link image table codesample | code fullscreen",
	//         file_picker_types: "image",
	//         file_picker_callback: (e,t,i)=>{
	//             const s = document.createElement("input");
	//             s.setAttribute("type", "file"),
	//             s.setAttribute("accept", "image/*"),
	//             s.addEventListener("change", l=>{
	//                 const o = l.target.files[0]
	//                   , r = new FileReader;
	//                 r.addEventListener("load", ()=>{
	//                     if (!tinymce)
	//                         return;
	//                     const a = "blobid" + new Date().getTime()
	//                       , u = tinymce.activeEditor.editorUpload.blobCache
	//                       , f = r.result.split(",")[1]
	//                       , c = u.create(a, o, f);
	//                     u.add(c),
	//                     e(c.blobUri(), {
	//                         title: o.name
	//                     })
	//                 }
	//                 ),
	//                 r.readAsDataURL(o)
	//             }
	//             ),
	//             s.click()
	//         }
	//     }
	// }
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
