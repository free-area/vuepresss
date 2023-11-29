import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-shared@2.0.0-rc.1_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useHint } from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import CodeDemo from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "C:/Users/libre/Desktop/vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.1_mathjax-full@3.2.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "./mathjax.css";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
