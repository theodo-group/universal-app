module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      esm: {
        presets: ["@babel/typescript"],
        plugins: [
          [
            require.resolve("babel-plugin-module-resolver"),
            {
              root: ["./src"],
              extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
          ],
        ],
      },
      cjs: {
        presets: ["@babel/typescript", ["@babel/env", { modules: "commonjs" }]],
        plugins: [
          [
            require.resolve("babel-plugin-module-resolver"),
            {
              root: ["./src"],
              extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
          ],
        ],
      },
    },
  };
};
