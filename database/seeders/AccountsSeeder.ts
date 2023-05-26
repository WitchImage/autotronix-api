import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import User from 'App/Models/User';

export default class extends BaseSeeder {
    public async run() {
        await User.updateOrCreateMany('id', [
            {
                id: 1,
                email: 'admin@admin.com',
                password: 'Cisco123.',
                role: 'admin',
            },
            {
                id: 2,
                email: 'recepcionista@autotronix.com',
                password: 'Cisco123.',
                role: 'receptionist',
            },
            {
                id: 3,
                email: 'test@gmail.com',
                password: 'Cisco123.',
                role: 'receptionist',
            },
        ]);
    }
}
