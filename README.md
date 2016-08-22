# React-babel-webpack-es6 Starter Project

A boilerplate using React, webpack and hot module reloading, and ES6 + JSX via Babel.You could use it as a base to build your own web app.

## Features

The provided boilerplate enables client-side ES6 via the following technologies:

- [webpack](http://webpack.github.io/) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [npm](https://www.npmjs.com/) as a package manager and task runner
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [ESLint](http://eslint.org/) as a reporter for syntax and style issues. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.
- [Sass](http://sass-lang.com/) as a compiler of CSS styles with variables, mixins, and more.
- Inline base64 URLs for images and fonts if their size is less than specified limit of [file-loader](https://github.com/webpack/file-loader)
- Image compression processing of  [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
- Watch `index.html` for changes of [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)

## Getting Started

### Installation

you should clone the repo and install the dependencies.

```
$ git clone https://github.com/chenbin92/react-redux-webpack-starter.git app-name
$ cd app-name
$ npm install  //or cnpm install
```

## Development
In the development mode. launch the boilerplate app：

```
// run the dev server http://localhost:8080

$ npm start  
```

you should see a new browser tap opening and a title of "Hello React” in [http://localhost:8080/](http://localhost:8080/), page hot reloads automatically when there are changes

![Webpack-dashboard](http://i2.buimg.com/4851/c971b58acc349be2.png)
![homepage](https://cloud.githubusercontent.com/assets/3995814/16775798/ef9cf446-4894-11e6-9510-af171fec3107.png)

When you run npm start:

- The sass-loader compiles Sass into CSS
- Webpack bundles the compiled CSS、JS  into `bundle.js` 

## Production

In the production mode,  you can:

```
// run the prod server http://localhost:9090

$ npm run start: prod
```

```
// build the static files.

$ npm run build 
```

```npm run build```. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to production so that React is built in production mode
- Places the resulting built project files into `/build` directory

## All configuration tasks

-  `npm start`:  start the development model of server
-  `npm run start:prod`: start the production model of server
-  `npm run build`: compile code in production mode
-  `npm run lint`:  lint with ESlint and Airbnb's style sheet. 
-  `npm run lint:watch`: eslint watching
-  `npm run remove:build`: remove the dist directory
-  `npm run clean:build `:  clean the dist directory

## TODO

- [ ] add test

## Others

* [more information](https://github.com/chenbin92/react-redux-webpack-starter/issues/1)
