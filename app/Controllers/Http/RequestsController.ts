import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Request from 'App/Models/Request';

export default class RequestsController {
    async indexByClient({ response, params: { clientId } }: HttpContextContract) {
        const requests = await Request.query().where('client_id', clientId).preload('service');
        return response.ok(requests);
    }

    async show({ response, params: { id } }: HttpContextContract) {
        const request = await Request.query()
            .where('id', id)
            .preload('client')
            // .preload('receptionist')
            .preload('service')
            // .preload('invoice')
            .preload('inconvenients')
            .firstOrFail();

        return response.ok(request);
    }
}
