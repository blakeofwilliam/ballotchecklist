const path = require('path')

module.exports = {
  poweredByHeader: false,
  target: 'serverless',
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@public': path.resolve(__dirname, './public')
    });

    return config
  }
}