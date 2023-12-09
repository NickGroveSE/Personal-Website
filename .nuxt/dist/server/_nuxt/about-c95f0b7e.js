import _sfc_main$1 from "./ContentDoc-5097274e.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-c857744c.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from "./LI-In-Bug-ab2028cb.js";
import { P as PageTitle } from "./pagetitle-94ed979a.js";
import { _ as _export_sfc } from "../server.mjs";
import "./index-6a088328.js";
import "@unhead/shared";
import "ufo";
import "destr";
import "devalue";
import "defu";
import "klona";
import "./ContentRenderer-cd5aa57d.js";
import "./ContentRendererMarkdown-31990daa.js";
import "scule";
import "property-information";
import "./preview-4c3c1787.js";
import "cookie-es";
import "h3";
import "ohash";
import "./ContentQuery-96affa01.js";
import "./asyncData-91c49cf4.js";
import "./query-fded2491.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
const about_vue_vue_type_style_index_0_scoped_46aeb0d4_lang = "";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "My Story"
      }, null, _parent));
      _push(`<div class="content" data-v-46aeb0d4>`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: "/pages/aboutme" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "My Links & Contact Info"
      }, null, _parent));
      _push(`<div class="contact" data-v-46aeb0d4><div class="contact-title" data-v-46aeb0d4>Github</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "contact-link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img"${ssrRenderAttr("src", _imports_1)} alt="NickGroveSE on Github" data-v-46aeb0d4${_scopeId}>`);
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
      _push(`</div><div class="contact" data-v-46aeb0d4><div class="contact-title" data-v-46aeb0d4>Behance</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "contact-link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img"${ssrRenderAttr("src", _imports_2)} alt="Nick Grove on Behance" data-v-46aeb0d4${_scopeId}>`);
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
      _push(`</div><div class="contact" id="linkedin-contact" data-v-46aeb0d4><div class="contact-title" data-v-46aeb0d4>Linkedin</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "contact-link" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="link-img" id="linkedin-img"${ssrRenderAttr("src", _imports_3)} alt="Nick Grove on LinkedIn" data-v-46aeb0d4${_scopeId}>`);
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
      _push(`</div><div class="contact" id="email" data-v-46aeb0d4><div class="contact-title" id="email-title" data-v-46aeb0d4>Email:</div><div class="contact-title" id="email-actual" data-v-46aeb0d4>nickgrove.se@gmail.com</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46aeb0d4"]]);
export {
  about as default
};
//# sourceMappingURL=about-c95f0b7e.js.map
