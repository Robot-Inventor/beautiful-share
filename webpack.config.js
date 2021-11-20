const path = require("path");

module.exports = {
    mode: "production",
    devtool: false,
    entry: {
        background: "./src/background.ts",
        main: "./src/main.ts"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
