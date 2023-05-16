import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Client from 'App/Models/Client';
import Vehicle from 'App/Models/Vehicle';

export default class extends BaseSeeder {
    public async run() {
        await Client.updateOrCreateMany('id', [
            {
                id: 1,
                name: 'Juanito',
                surname: 'Alimañana',
                phone: '573132143975',
                address: 'Avenida siempre viva',
                document: '9999',
            },
            {
                id: 2,
                name: 'Esperanza',
                surname: 'Gómez',
                phone: '573132143975',
                address: 'Avenida siempre viva',
                document: '8888',
            },
            {
                id: 3,
                name: 'Simón Felipe',
                surname: 'Muñoz Osorio',
                phone: '573132143975',
                address: 'Avenida siempre viva',
                document: '7777',
            },
        ]);

        await Vehicle.updateOrCreateMany('id', [
            {
                id: 1,
                clientId: 1,
                color: 'black',
                description: 'My description',
                model: 'Chevrolet Tracker',
                plate: 'XXX-666',
                year: '2018',
            },
            {
                id: 2,
                clientId: 1,
                color: 'white',
                description: 'My description',
                model: 'Renault Duster',
                plate: 'YYY-555',
                year: '2013',
            },
            {
                id: 3,
                clientId: 3,
                color: 'red',
                description: 'My description',
                model: 'Mazda 3',
                plate: 'WWW-444',
                year: '2017',
            },
        ]);
    }
}
