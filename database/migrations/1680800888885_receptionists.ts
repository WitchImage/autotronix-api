import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'receptionists';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('NO ACTION')
                .onUpdate('CASCADE');
            table.string('email').nullable().unique();
            table.string('name').notNullable();
            table.string('surname').notNullable();
            table.string('phone').notNullable();
            table.string('address').notNullable();
            table.float('salary', 10, 2).notNullable();
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
