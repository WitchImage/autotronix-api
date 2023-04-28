import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class ServiceRequested extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public clientId: number;

    @column()
    public receptionistId: number;

    @column()
    startDate: DateTime;

    @column()
    endDate: DateTime;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
}
