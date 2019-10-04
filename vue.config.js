chainWebpack: config => {

  // add your custom entry point
  config
    .entry('"@babel/polyfill')
      .add('./src/main.js')
}


module.exports = {
  transpileDependencies: ['vuetify']
}
