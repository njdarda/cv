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
            exclude: [
                /\/no-sw-precache\//,
                /img\//,
                'index.html',
                'robots.txt',
            ],
            swSrc: './src/service-worker.ts',
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'node_modules'),
            },
        },
    },
    chainWebpack: (config) => {
        config.module.rule('svg').use('file-loader').loader('svg-inline-loader')
    },
}
