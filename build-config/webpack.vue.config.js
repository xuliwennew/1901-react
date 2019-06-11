const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")


module.exports = {
    mode:"development",
    entry:{
        app:path.resolve(__dirname,"../vue-jsx-demo/main.js")
    },
    output:{
        path:path.resolve(__dirname,"../vue-jsx-demo"),
        filename:"vue.bundle.js"
    },
    resolve: {
        extensions: [".css",".js",".vue",".jsx"]
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@vue/babel-preset-jsx"]
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
