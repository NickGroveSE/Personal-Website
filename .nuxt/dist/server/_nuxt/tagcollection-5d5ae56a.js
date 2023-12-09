import { useSSRContext, mergeProps } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const tag_vue_vue_type_style_index_0_scoped_b5ef5072_lang = "";
const _sfc_main$1 = {
  __name: "tag",
  __ssrInlineRender: true,
  props: {
    tags: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<li data-v-b5ef5072>${ssrInterpolate(tag)}</li>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tag.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b5ef5072"]]);
const tagcollection_vue_vue_type_style_index_0_scoped_4061d93e_lang = "";
const _sfc_main = {
  __name: "tagcollection",
  __ssrInlineRender: true,
  props: {
    tags: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: _ctx.$attrs.class
      }, _attrs))} data-v-4061d93e>`);
      _push(ssrRenderComponent(Tag, { tags: __props.tags }, null, _parent));
      _push(`</ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tagcollection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagCollection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4061d93e"]]);
export {
  TagCollection as T
};
//# sourceMappingURL=tagcollection-5d5ae56a.js.map
