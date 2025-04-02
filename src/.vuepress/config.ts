import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Manveer Singh",
  description: "A personal portfolio created with VuePress",
  theme: hopeTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about.html" },
      { text: "Services", link: "/services.html" },
      { text: "Projects", link: "/projects.html" },
      { text: "Contact", link: "/contact.html" },
    ],
    sidebar: ["/README.md", "/about.md", "/services.md", "/projects.md", "/contact.md"]
  })
});
