// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new dedicated package
    'autoprefixer': {},
  },
};