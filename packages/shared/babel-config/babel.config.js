const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      root: ["./src"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      esm: {
        presets: ["@babel/typescript"],
        plugins: plugins,
      },
      cjs: {
        presets: ["@babel/typescript", ["@babel/env", { modules: "commonjs" }]],
        plugins: plugins,
      },
    },
  };
};
