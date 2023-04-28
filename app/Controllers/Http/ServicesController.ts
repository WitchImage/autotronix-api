import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Service from 'App/Models/Service';

export default class ServicesController {
    async index({ response }: HttpContextContract) {
        const services = await Service.all();
        return response.ok(services);
    }
}
