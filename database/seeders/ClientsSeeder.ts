import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Client from 'App/Models/Client';
import Vehicle from 'App/Models/Vehicle';

export default class extends BaseSeeder {
    public async run() {
        await Client.updateOrCreateMany('id', [
            {
                id: 100,
                name: 'Juanito',
                surname: 'Alimañana',
                phone: '573132143975',
                address: 'Avenida siempre viva',
                document: '9999',
            },
            {
                id: 102,
                name: 'Esperanza',
                surname: 'Gómez',
                phone: '573132143975',
                address: 'Avenida siempre viva',
                document: '8888',
            },
            {
                id: 103,
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
                clientId: 100,
                color: 'black',
                description: 'My description',
                model: 'Chevrolet Tracker',
                plate: 'XXX-666',
                year: '2018',
            },
            {
                id: 4,
                clientId: 100,
                color: 'blue',
                description: 'My description 2',
                model: 'Ford Fiesta',
                plate: 'XXX-777',
                year: '2015',
            },
            {
                id: 2,
                clientId: 103,
                color: 'white',
                description: 'My description',
                model: 'Renault Duster',
                plate: 'YYY-555',
                year: '2013',
            },
            {
                id: 3,
                clientId: 102,
                color: 'red',
                description: 'My description',
                model: 'Mazda 3',
                plate: 'WWW-444',
                year: '2017',
            },
        ]);
    }
}
