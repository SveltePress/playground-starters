'use strict'

function unavailable() {
  const err = Object.assign(
    new Error('Cannot load native addon because loading addons is disabled.'),
    { code: 'ERR_DLOPEN_DISABLED' },
  )
  throw err
}

class Resvg {
  constructor() {
    unavailable()
  }
}

module.exports = {
  Resvg,
  BBox: Resvg,
  RenderedImage: Resvg,
  render: unavailable,
  renderAsync() {
    return Promise.reject(Object.assign(
      new Error('Cannot load native addon because loading addons is disabled.'),
      { code: 'ERR_DLOPEN_DISABLED' },
    ))
  },
}
