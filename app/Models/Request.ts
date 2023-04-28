import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Client from './Client';
import Receptionist from './Receptionist';

export default class Request extends BaseModel {
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

    @belongsTo(() => Client)
    public client: BelongsTo<typeof Client>;

    @belongsTo(() => Receptionist)
    public receptionist: BelongsTo<typeof Receptionist>;
}
