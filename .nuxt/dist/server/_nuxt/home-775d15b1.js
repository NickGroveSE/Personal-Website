import { _ as __nuxt_component_0$1 } from "./nuxt-link-c857744c.js";
import { q as queryContent } from "./query-fded2491.js";
import { mergeProps, useSSRContext, withAsyncContext, withCtx, createVNode, unref, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from "./LI-In-Bug-ab2028cb.js";
import { _ as _export_sfc } from "../server.mjs";
import { P as ProjectTile } from "./projecttile-61c32f80.js";
import DefaultLayout from "./default-808ad923.js";
import "ufo";
import "ohash";
import "destr";
import "devalue";
import "defu";
import "klona";
import "./preview-4c3c1787.js";
import "cookie-es";
import "h3";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "./tagcollection-5d5ae56a.js";
import "./projecttitle-5b1bfc2a.js";
const _imports_0 = "" + __buildAssetsURL("github-profile-pic.3bb8af32.jpg");
const arrow_vue_vue_type_style_index_0_scoped_9bb08a52_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "arrow",
    id: _ctx.$attrs.id
  }, _attrs))} data-v-9bb08a52></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/arrow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Arrow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9bb08a52"]]);
const introduction_vue_vue_type_style_index_0_scoped_aed80b1d_lang = "";
const _sfc_main$1 = {
  __name: "introduction",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const projects = ([__temp, __restore] = withAsyncContext(() => queryContent("projects").sort({ date: -1 }).find()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "introduction-wrapper" }, _attrs))} data-v-aed80b1d><div class="introduction-panel" data-v-aed80b1d><div class="introduction-side" id="introduction-left" data-v-aed80b1d><img class="profile-image"${ssrRenderAttr("src", _imports_0)} data-v-aed80b1d><div class="name" data-v-aed80b1d>Nick Grove</div><div class="career" data-v-aed80b1d>Full Stack Developer &amp; Web Designer</div></div><div class="introduction-side" id="introduction-right" data-v-aed80b1d><div class="link-container" data-v-aed80b1d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "https://github.com/NickGroveSE"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img"${ssrRenderAttr("src", _imports_1)} alt="NickGroveSE on Github" data-v-aed80b1d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "link-img",
                src: _imports_1,
                alt: "NickGroveSE on Github"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "https://www.behance.net/nickgrove1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img"${ssrRenderAttr("src", _imports_2)} alt="Nick Grove on Behance" data-v-aed80b1d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "link-img",
                src: _imports_2,
                alt: "Nick Grove on Behance"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "https://www.linkedin.com/in/nick-grove-9417b6199/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img" id="linkedin-img"${ssrRenderAttr("src", _imports_3)} alt="Nick Grove on LinkedIn" data-v-aed80b1d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "link-img",
                id: "linkedin-img",
                src: _imports_3,
                alt: "Nick Grove on LinkedIn"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="recent-pre-title" data-v-aed80b1d>What I Am Currently Working On</div>`);
      _push(ssrRenderComponent(ProjectTile, {
        class: "recent-project",
        title: unref(projects)[0].title,
        tags: unref(projects)[0].tags,
        imgurl: unref(projects)[0].imgurl,
        description: unref(projects)[0].description
      }, null, _parent));
      _push(`</div></div><div class="page-down-wrapper" data-v-aed80b1d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "page-down",
        to: "#page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Arrow, { id: "arrow-1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Arrow, { id: "arrow-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Arrow, { id: "arrow-3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Arrow, { id: "arrow-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Arrow, { id: "arrow-1" }),
              createVNode(Arrow, { id: "arrow-2" }),
              createVNode(Arrow, { id: "arrow-3" }),
              createVNode(Arrow, { id: "arrow-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/introduction.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aed80b1d"]]);
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Introduction = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Introduction, null, null, _parent));
      _push(ssrRenderComponent(DefaultLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-775d15b1.js.map
