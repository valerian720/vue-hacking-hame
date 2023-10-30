const { defineConfig } = require("@vue/cli-service");
const { gitDescribeSync } = require("git-describe");
//
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;
process.env.VUE_APP_BUILD_DATETIME = new Date().toLocaleString();

//
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-hacking-hame/" : "/",
  transpileDependencies: true,
  // auto fix on save
  chainWebpack: (config) => {
    config.plugin("eslint").tap((args) => {
      args[0].fix = true;
      return args;
    });
  },
});
