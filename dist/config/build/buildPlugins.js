import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { DefinePlugin, ProgressPlugin } from "webpack";
export var buildPlugins = function (options) {
    var mode = options.mode, paths = options.paths, analyzer = options.analyzer;
    var isDev = mode === 'development';
    var plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new DefinePlugin({
            __MODE__: JSON.stringify(mode),
        }),
    ];
    if (isDev) {
        plugins.push(new ProgressPlugin());
        return plugins;
    }
    plugins.push(new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    }));
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
};
