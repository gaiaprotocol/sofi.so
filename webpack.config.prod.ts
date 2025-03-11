import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";

const config: webpack.Configuration = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  entry: {
    __less: "./style/main.less",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            url: false,
          },
        }, "less-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".less"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};

export default config;
