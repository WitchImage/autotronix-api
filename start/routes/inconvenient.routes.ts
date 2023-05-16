import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get('/client/:clientId', 'InconvenientsController.indexForClient').middleware('auth');
    Route.get('/request/:requestId', 'InconvenientsController.indexForRequest').middleware('auth');
}).prefix('inconvenients');
