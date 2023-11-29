import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/@vueuse+core@10.6.1_vue@3.3.9/node_modules/@vueuse/core/index.mjs";
import Badge from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
