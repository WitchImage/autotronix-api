import { DateTime } from 'luxon';
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';

export default class Receptionist extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public name: string;

    @column()
    public surname: string;

    @column()
    public phone: string;

    @column()
    public address: string;

    @column()
    public email: string;

    @column()
    public salary: number;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @hasMany(() => Request)
    public services: HasMany<typeof Request>;
}
