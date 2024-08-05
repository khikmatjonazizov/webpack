import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';
export default (function (env) {
    var _a, _b, _c;
    var paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 1313,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        paths: paths,
        analyzer: (_c = env.analyzer) !== null && _c !== void 0 ? _c : false,
    });
    return config;
});
