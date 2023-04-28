import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';

export default class Inconvenient extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public requestId: number;

    @column()
    public daysDelay: number;

    @column()
    public seen: boolean;

    @column()
    public description: string;

    @column()
    public state: string;

    @column()
    public date: DateTime;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @belongsTo(() => Request)
    public request: BelongsTo<typeof Request>;
}
