const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.FLUENTFFMPEG_COV': false
      })
    );

    config.externals.push('chrome-aws-lambda');

    return config;
  }
};
