const webpack = require('webpack');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = (env) => {

    const { NODE_ENV } = env;

    return {
        target: 'node',
        mode: 'none',
        entry: { bundle: "src/main.ts" },
        output: { path: __dirname + "/dist", filename: "[name].js" },
        optimization: { minimize: false },
        resolve: {
            extensions: ['.ts', '.js'],
            plugins: [ 
                new TsconfigPathsPlugin({}),
                new Dotenv({ path: `environments/${ NODE_ENV }.env` })
            ]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        devtool: "inline-source-map",
        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: '[name].js.map',
                exclude: /^(.*?(vendor)[^$]*)$/
            })
        ]
    }
}
