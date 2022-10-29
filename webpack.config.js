const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev

const optimization = () => {
   const config = {
      splitChunks: {
         chunks: 'all'
      }
   };

   if (isProd) {
      config.minimize = [
         new OptimizeCssAssetWebpackPlugin(),
         new TerserWebpackPlugin()
      ]
   }

   return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
   const loaders = [
      {
         loader: MiniCssExtractPlugin.loader,
         options: {
            hmr: isDev,
            reloadAll: true
         },
      },
      'css-loader', //for head style, and 2)external css
   ]

   if (extra) {
      loaders.push(extra)
   }

   return loaders;
}

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development', //по умолчанию не сжимает файлы
   entry: {
      main: ['@babel/polyfill', './app.js'], //точки входа
      haeder: './components/Haeder/Header.js'
   },
   output: { // все собирает в один файл
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist')
   },
   resolve: {
      extensions: ['.js', 'json', '.png'], //расширения( extensions) по умалчанию, если ничего не отмечено
      alias: {
         '@models': path.resolve(__dirname, 'src/models'),
         '@Header': path.resolve(__dirname, 'src/Header') //относительные пути,../../ абсолютные пути заменяются относительными.. 
      }
   },
   optimization: optimization(),
   devServer: {
      port: 4200,
      open: true,
      hot: isDev
   },
   plugins: [
      new HTMLWebpackPlugin({ //добавляет html в папку dist 
         template: './src/index.html', // добавляет необходимые js файлы в html 
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new CleanWebpackPlugin(), //удаляет старые файлы из dist, оставляя самую поседную
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/images/added.svg'),
               to: path.resolve(__dirname, 'dist')
            }
         ]
      }),
      new MiniCssExtractPlugin({
         filename: filename('css')
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/, //как только webpack в import-ах встречает .css, он использует определенный тип loader-ов
            use: cssLoaders()
         },
         {
            test: /\.less$/, //как только webpack в import-ах встречает .less, он использует определенный тип loader-ов
            use: cssLoaders('less-loader')
         },
         {
            test: /\.s[ac]ss$/, //как только webpack в import-ах встречает .less, он использует определенный тип loader-ов
            use: cssLoaders('sass-loader')
         },
         {
            test: /\.(png|jpg|svg|gif)$/, //webpack распазнует эти типы файлов 
            use: ['file-loader']
         },
         {
            test: /\.(tff|woff|woff2|eot)$/, // для распознания расширений хорактерные для шрифтов 
            type: 'asset/resource'
         },
         {
            test: /\.xml$/,
            use: ['xml-loader']
         },
         {
            test: /\.csv$/,
            use: ['csv-loader']
         },
         {
            test: /\.js$/,
            exclude: /node-modules/,
            loader: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env'
                  ],
                  plugins: [
                     '@babel/plugin-proposal-class-properties'
                  ]
               }
            }
         },
         {
            test: /\.ts$/,
            exclude: /node-modules/,
            loader: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env',
                     '@babel/preset-typescript'
                  ],
                  plugins: [
                     '@babel/plugin-proposal-class-properties'
                  ]
               }
            }
         }
      ]
   }
} 