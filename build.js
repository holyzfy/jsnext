{
    baseUrl: './js',
    dir: './build',
    paths: {
        './libs': '../libs',
        'jquery': '../libs/jquery',
        'vue': '../libs/vue'
    },
    optimizeCss: 'none',
    optimize: 'none',
    modules: [
        {
            name: 'libs',
            include: ['vue', 'jquery', 'libs/slick-1.8.1/slick'],
            create: true
        },
        {
            name: 'common',
            include: ['common', 'util'],
            create: true
        }
    ],
    bundlesConfigOutFile: '../production.config.js'
}
