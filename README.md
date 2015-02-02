# Sample express-browserify-react-sass-app
This repo contains an Express app that renders content with React isomorphically (both on the server and the client). Components are shared between server and client via Browserify and CommonJS modules. Grunt is used to build assets using Browserify and SASS. I'm not super cool so I didn't use Gulp.

## Installation
* Clone the Repo
* `npm install`
* `grunt`
* `nodemon -e handlebars,css,js server.js`
* Go to [localhost:6565](http://localhost:6565) in your browser

## Inspiration

This repo is inspired by work done by [David Wells](https://github.com/DavidWells/isomorphic-react-example/). Here are the main steps to make React render well server-side:

## Tips

1. Keep all your components outside of your static (public) directory. In this project, we have a top level `components` directory, storing our React components.

2. Use `.jsx` file extensions for React components. This makes life easier than calling `React.createFactory()` each time you want to `require` a component.

3. Have a `main.js` file that you'll use client-side to instantiate your React App. Ours is stored inside `public/src/js/main.js`. 

## How it works

1. Browserify (and Reactify) is used to compile all the `.jsx` React components into JS, and then concatenate them all into a single `app.min.js` file which is served client side. This all happens when you execute `grunt`.

```
grunt
```

2. The route handler in `server.js` requires the React App component and then renders it to a string:

```js
router.get('/', function (req, res) {
    var reactHtml = React.renderComponentToString(ReactApp({}));
    res.render('home', {
        reactOutput: reactHtml
    });
});
```

`ReactApp` is defined in `components/App.jsx` and is just a simple React component that has sub-components. 

3. The `reactOutput` HTML is sent unescaped to the main Handlebars layout file (`main.handlebars`), where it is rendered inside a DOM Node:

```html
<div id="react-container">{{{reactOutput}}}</div>
```

4. Once the page loads up, the JavaScript in `public/src/js/main.js` is executed, which has this line:

```js
var React = require('react/addons');
var App = require('../../../components/App.jsx');
var mountNode = document.getElementById('react-container');
React.renderComponent(new App({}), mountNode);
```

However, since the content has already been mounted server-side inside `#react-container`, React will realize that no additional DOM manipulations are needed. It will only add the necessary event listeners to make the component interactive. In this case, it means adding a `setTimeOut()` call to re-render the component every second.


---

This app is built using [Bedrock](http://tilomitra.github.io/bedrock).
