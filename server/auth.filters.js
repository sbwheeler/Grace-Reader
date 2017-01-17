const mustBeLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send('You must be logged in')
  }
  next()
}

const selfOnly = action => (req, res, next) => {
  if (+req.params.userId !== req.user.id) {
    return res.status(403).send(`You can only ${action}`)
  }
  next()
}

const forbidden = message => (req, res, next) => {
  res.status(403).send(message)
}

const adminOnly = (req, res, next) => {
  if (!req.user.adminStatus) {
    return res.status(401).send('You must be logged in')
  } else if (req.user.adminStatus) {
    next()
  } else {
    return res.status(403).send('Admin access only')
  }
}

module.exports = {mustBeLoggedIn, selfOnly, forbidden, adminOnly}
