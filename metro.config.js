


// const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);



const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { resolve } = require('path');

module.exports = (async () => {
  // Fetch the default configuration
  const defaultConfig = await getDefaultConfig(__dirname);

  // Destructure the necessary properties
  const { resolver: { sourceExts, assetExts } } = defaultConfig;

  // Customize the config
  const customConfig = {
    transformer: {
      babelTransformerPath: resolve('node_modules/react-native-svg-transformer/index.js'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };

  // Merge the default config with the custom config
  return mergeConfig(defaultConfig, customConfig);
})();
