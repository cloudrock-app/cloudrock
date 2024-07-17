import path from 'node:path';

const SRC_DIR = path.join(path.resolve(), '/src');
const DIST_DIR = path.join(path.resolve(), '/public/dist');

const css = ['style-loader', 'css-loader'];
const scss = ['style-loader', 'css-loader', 'sass-loader'];

const config = {
  entry: `${SRC_DIR}/App.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devServer: {
    contentBase: './public/dist',
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                '@babel/preset-react',
                ['@babel/preset-typescript', { jsxPragma: 'h' }],
              ],
            },
          },
        ],
      },
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
      {
        test: /\.css$/,
        use: css,
      },
      {
        test: /\.s[ac]ss$/,
        use: scss,
      },
      {
        test: /\.(png|ttf|jp(e*)g)$/,
        use: 'url-loader?limit=100000&name=img/[name].[ext]',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader?limit=100000&name=img/[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '...'],
  },
  experiments: {
    topLevelAwait: true,
  },
  devtool: 'source-map',
};

export default config;
