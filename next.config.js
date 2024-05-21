/** @type {import('next').NextConfig} */


const {withNextVideo} = require('next-video/process');
// const createNextIntlPlugin = require('next-intl/plugin');

// const withNextIntl = createNextIntlPlugin({
//   i18n: './path/to/i18n.tsx', // Specify the custom location of your i18n configuration file
// });

// const nextConfig = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
//   output: "standalone",
// };

// module.exports = withNextIntl(nextConfig);


module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  module: {
    rules: [
      {
        test: /\.(mp4|avi|mov|wmv|flv|mkv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'videos/', // Folder to output the video files
            },
          },
        ],
      },
      // ... other rules
    ],
  },
}

// module.exports = withNextVideo(nextConfig)
