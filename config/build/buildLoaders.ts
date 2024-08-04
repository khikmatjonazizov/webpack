import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type RuleSetRule, type Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildLoaders = ({ mode }: BuildOptions): Configuration['module']['rules'] => {
  const isDev = mode === 'development';

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        "sass-loader",
    ],
  }

  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
};
