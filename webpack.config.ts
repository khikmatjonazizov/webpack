import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'production' | 'development';

type EnvVariables = {
  mode: Mode;
  port?: number;
}

export default (env: EnvVariables): webpack.Configuration => {
  const isDev = env.mode === 'development'
  return {
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    mode: env.mode ?? 'development',
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      isDev && new webpack.ProgressPlugin()
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: isDev ? {
      port: env.port ?? 1313,
      open: true,
    } : undefined,
    devtool: isDev && 'inline-source-map',
  }
} 