import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'invoice_states';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.timestamp('payment_date');
            table.float('amount_paid');
            table.integer('invoice_id').unsigned().references('id').inTable('invoices');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
