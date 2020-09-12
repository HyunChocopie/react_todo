const path = require('path'); //걍외워서 써
const webpack=require('webpack');
//webpack은 노드라서 import쓰면안되구 const써야햄
//다른 jsxㅍㅏ일은 바벨이 해주는것임..

module.exports = {

    mode: 'development', //* //실서비스->production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    
    entry: { //*
        app: './client',

    }, //입
    module: { //*
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['>1% in KR'],    //browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "react-hot-loader/babel",
                ],
            }
        }],
    },
    plugins:[ //*
        new webpack.LoaderOptionsPlugin({debug:true}),
    ],
    output: { //*
        path: path.join(__dirname, 'dist'), //현재경로안에 dist
        filename: 'app.js',
        publicPath:'/dist',
    }, //출
    //두개파일을 app.js로 합쳐서 html이 실행할수있게 만들어쥰다...
}