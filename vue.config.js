const path = require('path')

module.exports = {
    transpileDependencies: true,
    publicPath: process.env.LOCAL_BUILD === 'true' ? '/' : process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    productionSourceMap: process.env.JS_SOURCE_MAP === 'true' ? true : false,
    css: {
        sourceMap: process.env.CSS_SOURCE_MAP === 'true' ? true : false,
    },
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './src/service-worker.ts',
        },
    },
    chainWebpack: (config) => {
        config.module.rule('svg').use('file-loader').loader('svg-inline-loader')
    },
}
