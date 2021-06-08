const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: { path: path.join(__dirname, "dist"), filename: "bundle.js" },
    resolve: {
    //All flavors are welcome!
      extensions: [".tsx", ".ts", ".js",".jsx"],
      //Client Side Browser App with PWA functionality in mind for future work, so lets not assume much 
      fallback: {
        "fs": false,
        "path": false,
        //Webex dependencies
        "util": require.resolve("util"),
        "stream": require.resolve("stream-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "window.webex": require.resolve("webex")
    }},
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },

          //handle React and javascript 
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
        //handle typescript variations 
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
          },
          //handle static assets
          {
            test: /\.(pdf|jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"],
          },
          {
            test: /\.(css|scss)$/,
            use: [
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'postcss-loader'}
                ],
                exclude: /\.module\.(css|scss)$/
              },
          {
            test: /\.css$/,
            use: [             
              {loader:'style-loader'},
                {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      //Allows for specifitity in css
                      modules: { localIdentName: "[name]__[local]--[hash:base64:5]"},
                      sourceMap: true
                    }
                  },
              {loader:'postcss-loader'}
            ],
            include: /\.module\.(css|scss)$/
          }
        ],
      }
,
externals: {
  webex: 'webex'
},
plugins: [
    //Clean builds all day every day
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, "./src/index.html"),
        //Customize the html build and what we pass to the browser
        templateParameters(compilation, assets, options) {
            return {
              compilation: compilation,
              webpack: compilation.getStats().toJson(),
              webpackConfig: compilation.options,
              htmlWebpackPlugin: {
                files: assets,
                options: options
              },
              //this lets us call process.env in our codebase to access the secrets
              process,
            };
          },
          minify: {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true
          },
          nodeModules: false
          })
]
}