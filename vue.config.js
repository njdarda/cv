module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/cv/' : '/',
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    quietDeps: true,
                },
            },
        },
    },
}
