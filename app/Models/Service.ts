import { DateTime } from 'luxon';
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';

export default class Service extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public price: number;

    @column()
    public name: string;

    @column()
    public description: string;

    @column()
    public category: string;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @manyToMany(() => Request, {
        pivotTable: 'request_services',
        localKey: 'id',
        pivotForeignKey: 'service_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'request_id',
        pivotTimestamps: true,
    })
    public services: ManyToMany<typeof Request>;
}
