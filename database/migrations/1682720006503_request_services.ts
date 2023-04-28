import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'request_services';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');

            table.integer('request_id').unsigned().references('id').inTable('requests');
            table.integer('service_id').unsigned().references('id').inTable('services');

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
