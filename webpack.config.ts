import { type Configuration } from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import type { BuildMode, BuildPaths } from './config/build/types';
import path from 'path';

type EnvVariables = {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
}

export default (env: EnvVariables): Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const config = buildWebpack({
    port: env.port ?? 1313,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer ?? false,
  });

  return config;
} 