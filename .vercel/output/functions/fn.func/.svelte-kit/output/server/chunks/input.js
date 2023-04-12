import { c as create_ssr_component, b as add_attribute, d as escape } from "./index3.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { id } = $$props;
  let { label } = $$props;
  let { type = "text" } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  return `<div class="${"form-control w-full max-w-lg mb-4"}"><label${add_attribute("for", id, 0)} class="${"block text-sm font-semibold leading-6 text-gray-700 dark:text-slate-400"}"><span class="${""}">${escape(label)}</span></label>
	<input class="${"mt-1 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none dark:bg-gray-800 dark:bg-opacity-20 dark:ring-gray-800 dark:focus:ring-gray-600 dark:text-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"}"${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)} ${required ? "required" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", id, 0)}${add_attribute("value", value, 0)}></div>`;
});
export {
  Input as I
};
