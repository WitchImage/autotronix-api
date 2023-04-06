import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'invoice_states';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.timestamp('payment_date');
            table.float('amount_paid');
            table.integer('invoice_id').unsigned().references('id').inTable('invoices');

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
