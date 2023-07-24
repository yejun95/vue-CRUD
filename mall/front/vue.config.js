const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8001',
        changeOrigin: true, // 클라이언트의 Origin 헤더 값을 변경하여 서버와 통신이 가능하게 만듬
        // ws: false, // 웹소켓 끔 
      },
    },
  }
})





