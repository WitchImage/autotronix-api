import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Client from './Client';

export default class Vehicle extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public plate: string;

    @column()
    public model: string;

    @column()
    public year: string;

    @column()
    public description: string;

    @column()
    public color: string;

    @column()
    public clientId: number;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @belongsTo(() => Client)
    public client: BelongsTo<typeof Client>;
}
