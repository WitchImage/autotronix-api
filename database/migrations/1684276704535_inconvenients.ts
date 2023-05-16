import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
    protected tableName = 'inconvenients';

    public async up() {
        this.schema.table(this.tableName, (table) => {
            table.renameColumn('requested_id', 'request_id');
        });
    }
}
