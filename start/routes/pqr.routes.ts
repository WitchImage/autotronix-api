import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/', 'PqrsController.index').middleware('auth');
    Route.get('/:id', 'PqrsController.show').middleware('auth');
    Route.post('/', 'PqrsController.store').middleware('auth');
}).prefix('pqrs');
