import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'service_requesteds';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.timestamp('end_date');
            table.integer('client_id').unsigned().references('id').inTable('clients');
            table.integer('receptionist_id').unsigned().references('id').inTable('receptionists');

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
