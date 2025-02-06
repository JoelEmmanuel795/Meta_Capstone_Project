const { override, addWebpackPlugin } = require('customize-cra');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (config) => {
  config.optimization = {
    minimize: true,
    minimizer: [
      '...', // Keep the default minimizers (e.g., TerserPlugin)
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default', {
            mergeLonghand: false,
            cssDeclarationSorter: false,
          }],
        },
      }),
    ],
  };
  return config;
};
