import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Client from 'App/Models/Client';

export default class ClientsController {
    async show({ response, params: { id } }: HttpContextContract) {
        const client = await Client.findOrFail(id);
        return response.ok(client);
    }

    async getByDocument({ response, params: { document } }: HttpContextContract) {
        const client = await Client.query()
            .where('document', document)
            .preload('user')
            .firstOrFail();

        return response.ok(client);
    }

    async getByUserId({ response, params: { userId } }: HttpContextContract) {
        const client = await Client.query().where('user_id', userId).preload('user').firstOrFail();

        return response.ok(client);
    }
}
