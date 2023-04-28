import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

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
}
