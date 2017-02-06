import test from 'ava'
import plugin from '../src/index'
import * as babel from 'babel-core'

test('plugin', (t) => {
  let transformed = babel.transform("import Icon from 'assets/icon.svg'", {
    plugins: [[plugin, [
      {
        "pattern": ".(svg)$",
        "location": "path/to/noop"
      }
    ]]]
  })

  t.is(transformed.code, "import Icon from 'path/to/noop';")

  transformed = babel.transform("import { reduxForm } from 'redux-form/es'", {
    plugins: [[plugin, [
      {
        "pattern": "^redux-form/es$",
        "location": "redux-form"
      }
    ]]]
  })

  t.is(transformed.code, "import { reduxForm } from 'redux-form';")
})
