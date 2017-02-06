module.exports = function (args) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const t = args.types
        const givenPath = path.node.source.value

        state.opts.forEach((opt) => {
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
