/** @type {import('next').NextConfig} */


module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};
