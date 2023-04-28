import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Invoice from 'App/Models/Invoice';
import Receptionist from 'App/Models/Receptionist';
import Request from 'App/Models/Request';
import Service from 'App/Models/Service';
import { DateTime } from 'luxon';

export default class extends BaseSeeder {
    public async run() {
        await Receptionist.updateOrCreateMany('id', [
            {
                id: 1,
                name: 'Recepcionista',
                surname: 'de Prueba',
                phone: '313313313',
                address: 'Avenida siempre viva',
                email: 'recepcionista@gmail.com',
                salary: 1200000,
            },
        ]);

        await Service.updateOrCreateMany('id', [
            {
                id: 1,
                price: 30000,
                name: 'Cambio de llantas',
                description: 'Cambio de 4 llantas',
                category: 'Cambio',
            },
            {
                id: 2,
                price: 50000,
                name: 'Cambio de aceite',
                description: 'Cambio de aceite',
                category: 'Cambio',
            },
            {
                id: 3,
                price: 500000,
                name: 'Reparación de hendidura',
                description: 'Reparación de hendidura de choque',
                category: 'Reparación',
            },
        ]);

        await Request.updateOrCreateMany('id', [
            {
                id: 1,
                clientId: 1,
                receptionistId: 1,
                startDate: DateTime.now().toString(),
                endDate: DateTime.now().plus({ days: 30 }).toString(),
            },
            {
                id: 2,
                clientId: 3,
                receptionistId: 1,
                startDate: DateTime.now().toString(),
                endDate: DateTime.now().plus({ days: 30 }).toString(),
            },
        ]);

        await Invoice.updateOrCreateMany('id', [
            {
                id: 1,
                requestId: 1,
                discount: 0,
                totalPrice: 300000,
                description: 'Invoice test 1',
                tax: 0.19,
                date: DateTime.now().toString(),
            },
            {
                id: 2,
                requestId: 2,
                discount: 0,
                totalPrice: 50000,
                description: 'Invoice test 2',
                tax: 0.19,
                date: DateTime.now().toString(),
            },
        ]);
    }
}
