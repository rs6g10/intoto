const path =  require("path");
const commonLoaders = [{ test: /\.js$/, loader: "jsx-loader" }];
const assetsPath = path.join(__dirname,'public','assets');
const publicPath = 'assets/';

module.exports = [
    {
        name: 'browser',
        entry: './src/client/entry.js',
        output: {
            path: assetsPath,
            filename: 'bundle.js',
            publicPath: publicPath
        },
        module: {
            loaders: commonLoaders.concat({ test: /\.css$/, loader: "style-loader!css-loader" })
        }
    }
];
