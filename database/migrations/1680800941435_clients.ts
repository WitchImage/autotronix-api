import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'clients';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('surname').notNullable();
            table.string('document').unique();
            table.string('phone').notNullable();
            table.string('address').notNullable();
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .nullable()
                .onDelete('NO ACTION')
                .onUpdate('CASCADE');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
