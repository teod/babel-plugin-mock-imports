const test = require('ava')
const plugin = require('../src/index')
const babel = require('@babel/core')

test('plugin', (t) => {
  let transformed = babel.transform("import Icon from 'assets/icon.svg'", {
    plugins: [[plugin, {
      "redirects": [{
        "pattern": ".(svg)$",
        "location": "path/to/noop"
      }]
    }]]
  })

  t.is(transformed.code, 'import Icon from "path/to/noop";')

  transformed = babel.transform("import { reduxForm } from 'redux-form/es'", {
    plugins: [[plugin, {
      "redirects": [{
        "pattern": "^redux-form/es$",
        "location": "redux-form"
      }]
    }]]
  })

  t.is(transformed.code, 'import { reduxForm } from "redux-form";')
})
