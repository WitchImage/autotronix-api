import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Mechanic extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public commission: number;

    @column()
    public salary: number;

    @column()
    public userId: number;

    @column()
    public name: string;

    @column()
    public surname: string;

    @column()
    public phone: string;

    @column()
    public role: string;

    @column()
    public email: string;

    @column()
    public address: string;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
