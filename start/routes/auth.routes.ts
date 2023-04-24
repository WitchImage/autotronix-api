import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.post('/register-client', 'UsersController.storeWithClient');
    Route.post('/login', 'UsersController.login');
}).prefix('auth');
