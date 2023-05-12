import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/client/:clientId', 'RequestsController.indexByClient').middleware('auth');
    Route.get('/:id', 'RequestsController.show').middleware('auth');
}).prefix('requests');
