export const SITE = {
  title: "Конституция Российской Федерации",
  description: "Конституция Российской Федерации",
  defaultLanguage: "ru_RU",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  Russian: "ru",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  ru: {
    "Раздел 1": [
      { text: "Глава 1", link: "ru/page-1" },
      { text: "Глава 2", link: "ru/page-2" },
      { text: "Глава 3", link: "ru/page-3" },
      { text: "Глава 4", link: "ru/page-4" },
      { text: "Глава 5", link: "ru/page-5" },
      { text: "Глава 6", link: "ru/page-6" },
      { text: "Глава 7", link: "ru/page-7" },
      { text: "Глава 8", link: "ru/page-8" },
      { text: "Глава 9", link: "ru/page-9" },
    ],
    "Раздел 2": [
      { text: "Заключительные и переходные положения", link: "ru/second-part" },
    ],
  },
};
