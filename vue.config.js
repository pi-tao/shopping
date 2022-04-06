module.exports = {
  // 关闭eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    host: "localhost",
    proxy: {
      "/api": {
        target: "http://39.98.123.211", //获取服务器的地址
        ws: true,
        changeOrigin: true,
      },
    },
  },
  publicPath: "./",
};
