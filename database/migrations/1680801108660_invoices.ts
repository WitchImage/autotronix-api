import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'invoices';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('description');
            table.string('state');
            table.float('total_price').notNullable();
            table.float('tax').notNullable();
            table.float('discount').nullable();
            table
                .integer('request_id')
                .unsigned()
                .references('id')
                .inTable('requests')
                .notNullable();

            /**
             * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('date', { useTz: true });
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
