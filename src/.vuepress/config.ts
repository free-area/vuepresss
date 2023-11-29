import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepresss/",

  lang: "zh-CN",
  title: "丁善伟",
  description: "vuepress-theme-hope 的文档演示",

  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
// .vuepress/config.js

