// module.exports = {
//   parser: "sugarss",
//   plugins: {
//     "postcss-import": {},
//     "postcss-preset-env": {},
//     cssnano: {}
//   }
// };

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("precss")
  ]
};
