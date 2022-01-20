const sanitizeBody = (req, whiteList) =>
  Object.assign({}, new Proxy(req.body, { ownKeys: () => whiteList }))

module.exports = sanitizeBody
