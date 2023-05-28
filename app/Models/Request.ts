import { DateTime } from 'luxon';
import {
    BaseModel,
    BelongsTo,
    HasMany,
    HasOne,
    belongsTo,
    column,
    hasMany,
    hasOne,
} from '@ioc:Adonis/Lucid/Orm';
import Client from './Client';
import Receptionist from './Receptionist';
import Service from './Service';
import Invoice from './Invoice';
import Inconvenient from './Inconvenient';

export default class Request extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public clientId: number;

    @column()
    public receptionistId: number;

    @column()
    public startDate: DateTime;

    @column()
    public endDate: DateTime;

    @column()
    public serviceId: number;

    @belongsTo(() => Client)
    public client: BelongsTo<typeof Client>;

    @belongsTo(() => Receptionist)
    public receptionist: BelongsTo<typeof Receptionist>;

    @hasOne(() => Invoice)
    public invoice: HasOne<typeof Invoice>;

    @hasMany(() => Inconvenient)
    public inconvenients: HasMany<typeof Inconvenient>;

    @belongsTo(() => Service)
    public service: BelongsTo<typeof Service>;
}
