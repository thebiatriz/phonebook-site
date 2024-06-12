const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.BASE_URL,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};