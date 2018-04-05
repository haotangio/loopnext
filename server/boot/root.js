const path = require('path')
const next = require('next')
const routes = require('../../common/routes')

const dev = process.env.NODE_ENV !== 'production'

module.exports = async function (server) {
  const router = server.loopback.Router()

  const nextInstance = next({
    dev,
    dir: path.join(__dirname, '../../client')
  })
  await nextInstance.prepare()
  const handle = routes.getRequestHandler(nextInstance)
  router.get('*', (req, res, next) => {
    if (req.url.indexOf('/api') === 0) {
      return next()
    }
    handle(req, res, next)
  })

  server.use(router)
}
