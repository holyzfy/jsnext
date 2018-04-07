require.config({
    baseUrl: 'build',
    bundles: {
        libs: ['vue', 'jquery', 'libs/slick-1.8.1/slick'],
        common: ['common', 'util']
    }
});