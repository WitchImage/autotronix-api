import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'receptionists';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('email').nullable().unique();
            table.string('name').notNullable();
            table.string('surname').notNullable();
            table.string('phone').notNullable();
            table.string('address').notNullable();
            table.float('salary', 10, 2).notNullable();

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
