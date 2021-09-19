module.exports = {
    publicPath: process.env.LOCAL_BUILD ? '/' : process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    productionSourceMap: process.env.JS_SOURCE_MAP ? true : false,
    css: {
        sourceMap: process.env.CSS_SOURCE_MAP ? true : false,
        loaderOptions: {
            sass: {
                sassOptions: {
                    quietDeps: true,
                },
            },
        },
    },
}
