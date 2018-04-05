const routes = require('next-routes')()

routes
  .add('login')
  .add('dashboard')
  .add('/cvs/:id/edit', 'cv-edit')

module.exports = routes
