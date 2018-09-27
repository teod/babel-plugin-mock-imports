module.exports = function (args) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const t = args.types
        const givenPath = path.node.source.value

        const redirects = state.opts.redirects

        if (!Array.isArray(redirects)) {
          throw new Error('Redirects option is required and must be an Array of Objects Array<{ pattern: string, location: string }>');
        }

        redirects.forEach((opt) => {
          const pattern = opt.pattern
          const location = opt.location
          const regEx = new RegExp(pattern, 'i')

          if (typeof givenPath === 'string' && regEx.test(givenPath) === true) {
            path.node.source.value = location
          }
        })
      }
    }
  }
}
