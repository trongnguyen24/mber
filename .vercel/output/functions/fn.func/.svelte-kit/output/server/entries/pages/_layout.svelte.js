import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/index3.js";
import { p as page } from "../../chunks/stores.js";
import { g as getImageURL } from "../../chunks/utils.js";
import { T as Transition } from "../../chunks/Transition.js";
import { createDialog } from "svelte-headlessui";
import { c as club2s } from "../../chunks/Store.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let menu = [{ title: "Sites", link: "/" }, { title: "Docs", link: "/documents" }];
  $$unsubscribe_page();
  return `<ul class="${"flex flex-col gap-6 lg:flex-row"}">${each(menu, (menulink) => {
    return `<li${add_attribute(
      "aria-current",
      $page.url.pathname === menulink.link ? "true" : void 0,
      0
    )} class="${"font-semibold text-gray-600 transition-colors duration-200 dark:text-gray-200 aria-current:text-lime-500 hover:text-lime-500 dark:aria-current:text-mber"}"><a class="${"block"}"${add_attribute("href", menulink.link, 0)}>${escape(menulink.title)}</a>
		</li>`;
  })}</ul>`;
});
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = { dark: true } } = $$props;
  let { show = true } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `<div class="${"relative w-6 h-6"}">${theme.dark ? `${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      show,
      appear: true,
      enter: "duration-[400ms]",
      enterFrom: "opacity-0 rotate-[-240deg] scale-50",
      enterTo: "opacity-100 rotate-0 scale-100",
      leave: "duration-200 transition ease-in-out",
      leaveFrom: "opacity-100 rotate-0 scale-100",
      leaveTo: "opacity-0 rotate-[120deg] scale-95"
    },
    {},
    {
      default: () => {
        return `<button class="${"absolute"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M21.752 15.002C20.5633 15.4975 19.2879 15.7517 18 15.75C12.615 15.75 8.25 11.385 8.25 5.99999C8.25 4.66999 8.516 3.40299 8.998 2.24799C7.22147 2.9891 5.70397 4.23934 4.63663 5.84124C3.56928 7.44314 2.99984 9.32507 3 11.25C3 16.635 7.365 21 12.75 21C14.6749 21.0002 16.5568 20.4307 18.1587 19.3634C19.7606 18.296 21.0109 16.7785 21.752 15.002Z"}" stroke="${"#84CC16"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M18 9.75L18.259 8.715C18.4073 8.12147 18.7142 7.57941 19.1468 7.14681C19.5794 6.71421 20.1215 6.40733 20.715 6.259L21.75 6L20.715 5.741C20.1215 5.59267 19.5794 5.28579 19.1468 4.85319C18.7142 4.42059 18.4073 3.87854 18.259 3.285L18 2.25L17.741 3.285C17.5927 3.87841 17.286 4.42038 16.8536 4.85297C16.4212 5.28556 15.8794 5.59251 15.286 5.741L14.25 6L15.286 6.259C15.8794 6.40749 16.4212 6.71444 16.8536 7.14703C17.286 7.57962 17.5927 8.12159 17.741 8.715L18 9.75Z"}" stroke="${"#A3E635"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
      }
    }
  )}` : `${validate_component(Transition, "Transition").$$render(
    $$result,
    {
      show,
      appear: true,
      enter: "duration-[400ms]",
      enterFrom: "opacity-0 rotate-[-120deg] scale-50",
      enterTo: "opacity-100 rotate-0 scale-100",
      leave: "duration-200 transition ease-in-out",
      leaveFrom: "opacity-100 rotate-0 scale-100",
      leaveTo: "opacity-0  rotate-[120deg] scale-95"
    },
    {},
    {
      default: () => {
        return `<button class="${"absolute"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12Z"}" stroke="${"#FACC15"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>`;
      }
    }
  )}`}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dialogmenu, $$unsubscribe_dialogmenu;
  let $dialogsearch, $$unsubscribe_dialogsearch;
  let datasearch;
  let searchTerm = "";
  let filteredBooks = [];
  club2s.subscribe((dataclub) => {
    datasearch = dataclub;
  });
  const searchProducts = datasearch.map((datasearch2) => ({
    ...datasearch2,
    searchTerms: `${datasearch2.name} ${datasearch2.shortname}`
  }));
  const searchBooks = () => {
    return filteredBooks = searchProducts.filter((searchProducts2) => {
      let datasearchTitle = searchProducts2.searchTerms.toLowerCase();
      return datasearchTitle.includes(searchTerm.toLowerCase());
    });
  };
  searchBooks();
  const dialogmenu = createDialog({ label: "Menu" });
  $$unsubscribe_dialogmenu = subscribe(dialogmenu, (value) => $dialogmenu = value);
  const dialogsearch = createDialog({ label: "Search" });
  $$unsubscribe_dialogsearch = subscribe(dialogsearch, (value) => $dialogsearch = value);
  $$unsubscribe_dialogmenu();
  $$unsubscribe_dialogsearch();
  return `
<header class="${"relative z-20"}"><nav class="${"fixed w-full transition-colors duration-300 " + escape(
    "backdrop-blur-none border-b bg-white/30 border-b-slate-500/10 dark:bg-zinc-900/20",
    true
  )}">
		<div class="${"w-full flex px-6 h-[3.75rem] justify-between items-center lg:hidden"}"><button class="${"block "}"><svg class="${"stroke-slate-400 dark:stroke-slate-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button>

			<div class="${"order-2"}"><svg width="${"50"}" height="${"28"}" viewBox="${"0 0 50 28"}" class="${"fill-lime-500 dark:fill-mber"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M46.7379 5.95014C46.4408 5.78005 46.1932 5.53405 46.0201 5.23687C45.8476 4.93834 45.7567 4.59896 45.7567 4.2534C45.7567 3.90784 45.8476 3.56846 46.0201 3.26993C46.1933 2.9729 46.4408 2.72707 46.7379 2.55715C47.0437 2.38426 47.3883 2.29346 47.7387 2.29346C48.0892 2.29346 48.4338 2.38426 48.7395 2.55715C49.0368 2.72712 49.2844 2.97292 49.4578 3.26993C49.6305 3.5684 49.7215 3.9078 49.7215 4.2534C49.7215 4.59901 49.6305 4.9384 49.4578 5.23687C49.2839 5.53443 49.0353 5.78046 48.7371 5.95014C48.4315 6.12277 48.0872 6.21342 47.737 6.21342C47.3868 6.21342 47.0425 6.12277 46.737 5.95014H46.7379ZM48.5863 5.7249C48.84 5.58043 49.0508 5.37015 49.1968 5.11585C49.344 4.85194 49.4213 4.55424 49.4213 4.25143C49.4213 3.94861 49.344 3.65091 49.1968 3.387C49.0515 3.13214 48.8405 2.9217 48.5863 2.77795C48.3271 2.63298 48.0356 2.55691 47.7392 2.55691C47.4428 2.55691 47.1514 2.63298 46.8922 2.77795C46.6376 2.92182 46.4262 3.13221 46.2801 3.387C46.1324 3.65071 46.0547 3.94849 46.0547 4.25143C46.0547 4.55436 46.1324 4.85214 46.2801 5.11585C46.4266 5.3698 46.638 5.57944 46.8922 5.72293C47.1512 5.86848 47.4427 5.94488 47.7392 5.94488C48.0357 5.94488 48.3273 5.86848 48.5863 5.72293V5.7249ZM47.8861 3.11779C48.0108 3.11647 48.1335 3.14834 48.2421 3.21016C48.3492 3.27058 48.4384 3.35894 48.5001 3.46599C48.5619 3.57304 48.594 3.69486 48.5931 3.81871C48.595 3.9552 48.5557 4.08905 48.4805 4.20252C48.4085 4.3135 48.3047 4.39967 48.1828 4.4495L48.6348 5.36333H48.3287L47.913 4.51075C47.8782 4.51437 47.8433 4.51586 47.8083 4.5152H47.2961V5.36333H47.0067V3.11878L47.8861 3.11779ZM48.0893 4.21832C48.1562 4.17756 48.2111 4.1196 48.2484 4.05038C48.2873 3.9793 48.3073 3.89936 48.3067 3.81822C48.3069 3.73802 48.2864 3.65917 48.247 3.58952C48.2088 3.51981 48.1535 3.46114 48.0864 3.41911C48.02 3.37686 47.943 3.35474 47.8646 3.35539H47.2961V4.27958H47.867C47.9453 4.28029 48.0222 4.25907 48.0893 4.21832Z"}"></path><path d="${"M23.6382 8.61814V6.4635H21.5029V8.61814H19.3672V10.7728H21.5029V12.9284H23.6382V10.7738H25.7739V8.61914L23.6382 8.61814Z"}"></path><path d="${"M17.2303 10.7727V8.61804H15.0946V10.7727H12.9594V12.9293H15.0946V15.0839H17.2303V12.9293H19.3656V10.7747L17.2303 10.7727Z"}"></path><path d="${"M17.2303 2.15464V0H15.0946V2.15464H12.9594V4.30929H15.0946V6.46393H17.2303V4.30929H19.3656V2.15464H17.2303Z"}"></path><path d="${"M10.6101 13.1422V11.4188H8.9013V13.1422H7.19299V14.8657H8.9013V16.5891H10.6101V14.8657H12.3184V13.1422H10.6101Z"}"></path><path d="${"M8.47446 6.67923V4.95532H6.76617V6.67873H5.05737V8.40216H6.76617V10.1256H8.47446V8.40216H10.1832V6.67923H8.47446Z"}"></path><path d="${"M19.3657 17.2356V15.0809H17.2305V17.2356H15.0947V19.3902H17.2305V21.5449H19.3657V19.3902H21.5014V17.2356H19.3657Z"}"></path><path d="${"M21.5008 4.3092H19.3656V6.46385H21.5008V4.3092Z"}"></path><path d="${"M23.6367 2.15515H21.501V4.3098H23.6367V2.15515Z"}"></path><path d="${"M23.6367 15.0809H21.501V17.2356H23.6367V15.0809Z"}"></path><path d="${"M6.03163 11.2982V10.1952H4.94025V11.2982H3.84692V12.4012H4.94025V13.5042H6.03358V12.4012H7.12692V11.2982H6.03163Z"}"></path><path d="${"M2.18666 9.14354V8.04053H1.09333V9.14354H0V10.2465H1.09333V11.3496H2.18666V10.2465H3.27999V9.14354H2.18666Z"}"></path><path d="${"M25.7729 8.61762H23.6372V6.46298H21.501V4.69659L11.072 18.1392C10.7362 18.5708 10.5158 19.0822 10.4319 19.6243C10.3481 20.1664 10.4035 20.7212 10.593 21.2355C10.7824 21.7499 11.0995 22.2065 11.5139 22.5619C11.9284 22.9172 12.4263 23.1593 12.96 23.265V21.544H10.8242V19.3894H12.96V17.2352H15.0952V19.3894H17.2309V20.6183L19.8553 17.2352H19.3657V15.0806H17.2305V12.9259H19.3657V10.7713H21.501V12.9259H23.1975L23.6382 12.3604V10.7718H25.7739L25.7729 8.61762ZM21.501 15.1137L21.5259 15.0811H21.501V15.1137ZM23.6362 2.67531C23.0327 2.97266 22.5039 3.40417 22.0895 3.93738L21.8016 4.30883H23.6357L23.6362 2.67531ZM27.9077 10.7723H30.0361V7.46571V6.70256C30.0373 5.5445 29.5938 4.43099 28.7987 3.5958C28.0035 2.76061 26.9185 2.2687 25.7715 2.22335V4.30933H27.9067V6.46348H25.7715V8.61812H27.9067L27.9077 10.7723ZM30.0361 16.886V12.9264H27.9077V15.0806H25.7724V12.9264H23.6724V20.4618C23.6719 21.1307 23.8787 21.7831 24.2639 22.3276C24.649 22.8721 25.1933 23.2815 25.8205 23.4985C26.4477 23.7156 27.1264 23.7294 27.7618 23.538C28.3971 23.3466 28.9573 22.9596 29.3638 22.4312C29.4728 22.327 29.5744 22.2152 29.6679 22.0968L31.8908 19.2318C31.3643 19.1101 30.8943 18.8119 30.5576 18.3859C30.2208 17.96 30.0371 17.4314 30.0366 16.8865L30.0361 16.886ZM15.0947 22.9404C15.4785 22.7311 15.8152 22.444 16.0838 22.0972L16.5127 21.5445H15.0928L15.0947 22.9404ZM42.8074 10.2625C42.2865 9.85308 41.6258 9.66912 40.9705 9.7511C40.3152 9.83308 39.719 10.1743 39.313 10.6997L37.2566 13.3522V20.4622C37.2566 21.3138 37.5919 22.1304 38.1887 22.7326C38.7856 23.3347 39.5951 23.673 40.4391 23.673C41.2832 23.673 42.0927 23.3347 42.6895 22.7326C43.2864 22.1304 43.6217 21.3138 43.6217 20.4622V11.4065C43.4654 10.9535 43.1826 10.5557 42.8074 10.261V10.2625ZM40.6252 2.46193C39.7505 2.15716 38.8033 2.13547 37.9158 2.39988C37.0283 2.6643 36.2448 3.20162 35.6746 3.93689L30.7015 10.3475V17.1147C30.7015 17.5401 30.8133 17.9578 31.0255 18.3254C31.2377 18.6929 31.5427 18.9972 31.9094 19.2071L35.512 14.5639L35.5081 14.5609L38.9316 10.1296C39.228 9.74574 39.6201 9.44818 40.068 9.26738C40.5158 9.08658 41.0032 9.02902 41.4802 9.10062C41.9573 9.17222 42.407 9.3704 42.7833 9.67488C43.1595 9.97936 43.4489 10.3792 43.6217 10.8335V6.70256C43.6214 5.76917 43.3326 4.85911 42.7955 4.0991C42.2584 3.33909 41.4997 2.76697 40.6252 2.46241"}"></path><path d="${"M12.9665 23.6907V21.536H10.8308V23.6907H8.69604V25.8453H10.8313V27.9999H12.967V25.8453H15.1023V23.6907H12.9665Z"}"></path></svg></div>

			<button class="${"order-3 block"}"><svg class="${"stroke-slate-400 hover:stroke-slate-300 dark:stroke-slate-500 dark:hover:stroke-slate-400"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></button></div>

		

		<div class="${"w-full container h-[3.75rem] justify-between items-center hidden max-w-screen-2xl lg:flex"}"><div class="${"flex items-center gap-16 grow"}"><svg class="${"fill-lime-500 dark:fill-mber"}" width="${"110"}" height="${"28"}" viewBox="${"0 0 110 28"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M78.5103 16.3228H66.0357C66.1133 17.2507 66.4112 18.1462 66.9043 18.9334C67.3591 19.6555 67.986 20.2513 68.7277 20.6662C69.4413 21.0681 70.2454 21.2782 71.0627 21.2762C71.9719 21.3029 72.8706 21.0734 73.6577 20.6133C74.3844 20.1628 74.9401 19.4792 75.2357 18.6721H78.0819C77.7925 19.6118 77.3049 20.4773 76.6527 21.2091C75.9757 21.9732 75.1461 22.5841 74.2183 23.0016C73.1037 23.4951 71.889 23.7147 70.6739 23.6423C69.4589 23.5699 68.2782 23.2077 67.2289 22.5852C66.0702 21.8831 65.1182 20.8816 64.4714 19.6842C63.8118 18.4443 63.4671 17.0588 63.4683 15.6517C63.4695 14.2445 63.8165 12.8596 64.4782 11.6208C65.1258 10.4208 66.0769 9.41524 67.2348 8.70649C68.406 7.99125 69.752 7.6205 71.121 7.63608C72.4642 7.61887 73.7852 7.98202 74.9341 8.68427C76.0514 9.36497 76.9695 10.3327 77.5948 11.4885C78.2316 12.6491 78.5616 13.9555 78.5529 15.2821C78.5529 15.4209 78.5378 15.7676 78.5094 16.3238L78.5103 16.3228ZM75.9575 14.062C75.9056 13.3379 75.6446 12.645 75.2069 12.0689C74.7395 11.4418 74.1302 10.9366 73.43 10.5954C72.699 10.2291 71.8931 10.0406 71.0769 10.0451C70.3292 10.0411 69.5896 10.201 68.9093 10.5139C68.2285 10.8284 67.6305 11.2997 67.1633 11.89C66.6618 12.5244 66.3154 13.2689 66.1522 14.0635L75.9575 14.062Z"}"></path><path d="${"M106.868 5.95014C106.571 5.78005 106.324 5.53405 106.15 5.23687C105.978 4.93834 105.887 4.59896 105.887 4.2534C105.887 3.90784 105.978 3.56846 106.15 3.26993C106.324 2.9729 106.571 2.72707 106.868 2.55715C107.174 2.38426 107.519 2.29346 107.869 2.29346C108.22 2.29346 108.564 2.38426 108.87 2.55715C109.167 2.72712 109.415 2.97292 109.588 3.26993C109.761 3.5684 109.852 3.9078 109.852 4.2534C109.852 4.59901 109.761 4.9384 109.588 5.23687C109.414 5.53443 109.166 5.78046 108.867 5.95014C108.562 6.12277 108.218 6.21342 107.867 6.21342C107.517 6.21342 107.173 6.12277 106.867 5.95014H106.868ZM108.717 5.7249C108.97 5.58043 109.181 5.37015 109.327 5.11585C109.474 4.85194 109.552 4.55424 109.552 4.25143C109.552 3.94861 109.474 3.65091 109.327 3.387C109.182 3.13214 108.971 2.9217 108.717 2.77795C108.457 2.63298 108.166 2.55691 107.87 2.55691C107.573 2.55691 107.282 2.63298 107.022 2.77795C106.768 2.92182 106.557 3.13221 106.41 3.387C106.263 3.65071 106.185 3.94849 106.185 4.25143C106.185 4.55436 106.263 4.85214 106.41 5.11585C106.557 5.3698 106.768 5.57944 107.022 5.72293C107.282 5.86848 107.573 5.94488 107.87 5.94488C108.166 5.94488 108.458 5.86848 108.717 5.72293V5.7249ZM108.016 3.11779C108.141 3.11647 108.264 3.14834 108.372 3.21016C108.48 3.27058 108.569 3.35894 108.63 3.46599C108.692 3.57304 108.724 3.69486 108.723 3.81871C108.725 3.9552 108.686 4.08905 108.611 4.20252C108.539 4.3135 108.435 4.39967 108.313 4.4495L108.765 5.36333H108.459L108.043 4.51075C108.009 4.51437 107.974 4.51586 107.939 4.5152H107.426V5.36333H107.137V3.11878L108.016 3.11779ZM108.22 4.21832C108.286 4.17756 108.341 4.1196 108.379 4.05038C108.418 3.9793 108.438 3.89936 108.437 3.81822C108.437 3.73802 108.417 3.65917 108.377 3.58952C108.339 3.51981 108.284 3.46114 108.217 3.41911C108.15 3.37686 108.073 3.35474 107.995 3.35539H107.426V4.27958H107.997C108.076 4.28029 108.153 4.25907 108.22 4.21832"}"></path><path d="${"M83.4337 23.2402H80.8832V14.8291C80.8848 13.0067 81.603 11.2593 82.8802 9.97045C84.1575 8.68163 85.8894 7.95667 87.6959 7.95471H89.3606V10.5287H87.6959C86.5666 10.5304 85.4841 10.9837 84.6857 11.7893C83.8872 12.5948 83.4378 13.6869 83.4361 14.8262L83.4337 23.2402Z"}"></path><path d="${"M54.1935 7.63513C52.1517 7.63413 50.1884 8.4293 48.7141 9.85447L48.7817 2.29346H46.2455V15.6916C46.2529 17.2757 46.7253 18.822 47.6031 20.1355C48.4809 21.449 49.7247 22.4707 51.1776 23.0716C52.6304 23.6726 54.2272 23.8259 55.7663 23.5122C57.3054 23.1985 58.7179 22.4318 59.8255 21.3089C60.9331 20.1861 61.6862 18.7574 61.9897 17.2031C62.2932 15.6489 62.1335 14.0388 61.5307 12.576C60.928 11.1132 59.9092 9.86339 58.603 8.98421C57.2968 8.10504 55.7618 7.63593 54.1916 7.63611L54.1935 7.63513ZM54.1916 21.2777C53.0892 21.2777 52.0115 20.948 51.0949 20.3301C50.1783 19.7122 49.4639 18.834 49.042 17.8065C48.6201 16.7791 48.5097 15.6485 48.7247 14.5577C48.9398 13.4669 49.4706 12.4649 50.25 11.6785C51.0295 10.892 52.0226 10.3565 53.1038 10.1394C54.185 9.9224 55.3057 10.0337 56.3242 10.4592C57.3427 10.8847 58.2133 11.6054 58.8258 12.5301C59.4383 13.4547 59.7653 14.5419 59.7654 15.654C59.7654 17.1454 59.1782 18.5758 58.1329 19.6304C57.0876 20.6851 55.6699 21.2776 54.1916 21.2777"}"></path><path d="${"M105.887 7.98039H100.248V2.29346H97.6985V7.98039H92.059V10.5549H97.696V16.2414H100.246V10.5549H105.884L105.887 7.98039Z"}"></path><path d="${"M23.6381 8.61814V6.4635H21.5029V8.61814H19.3671V10.7728H21.5029V12.9284H23.6381V10.7738H25.7738V8.61914L23.6381 8.61814Z"}"></path><path d="${"M17.2303 10.7727V8.61804H15.0946V10.7727H12.9594V12.9293H15.0946V15.0839H17.2303V12.9293H19.3656V10.7747L17.2303 10.7727Z"}"></path><path d="${"M17.2303 2.15464V0H15.0946V2.15464H12.9594V4.30929H15.0946V6.46393H17.2303V4.30929H19.3656V2.15464H17.2303Z"}"></path><path d="${"M10.61 13.1422V11.4188H8.90124V13.1422H7.19293V14.8657H8.90124V16.5891H10.61V14.8657H12.3183V13.1422H10.61Z"}"></path><path d="${"M8.47446 6.67923V4.95532H6.76617V6.67873H5.05737V8.40216H6.76617V10.1256H8.47446V8.40216H10.1832V6.67923H8.47446Z"}"></path><path d="${"M19.3657 17.2356V15.0809H17.2304V17.2356H15.0947V19.3902H17.2304V21.5449H19.3657V19.3902H21.5014V17.2356H19.3657Z"}"></path><path d="${"M21.5008 4.3092H19.3656V6.46385H21.5008V4.3092Z"}"></path><path d="${"M23.6367 2.15515H21.5009V4.3098H23.6367V2.15515Z"}"></path><path d="${"M23.6367 15.0809H21.5009V17.2356H23.6367V15.0809Z"}"></path><path d="${"M6.03163 11.2982V10.1952H4.94025V11.2982H3.84692V12.4012H4.94025V13.5042H6.03358V12.4012H7.12692V11.2982H6.03163Z"}"></path><path d="${"M2.18666 9.14354V8.04053H1.09333V9.14354H0V10.2465H1.09333V11.3496H2.18666V10.2465H3.27999V9.14354H2.18666Z"}"></path><path d="${"M25.7729 8.61762H23.6372V6.46298H21.501V4.69659L11.072 18.1392C10.7362 18.5708 10.5158 19.0822 10.4319 19.6243C10.3481 20.1664 10.4035 20.7212 10.593 21.2355C10.7824 21.7499 11.0995 22.2065 11.5139 22.5619C11.9284 22.9172 12.4263 23.1593 12.96 23.265V21.544H10.8242V19.3894H12.96V17.2352H15.0952V19.3894H17.2309V20.6183L19.8553 17.2352H19.3657V15.0806H17.2305V12.9259H19.3657V10.7713H21.501V12.9259H23.1975L23.6382 12.3604V10.7718H25.7739L25.7729 8.61762ZM21.501 15.1137L21.5259 15.0811H21.501V15.1137ZM23.6362 2.67531C23.0327 2.97266 22.5039 3.40417 22.0895 3.93738L21.8016 4.30883H23.6357L23.6362 2.67531ZM27.9077 10.7723H30.0361V7.46571V6.70256C30.0373 5.5445 29.5938 4.43099 28.7987 3.5958C28.0035 2.76061 26.9185 2.2687 25.7715 2.22335V4.30933H27.9067V6.46348H25.7715V8.61812H27.9067L27.9077 10.7723ZM30.0361 16.886V12.9264H27.9077V15.0806H25.7724V12.9264H23.6724V20.4618C23.6719 21.1307 23.8787 21.7831 24.2638 22.3276C24.649 22.8721 25.1933 23.2815 25.8205 23.4985C26.4477 23.7156 27.1264 23.7294 27.7618 23.538C28.3971 23.3466 28.9573 22.9596 29.3638 22.4312C29.4728 22.327 29.5744 22.2152 29.6679 22.0968L31.8908 19.2318C31.3643 19.1101 30.8943 18.8119 30.5576 18.3859C30.2208 17.96 30.0371 17.4314 30.0366 16.8865L30.0361 16.886ZM15.0947 22.9404C15.4785 22.7311 15.8152 22.444 16.0838 22.0972L16.5127 21.5445H15.0928L15.0947 22.9404ZM42.8074 10.2625C42.2865 9.85308 41.6258 9.66912 40.9705 9.7511C40.3152 9.83308 39.719 10.1743 39.313 10.6997L37.2566 13.3522V20.4622C37.2566 21.3138 37.5919 22.1304 38.1887 22.7326C38.7856 23.3347 39.5951 23.673 40.4391 23.673C41.2832 23.673 42.0927 23.3347 42.6895 22.7326C43.2864 22.1304 43.6217 21.3138 43.6217 20.4622V11.4065C43.4654 10.9535 43.1826 10.5557 42.8074 10.261V10.2625ZM40.6252 2.46193C39.7505 2.15716 38.8033 2.13547 37.9158 2.39988C37.0283 2.6643 36.2448 3.20162 35.6746 3.93689L30.7015 10.3475V17.1147C30.7015 17.5401 30.8133 17.9578 31.0255 18.3254C31.2377 18.6929 31.5427 18.9972 31.9094 19.2071L35.512 14.5639L35.5081 14.5609L38.9316 10.1296C39.228 9.74574 39.6201 9.44818 40.068 9.26738C40.5158 9.08658 41.0032 9.02902 41.4802 9.10062C41.9573 9.17223 42.407 9.3704 42.7833 9.67488C43.1595 9.97936 43.4489 10.3792 43.6217 10.8335V6.70256C43.6214 5.76917 43.3326 4.85911 42.7955 4.0991C42.2584 3.33909 41.4997 2.76697 40.6252 2.46241"}"></path><path d="${"M12.9666 23.6907V21.536H10.8309V23.6907H8.69611V25.8453H10.8314V27.9999H12.9671V25.8453H15.1023V23.6907H12.9666Z"}"></path></svg>
				<button class="${"flex w-full max-w-[18rem] gap-4 px-2 py-2 text-gray-400 bg-white border border-gray-300 rounded-lg hover:border-gray-200 bg-opacity-80 dark:border-0 dark:border-t dark:bg-gray-800 dark:bg-opacity-50 dark:border-t-gray-700"}"><svg class="${"stroke-slate-400 dark:stroke-slate-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>
					Quick search project
				</button></div>
			<div class="${"flex gap-8 divide-x dark:divide-slate-800"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}
				<span class="${"pl-8 gap-8 flex"}">${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}
					</span></div></div></nav>

	<div class="${"relative z-40"}">${validate_component(Transition, "Transition").$$render($$result, { show: $dialogmenu.expanded }, {}, {
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
            return `<button class="${"fixed inset-0 bg-opacity-50 bg-zinc-900 backdrop-blur-sm"}"></button>`;
          }
        }
      )}

			<div class="${"fixed inset-0 overflow-y-auto"}"><div class="${"flex justify-end p-4 text-center"}">${validate_component(Transition, "Transition").$$render(
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
            return `<div class="${"p-6 overflow-hidden text-left align-middle transition-all transform border-t rounded-lg shadow-xl w-52 bg-slate-100 border-t-white dark:border-t-gray-700 dark:bg-gray-800"}">
							<ul class="${"flex flex-col gap-6"}">${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}</ul>
							<div class="${"flex justify-between pt-6 mt-6 border-t border-t-gray-200 dark:border-t-gray-700"}"><div class="${"font-normal text-gray-400 dark:text-gray-500"}">Switch theme</div>
								${validate_component(Theme, "Theme").$$render($$result, {}, {}, {})}</div></div>`;
          }
        }
      )}</div></div>`;
    }
  })}</div>

	<div class="${"relative z-40"}">${validate_component(Transition, "Transition").$$render($$result, { show: $dialogsearch.expanded }, {}, {
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
				<div class="${"fixed inset-0 bg-opacity-50 bg-zinc-900 backdrop-blur-sm"}"></div>`;
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
            return `<div class="${"w-full flex flex-col max-w-xl overflow-hidden align-middle transition-all transform border-t rounded-lg shadow-xl h-screen max-h-[37rem] text-slate-600 dark:text-slate-300 bg-slate-100 border-t-white dark:border-t-gray-700 dark:bg-gray-800"}"><label for="${"searchbox"}" class="${"absolute top-6 left-6"}"><span><svg class="${"stroke-slate-400 dark:stroke-slate-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M20.0001 20L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></span></label>
							<input id="${"searchbox"}" autocomplete="${"off"}" class="${"w-full py-6 pl-16 m-0 bg-transparent border-b outline-0 dark:border-b-slate-700 border-b-slate-300 border-opacity-60 dark:border-opacity-50"}" placeholder="${"Search project..."}"${add_attribute("value", searchTerm, 0)}>
							<div class="${"flex overflow-y-auto flex-col divide-y divide-slate-200 dark:divide-slate-700 dark:divide-opacity-50"}">${each(filteredBooks, (results) => {
              return `<div class="${"flex group p-6 items-center transition-colors duration-150 justify-between dark:hover:bg-slate-700 dark:hover:bg-opacity-30 hover:bg-slate-200 hover:bg-opacity-50"}"><div class="${"flex gap-4"}"><picture class="${"w-6 h-6"}"><img${add_attribute(
                "src",
                results?.thumbnail ? getImageURL(results.collectionId, results.id, results.thumbnail, "100x100") : `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${results.name}`,
                0
              )} alt="${"club thumbnail"}" loading="${"lazy"}" width="${"24"}" height="${"24"}"></picture>
											${escape(results.name)}</div>
										<div class="${"flex gap-2 font-code text-center text-xs"}"><a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://" + escape(results.dev, true) + "/page"}"><div class="${"border py-0.5 w-10 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-sky-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"}">Dev
												</div></a>
											<a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://" + escape(results.test, true) + "/page"}"><div class="${"border py-0.5 px-1 w-10 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-purple-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"}">Test
												</div></a>
											<a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://" + escape(results.uat, true) + "/page"}"><div class="${"border py-0.5 px-1 w-10 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-emerald-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"}">Uat
												</div></a>
											<a rel="${"noreferrer"}" target="${"_blank"}" href="${"https://" + escape(results.live, true) + "/page"}"><div class="${"border py-0.5 px-1 w-10 rounded bg-slate-50 text-slate-400 border-slate-300 dark:border-slate-600 dark:bg-slate-700 group-hover:border-lime-500 group-hover:text-slate-500 group-hover:bg-white dark:bg-opacity-50 dark:hover:bg-opacity-100 dark:group-hover:bg-slate-700 dark:group-hover:text-slate-300 transition-colors duration-150"}">Live
												</div></a></div>
									</div>`;
            })}
								${Object.keys(filteredBooks).length === 0 ? `<div class="${"p-6 text-center"}">No results for &quot;<span class="${"font-semibold"}">${escape(searchTerm)}</span>&quot;
									</div>` : ``}</div>
							<button type="${"button"}" class="${"px-1 py-0.5 outline outline-1 outline-slate-300 bg-slate-50 absolute right-6 top-[26px] text-xs font-code rounded dark:bg-slate-600 dark:outline-slate-500"}">ESC
							</button></div>`;
          }
        }
      )}</div></div>`;
    }
  })}</div></header>`;
});
const app = "";
const beam = "/_app/immutable/assets/beam.fad8a3ed.webp";
const beam_fallback = "/_app/immutable/assets/beam.cb8c8e1e.png";
const beam_light = "/_app/immutable/assets/beam-light.3723f0ca.webp";
const beam_light_fallback = "/_app/immutable/assets/beam-light.7a26738e.png";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div class="${"h-max"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"flex flex-col min-h-full"}">
	<div class="${"absolute z-10 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none select-none"}"><div class="${"w-[106.25rem] flex-none justify-center"}"><picture class="${"hidden dark:block"}"><source${add_attribute("srcset", beam, 0)} type="${"image/webp"}">
				<img${add_attribute("src", beam_fallback, 0)} alt="${"BG"}"></picture>

			<picture class="${"block dark:hidden"}"><source${add_attribute("srcset", beam_light, 0)} type="${"image/webp"}">
				<img${add_attribute("src", beam_light_fallback, 0)} alt="${"BG"}"></picture></div></div>

	<main class="${"w-full grow mx-auto z-10 py-28"}">${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main></div>`;
});
export {
  Layout as default
};
