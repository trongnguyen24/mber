import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index3.js";
import { createMenu } from "svelte-headlessui";
import { T as Transition } from "../../chunks/Transition.js";
import "../../chunks/utils.js";
import { a as clubs, c as club2s } from "../../chunks/Store.js";
import { p as page } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $sortmenu, $$unsubscribe_sortmenu;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.url.search);
  clubs.subscribe((dataclub) => {
  });
  club2s.subscribe((dataclub2) => {
  });
  const sortmenu = createMenu({ label: "sortmenu" });
  $$unsubscribe_sortmenu = subscribe(sortmenu, (value) => $sortmenu = value);
  $$unsubscribe_page();
  $$unsubscribe_sortmenu();
  return `${$$result.head += `<!-- HEAD_svelte-xp4l16_START -->${$$result.title = `<title>Mber+®</title>`, ""}<meta name="${"description"}" content="${""}"><!-- HEAD_svelte-xp4l16_END -->`, ""}

<section class="${"container max-w-screen-2xl"}"><div class="${"flex justify-between"}"><h1 class="${"text-2xl font-bold text-gray-700 dark:text-gray-300 flex"}">Mber+® sites url <span class="${"w-4 ml-4 block overflow-hidden"}"><a href="${"club/new"}">+New</a></span></h1>

		<div class="${"relative z-10 inline-block"}"><button type="${"button"}" class="${"inline-flex items-center justify-center font-medium text-gray-500 group hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50"}">Sort
				<svg class="${"stroke-gray-500 group-hover:stroke-gray-700 dark:stroke-gray-300 dark:group-hover:stroke-gray-50"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8.87891 12L12.6289 15.75L16.3789 12"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>

			${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      show: $sortmenu.expanded,
      enter: "transition ease-out duration-150",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-90",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    },
    {},
    {
      default: () => {
        return `<div class="${"absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-gray-200 focus:outline-none dark:ring-gray-700 dark:bg-gray-800"}"><div class="${"py-1"}"><button class="${"flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"}">Newest
						</button>
						<button class="${"flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-slate-100"}">Name A-&gt;Z
						</button></div></div>`;
      }
    }
  )}</div></div>
	<div class="${"relative"}">${``}
		${``}</div></section>`;
});
export {
  Page as default
};
