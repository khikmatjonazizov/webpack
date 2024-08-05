import MiniCssExtractPlugin from "mini-css-extract-plugin";
export var buildLoaders = function (_a) {
    var mode = _a.mode;
    var isDev = mode === 'development';
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    };
    var svgRLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ]
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    };
    return [assetLoader, svgRLoader, scssLoader, tsLoader];
};
