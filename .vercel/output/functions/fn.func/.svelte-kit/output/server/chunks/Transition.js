import { c as create_ssr_component, g as getContext, s as setContext, f as createEventDispatcher, h as add_styles } from "./index3.js";
import { w as writable } from "./index2.js";
const key = {};
function classes(classes2) {
  return classes2 ? classes2.split(" ").filter((x) => x) : [];
}
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = null } = $$props;
  let { appear = false } = $$props;
  let { unmount = false } = $$props;
  let { enter = "" } = $$props;
  let { enterFrom = "" } = $$props;
  let { enterTo = "" } = $$props;
  let { leave = null } = $$props;
  let { leaveFrom = null } = $$props;
  let { leaveTo = null } = $$props;
  const parent = show === null ? getContext(key) : null;
  const { subscribe, set } = writable(show);
  const context = {
    appear: parent ? parent.appear : appear,
    count: 0,
    show: { subscribe },
    completed: () => {
    }
  };
  let display = show && !context.appear ? "contents" : "none";
  let mounted = !unmount || show === true;
  setContext(key, context);
  createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.appear === void 0 && $$bindings.appear && appear !== void 0)
    $$bindings.appear(appear);
  if ($$props.unmount === void 0 && $$bindings.unmount && unmount !== void 0)
    $$bindings.unmount(unmount);
  if ($$props.enter === void 0 && $$bindings.enter && enter !== void 0)
    $$bindings.enter(enter);
  if ($$props.enterFrom === void 0 && $$bindings.enterFrom && enterFrom !== void 0)
    $$bindings.enterFrom(enterFrom);
  if ($$props.enterTo === void 0 && $$bindings.enterTo && enterTo !== void 0)
    $$bindings.enterTo(enterTo);
  if ($$props.leave === void 0 && $$bindings.leave && leave !== void 0)
    $$bindings.leave(leave);
  if ($$props.leaveFrom === void 0 && $$bindings.leaveFrom && leaveFrom !== void 0)
    $$bindings.leaveFrom(leaveFrom);
  if ($$props.leaveTo === void 0 && $$bindings.leaveTo && leaveTo !== void 0)
    $$bindings.leaveTo(leaveTo);
  classes(enter);
  classes(enterFrom);
  classes(enterTo);
  classes(leave === null ? enter : leave);
  classes(leaveFrom === null ? enterTo : leaveFrom);
  classes(leaveTo === null ? enterFrom : leaveTo);
  return `<div${add_styles({ display })}>${mounted ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
export {
  Transition as T
};
