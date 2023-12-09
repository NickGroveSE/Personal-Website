import { _ as __nuxt_component_0 } from "./nuxt-link-c857744c.js";
import { mergeProps, withCtx, createVNode, useSSRContext, withAsyncContext, unref, createTextVNode } from "vue";
import { q as queryContent } from "./query-fded2491.js";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import _sfc_main$2 from "./ContentDoc-5097274e.js";
import { T as TagCollection } from "./tagcollection-5d5ae56a.js";
import { P as ProjectImage, a as ProjectTitle } from "./projecttitle-5b1bfc2a.js";
import { _ as _export_sfc } from "../server.mjs";
import { P as PageTitle } from "./pagetitle-94ed979a.js";
import "ufo";
import "ohash";
import "destr";
import "devalue";
import "defu";
import "klona";
import "./preview-4c3c1787.js";
import "cookie-es";
import "h3";
import "./index-6a088328.js";
import "@unhead/shared";
import "./ContentRenderer-cd5aa57d.js";
import "./ContentRendererMarkdown-31990daa.js";
import "scule";
import "property-information";
import "./ContentQuery-96affa01.js";
import "./asyncData-91c49cf4.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "vue-router";
const _imports_0 = "" + __publicAssetsURL("RightArrow.svg");
const projectlink_vue_vue_type_style_index_0_scoped_7b386a1e_lang = "";
const _sfc_main$1 = {
  __name: "projectlink",
  __ssrInlineRender: true,
  props: {
    title: String,
    tags: Object,
    imgurl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentDoc = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "project-link",
        to: `/projects/${__props.title}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ProjectImage, {
              id: "image",
              class: "link",
              imgurl: __props.imgurl
            }, null, _parent2, _scopeId));
            _push2(`<div class="top-right-container" data-v-7b386a1e${_scopeId}>`);
            _push2(ssrRenderComponent(ProjectTitle, {
              id: "title",
              class: "link",
              title: __props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TagCollection, {
              id: "tags",
              class: "link",
              tags: __props.tags
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="excerpt" data-v-7b386a1e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentDoc, {
              class: "excerpt-content",
              path: `/projects/${__props.title.split(" ").join("").toLowerCase()}`
            }, null, _parent2, _scopeId));
            _push2(`<div class="glimpse" data-v-7b386a1e${_scopeId}></div></div><div class="read-more" data-v-7b386a1e${_scopeId}>Click to Read More</div>`);
          } else {
            return [
              createVNode(ProjectImage, {
                id: "image",
                class: "link",
                imgurl: __props.imgurl
              }, null, 8, ["imgurl"]),
              createVNode("div", { class: "top-right-container" }, [
                createVNode(ProjectTitle, {
                  id: "title",
                  class: "link",
                  title: __props.title
                }, null, 8, ["title"]),
                createVNode(TagCollection, {
                  id: "tags",
                  class: "link",
                  tags: __props.tags
                }, null, 8, ["tags"])
              ]),
              createVNode("div", { class: "excerpt" }, [
                createVNode(_component_ContentDoc, {
                  class: "excerpt-content",
                  path: `/projects/${__props.title.split(" ").join("").toLowerCase()}`
                }, null, 8, ["path"]),
                createVNode("div", { class: "glimpse" })
              ]),
              createVNode("div", { class: "read-more" }, "Click to Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projectlink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b386a1e"]]);
const index_vue_vue_type_style_index_0_scoped_2186ef5d_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const MTGMetaTracker = ([__temp, __restore] = withAsyncContext(() => queryContent("projects").where({ title: { $eq: "MTGMetaTracker" } }).findOne()), __temp = await __temp, __restore(), __temp);
    const WordleSolver = ([__temp, __restore] = withAsyncContext(() => queryContent("projects").where({ title: { $eq: "Wordle Solver" } }).findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "Highlighted Projects"
      }, null, _parent));
      _push(ssrRenderComponent(ProjectLink, {
        title: unref(MTGMetaTracker).title,
        tags: unref(MTGMetaTracker).tags,
        imgurl: unref(MTGMetaTracker).imgurl
      }, null, _parent));
      _push(ssrRenderComponent(ProjectLink, {
        title: unref(WordleSolver).title,
        tags: unref(WordleSolver).tags,
        imgurl: unref(WordleSolver).imgurl
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "more-projects",
        to: "/projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Check Out More of My Work <img id="arrow"${ssrRenderAttr("src", _imports_0)} data-v-2186ef5d${_scopeId}>`);
          } else {
            return [
              createTextVNode("Check Out More of My Work "),
              createVNode("img", {
                id: "arrow",
                src: _imports_0
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2186ef5d"]]);
export {
  index as default
};
//# sourceMappingURL=index-07022be7.js.map
