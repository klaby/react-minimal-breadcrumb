<div align="center">
    <img src="https://github.com/hiukky/react-minimal-breadcrumb/blob/master/logo.png" width="300x300" height="300" />
    <h1> ... React Minimal Breadcrumb ... </h1>
</div>

<div align="center">
  <img src="https://travis-ci.org/hiukky/react-minimal-breadcrumb.svg?branch=master">
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://github.com/hiukky">Romullo</a>
  <br><br>
</div>

React Minimal Breadcrumb is an easy way to generate your breadcrumbs tracks.

## &#10003; Instalation

### Install
```
yarn add react-minimal-breadcrumb
```
#### or
```
npm i react-minimal-breadcrumb
```
## &#10003; Structure
```bash
├── node_modules
├── src
│   ├── Breadcrumb.js
│   ├── index.js
├── .editorconfig
├── .gitignore
├── .travis.yml
├── package.json
├── README.md
├── LICENCE.md
├── logo.png
└── rmb.png
```

## &#10003; How to use

React Minimal Breadcrumb uses the react-router-dom. to use it in your project you need to include it inside the switch passing the property routes with a defined route

#### routes.js
```js
const Routes = [
  {
    route: '/',
    name: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    page: pages.Dashboard,
  },
  {
    route: '/users',
    name: 'Users',
    icon: 'fas fa-users',
    page: pages.Users,
  },
]

export default Routes;
```

#### Switch
With the routes defined .. now you just need to include your <Breadcrumb /> by passing the prop routes with the routes.

```js
import { Switch } from 'react-router-dom';
import Breadcrumb from 'react-minimal-breadcrumb';

  <Switch>
    <Breadcrumb routes={routes} />
  </Switch>
```

## &#10003; Finishing

If everything went well you will have a result as in the example below. :)

<p>&#10004; <a href="https://hiukky.github.io/dashmin-react/"> Demo </a></p>
<img src="https://github.com/hiukky/react-minimal-breadcrumb/blob/master/rmb.png" />

## &#10003; License

MIT © [Romullo](https://github.com/hiukky)
