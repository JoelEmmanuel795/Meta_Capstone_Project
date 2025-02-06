const { override, addWebpackPlugin } = require('customize-cra');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override((config) => {
  config.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          preset: ['default', {
            mergeLonghand: false,
            cssDeclarationSorter: false,
          }],
        },
      }),
    ],
  };
  return config;
});
