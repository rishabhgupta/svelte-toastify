const autoPreprocess = require('svelte-preprocess');

module.exports = {
  stories: ['../stories/**/*.stories.(js|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes('svelte-loader'),
    );
    svelteLoader.options.preprocess = autoPreprocess({
      typescript: {
        tsconfigFile: './tsconfig.json',
        transpileOnly: true,
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
