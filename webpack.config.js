const webpack = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  devtool: "source-map",
  //devtool: "inline-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["*", ".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
//   devServer: {
//     contentBase: "./dist",
//     historyApiFallback: {
//       index: "./index.html"
//     },
//     hot: true
//   }
};
