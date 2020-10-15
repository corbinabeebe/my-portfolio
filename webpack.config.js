const path = require('path');

module.exports = {
    mode: "production",
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: [
                    path.resolve(__dirname, "/node_modules/")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react"]
                }
            }
        ]
    },
}