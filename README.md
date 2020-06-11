# Babel Plugin Mock Imports

[![npm version](https://img.shields.io/npm/v/babel-plugin-mock-imports.svg?style=flat-square)](https://www.npmjs.com/package/babel-plugin-mock-imports)

Babel plugin for redirecting imports to a different location.

## Quickstart

<b>npm:</b>
```sh
npm install babel-plugin-mock-imports --save-dev
```

<b>yarn:</b>
```sh
yarn add babel-plugin-mock-imports --dev
```

## Usage

<b>.babelrc:</b>
```json
{
  "plugins": [
    ["mock-imports", {
      "redirects": [
        {
          "pattern": ".(svg)$",
          "location": "path/to/mocked/react/component"
        },
        {
          "pattern": "^redux-form/es$",
          "location": "redux-form"
        }
      ]
    }]
  ]
}
```

<b>babel.config.js:</b>
```js
module.exports = {
  plugins: [
    ['mock-imports', {
      redirects: [
        {
          pattern: '.(svg)$',
          location: 'path/to/mocked/react/component'
        },
        {
          pattern: '^redux-form/es$',
          location: 'redux-form'
        }
      ]
    }]
  ]
}
```

<i>The pattern is evaluated using the `RegExp` constructor.</i>
