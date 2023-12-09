import { q as queryContent } from "./query-fded2491.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { P as PageTitle } from "./pagetitle-94ed979a.js";
import { P as ProjectTile } from "./projecttile-61c32f80.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "ohash";
import "destr";
import "devalue";
import "defu";
import "klona";
import "./preview-4c3c1787.js";
import "cookie-es";
import "h3";
import "./nuxt-link-c857744c.js";
import "./tagcollection-5d5ae56a.js";
import "./projecttitle-5b1bfc2a.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
const index_vue_vue_type_style_index_0_scoped_373bb20a_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const projects = ([__temp, __restore] = withAsyncContext(() => queryContent("projects").sort({ date: -1 }).find()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "My Projects"
      }, null, _parent));
      _push(`<div class="projects-wrapper" data-v-373bb20a><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(ssrRenderComponent(ProjectTile, {
          class: "projects-tile",
          title: project.title,
          tags: project.tags,
          imgurl: project.imgurl,
          description: project.description
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-373bb20a"]]);
export {
  index as default
};
//# sourceMappingURL=index-a2da8d7d.js.map
