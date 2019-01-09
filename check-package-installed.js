try {
      express = require('express')
} catch (err) {
  if (err.code === 'MODULE_NOT_FOUND') throw new Error('Please install express package locally. $ yarn add express')
  throw err
}
