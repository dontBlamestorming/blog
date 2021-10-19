const path = require("path");

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.join(__dirname, 'src/')
  //     }
  //   }
  // }
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
