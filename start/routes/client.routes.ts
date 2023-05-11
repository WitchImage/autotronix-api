import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/:id', 'ClientsController.show');
    Route.put('/:clientId', 'ClientsController.update').middleware('auth');
    Route.get('/document/:document', 'ClientsController.getByDocument');
    Route.get('/profile/:userId', 'ClientsController.getByUserId').middleware('auth');
}).prefix('clients');
