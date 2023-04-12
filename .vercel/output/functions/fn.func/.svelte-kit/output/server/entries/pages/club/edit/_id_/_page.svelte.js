import { c as create_ssr_component, a as subscribe, i as is_promise, n as noop, d as escape, b as add_attribute, v as validate_component } from "../../../../../chunks/index3.js";
import { g as getImageURL } from "../../../../../chunks/utils.js";
import { I as Input } from "../../../../../chunks/input.js";
import { p as page } from "../../../../../chunks/stores.js";
import { createDialog } from "svelte-headlessui";
import { T as Transition } from "../../../../../chunks/Transition.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $dialogdel, $$unsubscribe_dialogdel;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const dialogdel = createDialog({ label: "Del" });
  $$unsubscribe_dialogdel = subscribe(dialogdel, (value) => $dialogdel = value);
  let idclub = $page.params.id;
  const fetchdata = (async () => {
    const response = await fetch("https://lazy-traffic.pockethost.io//api/collections/club/records/" + idclub);
    return await response.json();
  })();
  $$unsubscribe_page();
  $$unsubscribe_dialogdel();
  return `<div class="${"flex flex-col items-center h-full w-full"}"><div class="${"w-full"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			<p class="${"text-center"}">...waiting</p>
		`;
    }
    return function(club) {
      return `
			<form action="${"?/updateProject"}" method="${"POST"}" class="${"w-full max-w-sm mx-auto"}" enctype="${"multipart/form-data"}"><h2 class="${"mb-12 text-center text-2xl font-bold text-slate-800 dark:text-slate-50"}">Edit ${escape(club.name)}</h2>
				${club.thumbnail ? `<label for="${"thumbnail"}" class="${"avatar w-20 hover:cursor-pointer"}"><label for="${"thumbnail"}" class="${"absolute -top-1.5 -right-1.5 hover:cursor-pointer"}"></label>
						<div class="${"w-20 mx-auto"}"><img id="${"img-preview"}"${add_attribute("src", getImageURL(club.collectionId, club.id, club.thumbnail, "80x80"), 0)} alt="${"project thumbnail"}"></div></label>` : ``}
				<div class="${"form-control w-full max-w-lg"}"><label for="${"thumbnail"}" class="${"block text-sm mb-2 font-semibold leading-6 text-gray-700 dark:text-slate-200"}"><span class="${""}">Thumbnail</span></label>
					<input type="${"file"}" name="${"thumbnail"}" id="${"thumbnail"}" class="${"block w-full text-sm text-slate-600 dark:text-slate-400 mb-4 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-600 dark:file:bg-gray-700 hover:file:bg-sky-200 dark:file:hover:bg-gray-600"}"></div>
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "name",
          label: "Club name",
          value: club.name ?? ""
        },
        {},
        {}
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "shortname",
          label: "Short name",
          value: club.shortname ?? ""
        },
        {},
        {}
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "dev",
          label: "Dev",
          value: club.dev ?? ""
        },
        {},
        {}
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "test",
          label: "Test",
          value: club.test ?? ""
        },
        {},
        {}
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "uat",
          label: "UAT",
          value: club.uat ?? ""
        },
        {},
        {}
      )}
				${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "live",
          label: "Live",
          value: club.live ?? ""
        },
        {},
        {}
      )}

				<div class="${"w-full flex max-w-lg gap-6 pt-6"}"><button type="${"button"}" class="${"inline-flex w-12 justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-red-500 text-white hover:bg-red-400 dark:bg-red-600 dark:border dark:border-red-500 dark:hover:bg-red-500 transition-colors duration-150"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 stroke-white dark:stroke-white"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}"></path></svg></button>
					<button type="${"submit"}" class="${"inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full dark:bg-lime-600 dark:border dark:border-lime-500 dark:hover:bg-lime-500 transition-colors duration-150"}">Update Project</button></div></form>
		`;
    }(__value);
  }(fetchdata)}</div></div>

<div class="${"relative z-60"}">${validate_component(Transition, "Transition").$$render($$result, { show: $dialogdel.expanded }, {}, {
    default: () => {
      return `${validate_component(Transition, "Transition").$$render(
        $$result,
        {
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        },
        {},
        {
          default: () => {
            return `
			<div class="${"fixed inset-0 bg-opacity-60 bg-zinc-50 backdrop-blur-sm"}"></div>`;
          }
        }
      )}

		<div class="${"fixed inset-0 overflow-y-auto"}"><div class="${"flex items-center justify-center min-h-full p-4 text-center"}">${validate_component(Transition, "Transition").$$render(
        $$result,
        {
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95"
        },
        {},
        {
          default: () => {
            return `<div class="${"w-full flex flex-col gap-8 p-12 max-w-xl overflow-hidden align-middle transition-all transform border-t rounded-lg shadow-xl text-slate-600 dark:text-slate-300 bg-slate-50 border-t-white dark:border-t-gray-700 dark:bg-gray-800"}"><div class="${"flex flex-col"}">Are you sure you want to delete this project?</div>
						<div class="${"flex gap-6"}"><button type="${"button"}" class="${"rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-50 hover:bg-white w-full dark:bg-slate-800 border dark:border-slate-700 dark:hover:bg-slate-700 transition-colors duration-150"}">Close
							</button>
							<form class="${"w-full"}" action="${"?/deleteProject"}" method="${"POST"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", idclub, 0)}>
								<button type="${"submit"}" class="${"rounded-lg text-sm font-semibold text-white py-2.5 px-4 bg-red-500 hover:bg-red-400 w-full dark:bg-red-500 border dark:border-red-400 dark:hover:bg-red-400 transition-colors duration-150"}">Delete</button></form></div></div>`;
          }
        }
      )}</div></div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
