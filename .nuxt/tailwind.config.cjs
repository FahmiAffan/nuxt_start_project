// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 11/10/2024, 1:41:27 AM
const configMerger = require("/Users/it-dept/Documents/Work/perpus-web/fe/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.js");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.ts")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: { files: ["/Users/it-dept/Documents/Work/perpus-web/fe/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/components/global/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/pages/**/*.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/plugins/**/*.{js,ts,mjs}","/Users/it-dept/Documents/Work/perpus-web/fe/composables/**/*.{js,ts,mjs}","/Users/it-dept/Documents/Work/perpus-web/fe/utils/**/*.{js,ts,mjs}","/Users/it-dept/Documents/Work/perpus-web/fe/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}","/Users/it-dept/Documents/Work/perpus-web/fe/app.config.{js,ts,mjs}"] } }));

module.exports = (() => {const cfg=config;cfg["darkMode"] = ["selector","[class~=\"dark-mode\"]"];;return cfg;})()