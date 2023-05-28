import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'mechanics';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('email').nullable().unique();
            table.string('name').notNullable();
            table.string('surname').notNullable();
            table.string('phone').notNullable();
            table.string('address');
            table.string('role');
            table.float('commission');
            table.float('salary');
            table.integer('user_id').unsigned().references('id').inTable('users');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
