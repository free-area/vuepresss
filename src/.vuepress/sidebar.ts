import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
  "/dl/neural_de/":["background.md",
    {
      text: "神经常微分方程",
      icon: "book",
      prefix: "node/",
      children: "structure",
    }
  ]
});
