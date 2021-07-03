const { resolve } = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '.', 'src'),
    }

    // config.module.rules.map((rule) => {
    //   if (rule.test?.toString?.().includes('scss')) {
    //     rule.use = [
    //       ...rule.use,
    //       {
    //         loader: 'sass-loader',
    //         options: {
    //           modifyVars: {
    //             '@ant-prefix': 'rc-main',
    //           },
    //           javascriptEnabled: true,
    //         },
    //       },
    //     ]
    //   }
    // })

    return config
  },
}
