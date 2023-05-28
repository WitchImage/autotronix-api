import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'admins';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('surname');
            table.string('phone');
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('NO ACTION')
                .onUpdate('CASCADE');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
