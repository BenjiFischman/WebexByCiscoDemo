
const { EnvironmentPlugin } = require("webpack");

module.exports =  {
    //let them folks know we mean business
    mode: 'production',
    module: {
        //this comes later
      rules: []
        
      },
      plugins: [
        new EnvironmentPlugin({
            WEBEX_CLIENT_ID: "unknown",
            WEBEX_CLIENT_SECRET: 'unknown',
            WEBEX_REDIRECT_URI: 'unknown',
            WEBEX_SCOPE: 'unknown'
        })
      ]
  }