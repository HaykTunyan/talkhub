/** @type {import('next').NextConfig} */


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
};
