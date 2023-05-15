import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Request from 'App/Models/Request';

export default class RequestsController {
    async indexByClient({ response, params: { clientId } }: HttpContextContract) {
        const requests = await Request.query().where('client_id', clientId);
        return response.ok(requests);
    }

    async show({ response, params: { id } }: HttpContextContract) {
        const request = await Request.query()
            .where('id', id)
            .preload('client')
            .preload('receptionist')
            .preload('services')
            .preload('invoice')
            .firstOrFail();

        return response.ok(request);
    }
}
