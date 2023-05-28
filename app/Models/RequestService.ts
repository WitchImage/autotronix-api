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

    @belongsTo(() => Request)
    public request: BelongsTo<typeof Request>;

    @belongsTo(() => Service)
    public service: BelongsTo<typeof Service>;
}
