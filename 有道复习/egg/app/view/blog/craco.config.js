const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve(__dirname, './../dist'); //ts和less编译后的文件
      paths.appBuild = path.resolve(__dirname, './../dist'); //public中的文件
      return webpackConfig;
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
};
