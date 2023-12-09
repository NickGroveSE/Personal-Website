import { _ as __nuxt_component_0$1 } from "./nuxt-link-c857744c.js";
import { withCtx, createTextVNode, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const sidebar_vue_vue_type_style_index_0_scoped_ff43cce6_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ff43cce6><ul data-v-ff43cce6><li data-v-ff43cce6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ff43cce6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Me`);
      } else {
        return [
          createTextVNode("About Me")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ff43cce6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ff43cce6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "link",
    to: "/skills"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Skills &amp; Education`);
      } else {
        return [
          createTextVNode("Skills & Education")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ff43cce6"]]);
const default_vue_vue_type_style_index_0_scoped_32ebc8ee_lang = "";
const _sfc_main = {
  data() {
    return {
      showSidebar: false,
      openedButtonStyle: {
        left: "160px",
        "background-image": "url('/x.svg')"
      },
      closedButtonStyle: {
        left: "0",
        "background-image": "url('/ham-menu.svg')"
      },
      openedMenuStyle: {
        visibility: "visible"
      },
      closedMenuStyle: {
        left: "0"
      },
      openedLayerStyle: {
        width: "100vw"
      },
      closedLayerStyle: {
        width: "0"
      }
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "page" }, _attrs))} data-v-32ebc8ee><div class="blur" data-v-32ebc8ee></div><div id="ham-menu" style="${ssrRenderStyle($data.showSidebar ? $data.openedButtonStyle : $data.closedButtonStyle)}" data-v-32ebc8ee></div><div id="transparent-layer" style="${ssrRenderStyle($data.showSidebar ? $data.openedLayerStyle : $data.closedLayerStyle)}" data-v-32ebc8ee>`);
  _push(ssrRenderComponent(_component_Sidebar, {
    id: "sidebar",
    style: $data.showSidebar ? $data.openedMenuStyle : $data.closedMenuStyle,
    onClick: ($event) => $data.showSidebar = !$data.showSidebar
  }, null, _parent));
  _push(`</div><div class="main-content" data-v-32ebc8ee>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DefaultLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-32ebc8ee"]]);
export {
  DefaultLayout as default
};
//# sourceMappingURL=default-808ad923.js.map
