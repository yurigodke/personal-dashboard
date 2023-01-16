const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'assets'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.htm(l)?$/,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            let result;

            try {
              const aliasObj = loaderContext._compiler.options.resolve.alias;
              result = content;
              for (var aliasKey in aliasObj) {
                var re = new RegExp(aliasKey, 'g');
                result = result.replace(re, aliasObj[aliasKey]);
              }
            } catch (error) {
              loaderContext.emitError(error);

              return content;
            }

            return result;
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
        generator: {
          dataUrl: content => {
            content = content.toString();
            return svgToMiniDataURI(content);
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'assets/images'),
    }
  }
};