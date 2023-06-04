import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/profile/:userId', 'AdminsController.getByUserId');
}).prefix('admins');
