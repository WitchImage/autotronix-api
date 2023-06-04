import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Admin from 'App/Models/Admin';

export default class AdminsController {
    async getByUserId({ response, params: { userId } }: HttpContextContract) {
        const admin = await Admin.query().where('user_id', userId).preload('user').firstOrFail();

        return response.ok(admin);
    }
}
