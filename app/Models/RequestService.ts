import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';
import Service from './Service';

export default class RequestService extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public requestId: number;

    @column()
    public serviceId: number;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @belongsTo(() => Request)
    public request: BelongsTo<typeof Request>;

    @belongsTo(() => Service)
    public service: BelongsTo<typeof Service>;
}
