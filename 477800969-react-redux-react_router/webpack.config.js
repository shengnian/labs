var config = {} 
,   path = require('path') 
,   curPath = 'app/'
,   webpack = require('webpack');

/////////////////////////////////////////
// ---------------config-------------- //
/////////////////////////////////////////

// entry
    config.entry  = [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, curPath + 'main.js')
    ];
    //

// output
    config.output = {
        path:path.resolve(__dirname, 'dist/'),
        filename:'[name].min.js'
    }

// loaderscd
    config.module ={
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loaders:[ "react-hot-loader", "babel-loader"],
                include: __dirname
            },
            {
                test:/\.(css|less)/,
                loader:"style!css!less"
            }
        ]
    }

// // resolve
//     config.resolve={
//         extensions : [ '', 'js', 'jsx' ]
//     }

// plug
    config.plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/commons.js',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            Redux: 'redux',
            ReactDOM: 'react-dom',
            Router: 'react-router',

        }),
        new webpack.HotModuleReplacementPlugin(),
    ];

// watch
    if(process.env.NODE_ENV === '1'){
        config.watch=true;
    };

// server
    config.devServer = {
        contentBase:'./dist/',
        hot:true
    }

module.exports = config;