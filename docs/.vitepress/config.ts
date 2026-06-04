import {defineConfig} from "vitepress";
import path from "node:path";
import {fileURLToPath} from "node:url";
import markdownItImageFigures from "markdown-it-image-figures";
import {buildSidebarWithOptions} from "./sidebar";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.resolve(__dirname, "..");
const vitepressCommand = process.argv.find((arg) => arg === "dev" || arg === "build" || arg === "preview");
const isDev = vitepressCommand === "dev";

type LocaleSpec = {
  label: string;
  lang: string;
  path: string;
  outlineTitle: string;
};

const localeSpecs: Record<string, LocaleSpec> = {
  root: {label: "English", lang: "en-US", path: "/", outlineTitle: "On this page"},
  "zh-Hans": {label: "简体中文", lang: "zh-CN", path: "/zh-Hans/", outlineTitle: "本页导航"},
};

function localeContentRoot(localeKey: string): string {
  return localeKey === "root" ? docsRoot : path.join(docsRoot, localeKey);
}

function makeLocaleTheme(pathPrefix: string, localeKey: string) {
  const locale = localeSpecs[localeKey];
  const ignoredTopLevelDirs =
    localeKey === "root" ? Object.keys(localeSpecs).filter((key) => key !== "root") : [];

  return {
    logo: "/img/mipmap_icon.png",
    nav: [{text: "Desktop", link: pathPrefix}],
    search: {
      provider: "local" as const,
    },
    outline: [3, 4] as const,
    outlineTitle: locale.outlineTitle,
    sidebar: buildSidebarWithOptions(localeContentRoot(localeKey), pathPrefix, {
      ignoredTopLevelDirs,
    }),
    footer: {
      message: "MipMap Desktop Documentation",
      copyright: `Copyright © ${new Date().getFullYear()} MipMap.`,
    },
  };
}

const locales = Object.fromEntries(
  Object.entries(localeSpecs).map(([localeKey, spec]) => {
    return [
      localeKey,
      {
        label: spec.label,
        lang: spec.lang,
        link: spec.path,
        themeConfig: makeLocaleTheme(spec.path, localeKey),
      },
    ];
  }),
) as Record<string, any>;

export default defineConfig({
  title: "MipMap Desktop",
  description: "MipMap Desktop",
  lang: "en-US",
  base: isDev ? "/" : "./",
  

  markdown: {
    config(md) {
      md.use(markdownItImageFigures, {
        figcaption: false,
        classes: "block-image",
      });
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
  },
  cleanUrls: true,
  lastUpdated: true,
  outDir: "../build",
  locales,
 
});

