const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./example/src/example.tsx",
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example',
    index: './example/example.html',
    port: 8081
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Giphy Selector | Example',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: "ReactGiphySelector",
    libraryTarget: "umd"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.css$/,
        loader: "css-loader"
      }
    ]
  }
};