import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Client from 'App/Models/Client';
import User from 'App/Models/User';

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
        const client = await Client.query()
            .where('user_id', userId)
            .preload('user')
            .preload('vehicles')
            .firstOrFail();

        return response.ok(client);
    }

    async update({ request, response, params: { clientId } }: HttpContextContract) {
        const { name, surname, address, phone, email } = request.body() as unknown as {
            name: string;
            surname: string;
            address: string;
            phone: string;
            email: string;
        };

        const client = await Client.findOrFail(clientId);
        const user = await User.findOrFail(client.userId);

        await client
            .merge({
                name,
                surname,
                address,
                phone,
            })
            .save();

        await user.merge({ email }).save();

        const clientUpdated = await Client.query()
            .where('id', clientId)
            .preload('user')
            .preload('vehicles')
            .firstOrFail();

        return response.ok(clientUpdated);
    }
}
