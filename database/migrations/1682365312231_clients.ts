import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'clients';

    public async up() {
        this.schema.table(this.tableName, (table) => {
            table.string('document').unique();
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
