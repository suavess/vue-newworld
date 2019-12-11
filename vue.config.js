const port = process.env.port || process.env.npm_config_port || 80 // dev port
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
  devServer: {
    port: port,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 请求的目标地址的BaseURL
        changeOrigin: true, // 是否开启跨域
        pathRewrite: {
          '^/api': '' // 规定请求地址以什么作为开头
        }
      }
    }
  }
}
