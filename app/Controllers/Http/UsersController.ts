import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UnAuthorizedException from 'App/Exceptions/UnauthorizedException';
import Client from 'App/Models/Client';
import User from 'App/Models/User';

export default class UsersController {
    async index({ response }: HttpContextContract) {
        const users = await User.all();
        return response.ok(users);
    }

    async login({ request, response, auth }: HttpContextContract) {
        const { email, password }: { email: string; password: string } = request.only([
            'email',
            'password',
        ]);

        const authAttempt = await auth.attempt(email, password).catch((e) => {
            console.log(e);
            return null;
        });

        if (!authAttempt) {
            throw new UnAuthorizedException('No autorizado');
        }

        delete authAttempt.user.password;
        return response.ok({ ...authAttempt.user, token: authAttempt.token });
    }

    async store({ request, response }: HttpContextContract) {
        const userBody = request.only(['email', 'password']);
        const userCreated = await User.create(userBody);
        return response.ok(userCreated);
    }

    async storeWithClient({ request, response }: HttpContextContract) {
        const userBody: { email: string; password: string } = request.only(['email', 'password']);
        const clientBody = request.only(['name', 'surname', 'phone', 'address', 'id']);

        const userCreated = await User.create(userBody);

        const clientToUpdate = await Client.find(clientBody.id);
        await clientToUpdate?.merge({ ...clientBody, userId: userCreated.id }).save();

        return response.ok({ email: userCreated.email, ...clientBody });
    }
}
