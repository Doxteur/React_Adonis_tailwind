import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import AutoSwagger from 'adonis-autoswagger'
import AuthController from 'App/Controllers/Http/AuthController'
import swagger from 'Config/swagger'

// Groupe de routes authentifiées
Route.group(() => {
  Route.get('/', async () => {
    return await Database.from('users').select('*')
  })
}).middleware('auth')

// Routes d'authentification
Route.group(() => {
  Route.post('/login', 'AuthController.login').as('auth.login')
  Route.post('/logout', 'AuthController.logout').as('auth.logout')
  Route.get('/me', 'AuthController.me').as('auth.me')
  Route.post('/register', 'AuthController.register').as('auth.register')
}).prefix('/auth')

// Routes de documentation
Route.get('/swagger', async () => {
  return AutoSwagger.docs(Route.toJSON(), swagger)
})
Route.get('/docs', async () => {
  return AutoSwagger.ui('/swagger', swagger)
})
