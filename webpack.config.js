const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/client/js/main.js",
        videoPlayer: "./src/client/js/videoPlayer.js"
    }, 
    watch: true,
    plugins: [ new MiniCssExtractPlugin({
        filename: "css/styles.css",
    })],
    mode: "development",
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }

            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader , "css-loader", "sass-loader"]
            }
        ]
    }
};