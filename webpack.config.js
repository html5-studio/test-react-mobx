const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,
    optimization: {
        minimize: false
      },
    entry: [
        './src/js/index.js',
        ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './bind')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                    })
            },
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ],
                  }
                }
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: "main.css"}
        ),
    ]
};