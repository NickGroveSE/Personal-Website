import { defineComponent, createVNode } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ohash/dist/index.mjs';
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

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-11a47fb4.mjs.map
