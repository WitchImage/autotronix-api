import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'inconvenients';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('description');
            table.string('state');
            table.boolean('seen');
            table.integer('days_delay');
            table.integer('request_id').unsigned().references('id').inTable('requests');
            table.timestamp('date');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
