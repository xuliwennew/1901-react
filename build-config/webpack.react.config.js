const path = require("path")


module.exports = {
    mode:"development",
    entry:{
        app:path.resolve(__dirname,"../single-component/main.js")
    },
    output:{
        path:path.resolve(__dirname,"../single-component"),
        filename:"app.bundle.js"
    },
    resolve: {
        extensions: [".css",".js",".jsx"]
    },
    module: {
        rules: [

            {
                test:/\.jsx$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@babel/preset-env","@babel/preset-react"],
                    "plugins" :["@babel/plugin-transform-react-jsx"]
                }
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@babel/preset-env","@babel/preset-react"],
                    "plugins" :["@babel/plugin-transform-react-jsx"]
                }
            }
        ]
    }
}
