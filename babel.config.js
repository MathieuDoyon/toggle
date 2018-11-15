module.exports = {
  env: {
    cjs: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              browsers: ["last 2 versions"],
            },
          },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-transform-async-to-generator",
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
        [
          "module-resolver",
          {
            root: ["./src"],
          },
        ],
        ["import-rename", { "^(.*)\\.jsx$": "$1" }],
        "add-module-exports",
      ],
    },
  },
};
