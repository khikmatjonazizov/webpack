import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { type Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {
  const { mode, paths, analyzer } = options;

  const isDev = mode === 'development';
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      __MODE__: JSON.stringify(mode),
    }),
  ]

  if(isDev) {
    plugins.push(new ProgressPlugin())
    return plugins;
  }

  plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  )
  
  if(analyzer) {
    plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return plugins;
}