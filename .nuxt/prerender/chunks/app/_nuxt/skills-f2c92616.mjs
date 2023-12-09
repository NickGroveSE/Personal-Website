import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/server-renderer/index.mjs';
import { P as PageTitle } from './pagetitle-94ed979a.mjs';
import { useSSRContext, mergeProps } from 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Nick/Desktop/PersonalWebsite/node_modules/defu/dist/defu.mjs';
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

const _sfc_main$3 = {
  __name: "skill",
  __ssrInlineRender: true,
  props: {
    tags: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.tags, (tag) => {
        _push(`<li data-v-00dab649>${ssrInterpolate(tag)}</li>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skill.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Skill = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-00dab649"]]);
const _sfc_main$2 = {
  __name: "skillsubset",
  __ssrInlineRender: true,
  props: {
    heading: String,
    tags: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-335473a3>${ssrInterpolate(__props.heading)}: <ul data-v-335473a3>`);
      _push(ssrRenderComponent(Skill, { tags: __props.tags }, null, _parent));
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/skillsubset.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SkillSubset = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-335473a3"]]);
const _sfc_main$1 = {
  __name: "education",
  __ssrInlineRender: true,
  props: {
    imgurl: String,
    heading: String,
    degree: String,
    timeframe: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "edu-wrapper" }, _attrs))} data-v-3432ba74><img class="edu-image"${ssrRenderAttr("src", `${__props.imgurl}`)} data-v-3432ba74><div class="edu-text" data-v-3432ba74><div class="heading" data-v-3432ba74>${ssrInterpolate(__props.heading)}</div><div class="degree" data-v-3432ba74>${ssrInterpolate(__props.degree)}</div><div class="timeframe" data-v-3432ba74>${ssrInterpolate(__props.timeframe)}</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/education.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Education = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3432ba74"]]);
const _sfc_main = {
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const subsets = [
      {
        name: "Languages",
        tags: ["JavaScript", "Python", "Java", "C++", "Swift"]
      },
      {
        name: "Frontend",
        tags: ["Vue", "React"]
      },
      {
        name: "Backend",
        tags: ["Express"]
      },
      {
        name: "Databases",
        tags: ["MongoDB"]
      },
      {
        name: "Design",
        tags: ["Figma"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "Education"
      }, null, _parent));
      _push(ssrRenderComponent(Education, {
        imgurl: "/uofi.png",
        heading: "The University of Iowa",
        degree: "Bachelor's Degree in Computer Science & Engineering",
        timeframe: "August 2016 - May 2020"
      }, null, _parent));
      _push(ssrRenderComponent(Education, {
        id: "last-edu",
        imgurl: "/sfassociate.png",
        heading: "Salesforce Associate (In Progress)",
        timeframe: "September 2023 - Current"
      }, null, _parent));
      _push(ssrRenderComponent(PageTitle, {
        class: "page",
        heading: "Skills"
      }, null, _parent));
      _push(`<div class="subsets-wrapper" data-v-6458ba4d><!--[-->`);
      ssrRenderList(subsets, (subset) => {
        _push(ssrRenderComponent(SkillSubset, {
          heading: subset.name,
          tags: subset.tags
        }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6458ba4d"]]);

export { skills as default };
//# sourceMappingURL=skills-f2c92616.mjs.map
