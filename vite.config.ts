import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";

export default defineConfig({
  root: "www",
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: "js/*", dest: "js" },
        { src: "webfonts/*", dest: "webfonts" },
        { src: "studios/webfonts/*", dest: "studios/webfonts" },
        { src: "studios/img/*", dest: "studios/img" },
      ],
    }),
  ],
  css: {
    transformer: "lightningcss",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    modulePreload: false,
    cssMinify: "lightningcss",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "www/index.html"),
        studios: resolve(__dirname, "www/studios/index.html"),
        studiosPrivacy: resolve(__dirname, "www/studios/privacy-policy.html"),
        ambiance: resolve(__dirname, "www/studios/ambiance/index.html"),
        labs: resolve(__dirname, "www/labs/index.html"),
        labsPrivacy: resolve(__dirname, "www/labs/privacy-policy.html"),
      },
    },
  },
});
