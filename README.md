# Babel Plugin Mock Imports

Mock import statements with ease, for testing purposes inside a NodeJS environment.

## Quickstart

```
npm install babel-plugin-mock-imports --save-dev
```

Example usage in .babelrc:
```js
{
	"plugins": [
	  ["./src/import-mock-plugin.js", [
		{
		  "pattern": ".(svg)$",
		  "location": "path/to/mocked/react/component"
		},
		{
    	  "pattern": "^redux-form/es$",
	      "location": "redux-form"
		}
	  ]]
	]
}
```

The pattern is evaluated using the `RegExp` constructor.