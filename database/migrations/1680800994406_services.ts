import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'services';

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('code');
            table.float('price');
            table.string('description');
            table.string('category');
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
