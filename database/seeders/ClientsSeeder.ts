import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Client from 'App/Models/Client';

export default class extends BaseSeeder {
    public async run() {
        await Client.updateOrCreateMany('id', [
            {
                id: 1,
                name: 'Juanito',
                surname: 'Alimañana',
                phone: '573132143975',
                address: 'Avenida siempre viva',
            },
            {
                id: 2,
                name: 'Esperanza',
                surname: 'Gómez',
                phone: '573132143975',
                address: 'Avenida siempre viva',
            },
            {
                id: 3,
                name: 'Simón Felipe',
                surname: 'Muñoz Osorio',
                phone: '573132143975',
                address: 'Avenida siempre viva',
            },
        ]);
    }
}
