const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/style/imports.scss")]
    });
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/cart" : "/",

  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },

  // 模拟数据
  devServer: {
    // before(app) {
    //   // app是express的实例
    //   app.get('/api/courses',(req,res)=> {
    //     setTimeout(() => {
    //       res.json([{ name: "web全栈" }, { name: "web高级" }])
    //     }, 1000);
    //   })
    // }
    proxy: "http://localhost:3000"
  },

  lintOnSave: false
};
