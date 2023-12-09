import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const projectimage_vue_vue_type_style_index_0_scoped_cc9013f9_lang = "";
const _sfc_main$1 = {
  __name: "projectimage",
  __ssrInlineRender: true,
  props: {
    imgurl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.imgurl) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: _ctx.$attrs.class,
          src: __props.imgurl
        }, _attrs))} data-v-cc9013f9>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: _ctx.$attrs.class
        }, _attrs))} data-v-cc9013f9>No Image</div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projectimage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cc9013f9"]]);
const projecttitle_vue_vue_type_style_index_0_scoped_38dd3d9e_lang = "";
const _sfc_main = {
  __name: "projecttitle",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: _ctx.$attrs.class
      }, _attrs))} data-v-38dd3d9e>${ssrInterpolate(__props.title)}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projecttitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38dd3d9e"]]);
export {
  ProjectImage as P,
  ProjectTitle as a
};
//# sourceMappingURL=projecttitle-5b1bfc2a.js.map
