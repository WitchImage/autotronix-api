import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Request from 'App/Models/Request';

export default class RequestsController {
    async indexByClient({ response, params: { clientId } }: HttpContextContract) {
        const requests = await Request.findBy('client_id', clientId);
        return response.ok(requests ?? []);
    }
}
