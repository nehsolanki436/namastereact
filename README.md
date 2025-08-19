# namastereact
React course code


# parcel
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorothm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compression
- Consitent Hashing
- Code splitting
- Differential Bundling - support older browser
- Diagnostics
- Error Hadnling
- Https
- Tree Shakings-- Means parcel will remove unused code
- Different dev and prod builds

# Babel
Features of Babel (JavaScript Compiler)
Babel is a powerful JavaScript compiler that enables developers to use modern JavaScript while ensuring compatibility with older environments. Here are its key features:

1️⃣ Transpilation of Modern JavaScript (ES6+)
Babel converts modern JavaScript (ES6, ES7, ESNext) into older versions that work in older browsers.
✅ Converts let and const into var
✅ Transforms arrow functions (=>) into regular functions
✅ Supports async/await and other new syntax

Example:

js
Copy
Edit
// Modern JavaScript (ES6)
const greet = () => console.log("Hello, Babel!");

// Transpiled to ES5
var greet = function () {
  console.log("Hello, Babel!");
};
2️⃣ JSX and React Support
Babel can transform JSX syntax (used in React) into standard JavaScript that browsers understand.
✅ Required for React applications
✅ Uses @babel/preset-react

Example:

jsx
Copy
Edit
// JSX Code (React)
const App = () => <h1>Hello, React!</h1>;

// Transpiled JavaScript
const App = function() {
  return React.createElement("h1", null, "Hello, React!");
};
3️⃣ TypeScript Support
Babel can compile TypeScript into plain JavaScript without type checking.
✅ Faster than TypeScript's native compiler
✅ Uses @babel/preset-typescript

4️⃣ Plugin and Preset System
Babel is highly modular with plugins and presets that control the transformations applied.
✅ Presets – Bundles of plugins for common needs
✅ Plugins – Individual transformations

Example of a .babelrc configuration file:

json
Copy
Edit
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
5️⃣ Polyfill Support for New Features
Babel can include polyfills (via core-js) to support missing features in older browsers.
✅ Required for features like Promises, Map, Set, etc.
✅ Uses @babel/preset-env with useBuiltIns: "usage"

Example:

sh
Copy
Edit
npm install core-js regenerator-runtime
json
Copy
Edit
{
  "presets": [
    ["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3 }]
  ]
}
6️⃣ Tree Shaking & Dead Code Elimination
Babel can remove unused code when used with bundlers like Webpack, optimizing performance.
✅ Reduces JavaScript bundle size
✅ Works well with ES module imports (import/export)

7️⃣ Compatibility with Webpack and Other Bundlers
Babel integrates seamlessly with tools like Webpack, Parcel, Rollup, and Gulp.
✅ Used with babel-loader for Webpack
✅ Supports modern workflows

Example Webpack config (webpack.config.js):

js
Copy
Edit
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
8️⃣ Code Minification and Optimization
Babel can be used with terser and other tools to minify JavaScript for better performance.
✅ Reduces file size
✅ Improves website speed

Example:

sh
Copy
Edit
npm install terser-webpack-plugin --save-dev
9️⃣ Experimental JavaScript Support
Babel allows developers to use proposed JavaScript features before they are officially added to the language.
✅ Supports decorators, class fields, optional chaining (?.), nullish coalescing (??), etc.
✅ Uses @babel/plugin-proposal-* plugins

Example:

js
Copy
Edit
// Optional Chaining
const user = { name: "Alice", address: { city: "NYC" } };
console.log(user.address?.city); // NYC
🔹 Summary
🚀 Babel's Key Features:
✅ Converts modern JavaScript to work in older browsers
✅ Supports JSX for React
✅ Works with TypeScript
✅ Uses plugins and presets for customization
✅ Includes polyfills for missing features
✅ Optimizes code with tree shaking
✅ Integrates with Webpack, Parcel, and Rollup
✅ Enables experimental JavaScript features


* Header
*  -Logo
*  -Nav Items
* Body
*  -Search
*  -ResturantContainer
*   -Menu Card
*  Footer
*  -Copyright
*  - Links
* In order to capture typing from brower we can use event object


**React Apps are called Single Page Applications
=> Because In traditional web development we used to have links and click of it loaded the entire page
=> Whereas in case of react we can only refersh components instead of entire page
=> This is done when website has constant header compnent and only the body component changes as per thr link clicked.
=> Then in this case react-router-dom library comes gives us Link component to related link to specific router path.
=> And this router path specifies the target component to be loaded.

There are two types of routing server wide routing and Client side routing.
=> In traditional web application when a link is clicked the network call is made to call the particular html page and then it is loaded to the screen.
=> But in react it it Client Side routing because no network calls are made because on initial loading of the website all the React components are already loaded.
So no, network calls are made.
