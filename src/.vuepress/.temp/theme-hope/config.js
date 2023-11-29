import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});