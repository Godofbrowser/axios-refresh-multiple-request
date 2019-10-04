const validToken = '123abc'

module.exports = (req, res, next) => {
    const token = req.headers['Authorization'].split(' ').pop()
    console.log(token)

    if(req.path === '/refresh') {
      res.status(200).send({token: validToken})
    }

    if(req.path !== '/refresh' && token !== validToken) {
      res.status(401).send({error: 'unauthorized'})
    }

    next()
  }