// config-overrides.js
module.exports = function override(config, env) {
    // Check if optimization and minimizers exist
    if (config.optimization && Array.isArray(config.optimization.minimizer)) {
      config.optimization.minimizer.forEach((minimizer) => {
        // Adjust the cssProcessorOptions if they exist
        if (
          minimizer.options &&
          minimizer.options.cssProcessorOptions &&
          minimizer.options.cssProcessorOptions.preset
        ) {
          // Disable merging longhand properties and CSS declaration sorting
          minimizer.options.cssProcessorOptions.preset = [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false,
            },
          ];
        }
      });
    }
    return config;
  };
