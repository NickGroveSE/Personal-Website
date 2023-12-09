import { ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { P as PageTitle } from "./pagetitle-94ed979a.js";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const skill_vue_vue_type_style_index_0_scoped_00dab649_lang = "";
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
const skillsubset_vue_vue_type_style_index_0_scoped_335473a3_lang = "";
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
const education_vue_vue_type_style_index_0_scoped_3432ba74_lang = "";
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
const skills_vue_vue_type_style_index_0_scoped_6458ba4d_lang = "";
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
export {
  skills as default
};
//# sourceMappingURL=skills-f2c92616.js.map
