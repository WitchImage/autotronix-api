import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Pqr from 'App/Models/Pqr';

export default class PqrsController {
    async index({ response }: HttpContextContract) {
        const pqrs = await Pqr.all();
        return response.ok(pqrs);
    }

    async show({ response, params: { id } }: HttpContextContract) {
        const pqr = await Pqr.query().where('id', id).preload('client').firstOrFail();
        return response.ok(pqr);
    }

    async store({ response, request }: HttpContextContract) {
        const { clientId, message } = request.body();
        const pqr = await Pqr.create({
            clientId,
            message,
        });

        return response.ok(pqr);
    }
}
