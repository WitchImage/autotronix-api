import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/client/:clientId', 'RequestsController.indexByClient');
}).prefix('requests');
