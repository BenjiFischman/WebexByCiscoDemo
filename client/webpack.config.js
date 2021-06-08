const { merge  } = require('webpack-merge');

const common = require('./webpack.common.js');
const developmentConfig = require('./webpack.dev.js');
const productionConfig = require('./webpack.prod.js');

module.exports = env =>  {
  
    if(env.development){
      return merge(common, developmentConfig);
    } 
    else if(env.production){
      return merge(common, productionConfig);
    }
    else{
      throw new Error('No matching configuration was found!');
    }
};