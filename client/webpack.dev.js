const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');
//Nifty lil work around hack to boost development productivity
const env = dotenv.config({ path: './.example.env' }).parsed;
   module.exports =   {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, "src"),
      historyApiFallback: true },
      plugins: [
       new webpack.EnvironmentPlugin(env) 
         ]
 };