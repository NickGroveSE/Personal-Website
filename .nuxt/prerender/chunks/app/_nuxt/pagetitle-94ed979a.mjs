import { mergeProps, useSSRContext } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h2${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))} data-v-5a3f7346>${ssrInterpolate(_ctx.$attrs.heading)}</h2>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pagetitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5a3f7346"]]);

export { PageTitle as P };
//# sourceMappingURL=pagetitle-94ed979a.mjs.map
