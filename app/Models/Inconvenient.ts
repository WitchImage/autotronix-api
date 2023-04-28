import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Inconvenient extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public serviceRequestedId: number;

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
}
