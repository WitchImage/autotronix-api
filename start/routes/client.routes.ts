import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/:id', 'ClientsController.show');
    Route.get('/document/:document', 'ClientsController.getByDocument');
}).prefix('clients');
