import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/', 'ServicesController.index');
}).prefix('services');
