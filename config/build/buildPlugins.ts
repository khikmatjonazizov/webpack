import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types";

export const buildPlugins = ({mode, paths}: BuildOptions): Configuration['plugins'] => {
  const isDev = mode === 'development';
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html })
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

  return plugins;
}