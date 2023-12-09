import { _ as __nuxt_component_0 } from './nuxt-link-c857744c.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/server-renderer/index.mjs';
import { T as TagCollection } from './tagcollection-5d5ae56a.mjs';
import { P as ProjectImage, a as ProjectTitle } from './projecttitle-5b1bfc2a.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  __name: "projecttile",
  __ssrInlineRender: true,
  props: {
    title: String,
    tags: Object,
    imgurl: String,
    description: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "project-link",
        to: `/projects/${__props.title}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="project" data-v-e83d14df${_scopeId}><div class="img-and-title" data-v-e83d14df${_scopeId}>`);
            _push2(ssrRenderComponent(ProjectImage, {
              class: "tile",
              imgurl: __props.imgurl
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(ProjectTitle, {
              class: "tile",
              title: __props.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="tags" data-v-e83d14df${_scopeId}>`);
            _push2(ssrRenderComponent(TagCollection, {
              class: "tile",
              tags: __props.tags
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="description" data-v-e83d14df${_scopeId}>${ssrInterpolate(__props.description)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "project" }, [
                createVNode("div", { class: "img-and-title" }, [
                  createVNode(ProjectImage, {
                    class: "tile",
                    imgurl: __props.imgurl
                  }, null, 8, ["imgurl"]),
                  createVNode(ProjectTitle, {
                    class: "tile",
                    title: __props.title
                  }, null, 8, ["title"])
                ]),
                createVNode("div", { class: "tags" }, [
                  createVNode(TagCollection, {
                    class: "tile",
                    tags: __props.tags
                  }, null, 8, ["tags"])
                ]),
                createVNode("div", { class: "description" }, toDisplayString(__props.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projecttile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectTile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e83d14df"]]);

export { ProjectTile as P };
//# sourceMappingURL=projecttile-61c32f80.mjs.map
