import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';

export default class Invoice extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public discount: number;

    @column()
    public tax: number;

    @column()
    public totalPrice: number;

    @column()
    public requestId: number;

    @column()
    public description: string;

    @column()
    public date: DateTime;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @belongsTo(() => Request)
    public service: BelongsTo<typeof Request>;
}
