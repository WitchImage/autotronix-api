import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Inconvenient from 'App/Models/Inconvenient';

export default class InconvenientsController {
    async indexForClient({ response, params: { clientId } }: HttpContextContract) {
        const inconvenients = await Inconvenient.query()
            .innerJoin('requests', (requestQuery) => {
                requestQuery.on('inconvenients.request_id', '=', 'requests.id');
            })
            .where('requests.client_id', clientId);
        return response.ok(inconvenients);
    }

    async indexForRequest({ response, params: { requestId } }: HttpContextContract) {
        const inconvenients = await Inconvenient.query()
            .innerJoin('requests', (requestQuery) => {
                requestQuery.on('inconvenients.request_id', '=', 'requests.id');
            })
            .where('requests.id', requestId);
        return response.ok(inconvenients);
    }
}
