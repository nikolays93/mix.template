const mix = require('laravel-mix')
const CompressionPlugin = require('compression-webpack-plugin')

require('laravel-mix-imagemin')
require('mix-html-builder')

const PATH = {
    public: 'public/',
    source: 'src/',
    assets: 'assets/',
}

const pipe = mix
    // sets public path for manifest file
    .setPublicPath(PATH.public)

    // bundles js: (from, to)
    .js(PATH.source + PATH.assets + 'script.js', PATH.public + PATH.assets)

    // compiles sass and add css3 prefixes: (from, to)
    .sass(PATH.source + PATH.assets + 'style.scss', PATH.public + PATH.assets)

!mix.inProduction() ?
    pipe
        .html({
            htmlRoot: PATH.source + '**/*.html',
            output: './',
        })

        // serves assets and sync with browser sync
        .browserSync({ server: PATH.public, watch: true, proxy: null }) :
    pipe
        .html({
            htmlRoot: PATH.source + '**/*.html',
            output: './',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })

        // Compresses assets
        .webpackConfig({ plugins: [ new CompressionPlugin() ] })
