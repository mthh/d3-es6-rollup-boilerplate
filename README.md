### d3-es6-rollup boilerplate

Yet another boilerplate for d3 project with ES6.

#### Included features
- [ESLint](http://eslint.org/) (airbnb code style)
- Transpile ES6 code with [Babel](https://babeljs.io/)
- Use [rollup](https://rollupjs.org/) to bundle Javascript code, including libraries (such as *d3-geo* features here)
- Compress code with [Uglify](https://github.com/TrySound/rollup-plugin-uglify)
- Development [server](https://github.com/thgh/rollup-plugin-serve) with automated rebuild on code source change with [rollup-watch](https://github.com/rollup/rollup-watch).


#### Requirements

- Node.js and npm


#### Getting started

Install the dependencies:
```
npm install
```

Start the development server, and watch for changes:
```
npm run dev
```

Just build the code:
```
npm run build
```

Or build the code and watch for changes :
```
npm run watch
```
