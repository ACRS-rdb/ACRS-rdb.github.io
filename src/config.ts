export const SITE = {
  website: "https://ACRS-rdb.github.io/", // replace this with your deployed domain
  author: "ACRS",
  profile: "https://ACRS-rdb.github.io/",
  desc: "The Automatic Control Research Society (ACRS@NTUT) at National Taipei University of Technology is dedicated to research and implementation in automatic control, mechatronics, and robotics. We focus on building an open technical community to cultivate R&D expertise and promote open-source culture through project development and knowledge sharing.",
  title: "ACRS",
  ogImage: "ACRS.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "auto", // "rtl" | "auto"
  lang: "zh-hant", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
