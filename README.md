# Test Driven Development 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
### Webpack 
1.  `const path = require('path');`: This line imports the `path` module, which provides utilities for working with file and directory paths.
    
2.  `const HtmlWebpackPlugin = require('html-webpack-plugin');`: This line imports the `html-webpack-plugin`, which simplifies the creation of HTML files to serve your webpack bundles.
    
3.  `module.exports = {`: This line exports your webpack configuration object so it can be used in other files.
    
4.  `entry: './src/index.tsx',`: The entry point to your application. Webpack starts bundling from this file.
    
5.  `resolve: {`: This section configures how modules are resolved.
    
6.  `extensions: ['.tsx', '.ts', '.js'],`: This tells Webpack to automatically resolve extensions for TypeScript and JavaScript files.
    
7.  `output: {`: This section defines where Webpack outputs the bundles it creates and how it names these files.
    
8.  `path: path.resolve(__dirname, 'dist'),`: This line sets the output directory to the `dist` folder at your project's root.
    
9.  `filename: 'bundle.js',`: This line names the output bundle file as `bundle.js`.
    
10.  `publicPath: '/',`: This specifies the public URL of the output directory when referenced in a browser.
    
11.  `module: {`: This section configures how different types of modules are treated.
    
12.  `rules: [`: This array allows you to specify several loader rules. Loaders allow Webpack to process other types of files and convert them into valid modules that can be used by your application and added to the dependency graph.
    
13.  `{ test: /\.(ts|tsx)$/, exclude: /node_modules/, use: [ { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], }, }, ] },`: This rule tells Webpack to use `babel-loader` for `.ts` and `.tsx` files (but not files in `node_modules`). Babel is configured to use the `env`, `react`, and `typescript` presets.
    
14.  `{ test: /\.css$/, use: ['style-loader', 'css-loader'], },`: This rule tells Webpack to use `style-loader` and `css-loader` for `.css` files.
    
15.  `plugins: [ new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html'), }), ],`: This section is used for adding plugins to your configuration. The HtmlWebpackPlugin is configured to generate an HTML file that includes all your webpack bundles in the script tags.
    
16.  `devServer: { historyApiFallback: true, },`: The `devServer` field is a set of options used when setting up the webpack-dev-server, a little Node.js Express server. The `historyApiFallback: true` option is used for single-page applications that should respond to routing events as if the page were being served as a static HTML file.


## 🌿 File Tree
```bash
📦 jest
├─ dist
│  ├─ bundle.js
│  └─ index.html
├─ public
│  └─ index.html
├─ src
│  ├─ App.tsx
│  ├─ __tests__
│  │  ├─ App.test.tsx
│  │  └─ setup.tsx
│  └─ index.tsx
├─ .babelrc
├─ .gitignore
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ webpack.config.js
```







| Developed By       | Github          | LinkedIn        |
| :------------------: | :-------------: | :-------------: |
| Miri Son | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/msoncsswe) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miri-son/) |
| Kenny Nguyen | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kennysghub) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kenknguyen/) |
 