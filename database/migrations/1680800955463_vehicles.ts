import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'vehicles';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('plate');
            table.string('model');
            table.string('year');
            table.string('description');
            table.string('color');
            table.integer('client_id').unsigned().references('id').inTable('clients');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
