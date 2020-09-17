const path = require('path')

module.exports = {
  env: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
  },
  poweredByHeader: false,
  target: 'serverless',
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@public': path.resolve(__dirname, './public'),
      '@system': path.resolve(__dirname, './src/components/hack-ds')
    });

    return config
  }
}