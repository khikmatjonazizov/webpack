import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
export var buildWebpack = function (options) {
    var mode = options.mode, paths = options.paths;
    var isDev = mode === 'development';
    return {
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        mode: mode,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && 'inline-source-map',
    };
};
