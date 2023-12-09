import { _ as __nuxt_component_0 } from './nuxt-link-c857744c.mjs';
import _sfc_main$1 from './ContentDoc-5097274e.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { q as queryContent } from './query-fded2491.mjs';
import { withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/server-renderer/index.mjs';
import { P as PageTitle } from './pagetitle-94ed979a.mjs';
import { T as TagCollection } from './tagcollection-5d5ae56a.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ufo/dist/index.mjs';
import './index-6a088328.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/@unhead/shared/dist/index.mjs';
import './ContentRenderer-cd5aa57d.mjs';
import './ContentRendererMarkdown-31990daa.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/property-information/index.js';
import './preview-4c3c1787.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ohash/dist/index.mjs';
import './ContentQuery-96affa01.mjs';
import './asyncData-91c49cf4.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unified/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/micromark/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/slugify/slugify.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/remark-parse/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/github-slugger/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/detab/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/remark-emoji/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unist-util-visit/index.js';

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

export { _title_ as default };
//# sourceMappingURL=_title_-3c48b961.mjs.map
