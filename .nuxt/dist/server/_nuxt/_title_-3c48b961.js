import { _ as __nuxt_component_0 } from "./nuxt-link-c857744c.js";
import _sfc_main$1 from "./ContentDoc-5097274e.js";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { q as queryContent } from "./query-fded2491.js";
import { withAsyncContext, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { P as PageTitle } from "./pagetitle-94ed979a.js";
import { T as TagCollection } from "./tagcollection-5d5ae56a.js";
import "ufo";
import "./index-6a088328.js";
import "@unhead/shared";
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
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
const _title__vue_vue_type_style_index_0_scoped_0fe8025f_lang = "";
const _sfc_main = {
  __name: "[title]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { title } = useRoute().params;
    const project = ([__temp, __restore] = withAsyncContext(() => queryContent("projects").where({ title: { $eq: title } }).findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentDoc = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        class: "project",
        id: "title",
        heading: unref(title)
      }, null, _parent));
      _push(`<div class="link-container" data-v-0fe8025f>`);
      if (unref(project).linkimgurls) {
        _push(`<!--[-->`);
        ssrRenderList(unref(project).linkimgurls, (image, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "link",
            to: `${unref(project).links[index]}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img class="link-img"${ssrRenderAttr("src", image)} data-v-0fe8025f${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "link-img",
                    src: image
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(TagCollection, {
        class: "project",
        id: "tags",
        tags: unref(project).tags
      }, null, _parent));
      _push(`<div class="content" data-v-0fe8025f>`);
      _push(ssrRenderComponent(_component_ContentDoc, {
        path: `/projects/${unref(title).split(" ").join("").toLowerCase()}`
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[title].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _title_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fe8025f"]]);
export {
  _title_ as default
};
//# sourceMappingURL=_title_-3c48b961.js.map
