# Babel Plugin Mock Imports

Mock import statements with ease, for testing purposes.

## Quickstart

```
npm install babel-plugin-mock-imports --save-dev
```

Example usage in .babelrc:
```js
{
	"plugins": [
		["mock-imports", {
			"redirects": {
				{
					"pattern": ".(svg)$",
					"location": "path/to/mocked/react/component"
				},
				{
					"pattern": "^redux-form/es$",
					"location": "redux-form"
				}
			}
		}]
	]
}
```

The pattern is evaluated using the `RegExp` constructor.
