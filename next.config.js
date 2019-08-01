const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass());

// module.exports = withCss({
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 8192,
//           publicPath: './',
//           outputPath: 'static/css/',
//           name: '[name].[ext]'
//         }
//       }
//     })

//     return config
//   },

//   publicRuntimeConfig: {
//     GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT
//   }
// })
