function wrap(execute) {
  let error = null;
  return () => {
    if (error) return null;
    try {
      return execute.apply(this, arguments)
    } catch {
      error = true;
      return null;
    }
  }
}

module.exports = wrap;
