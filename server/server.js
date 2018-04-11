// import User from '../common/entities/User'
import loopback from 'loopback'
import boot from 'loopback-boot'
import winston from 'winston'

const app = loopback()
export default app

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started')
    const baseUrl = app.get('url').replace(/\/$/, '')
    winston.info(`Web server listening at: ${baseUrl}`)
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath
      winston.info(`Browse your REST API at ${baseUrl}${explorerPath}`)
    }
  })
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err

  // start the server if `$ node server.js`
  if (require.main === module) {
    console.log('start server')

    app.start()
  }
})
