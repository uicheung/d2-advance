module.exports = {
  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  configureWebpack: {
    entry: {
      app: ['./src/start.js']
    }
  }
}
