import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Vehicle from './Vehicle';
import ServiceRequested from './ServiceRequested';
import Pqr from './Pqr';

export default class Client extends BaseModel {
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
    public document: string;

    @column()
    public userId: number;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;

    @hasMany(() => Vehicle)
    public vehicles: HasMany<typeof Vehicle>;

    @hasMany(() => ServiceRequested)
    public servicesRequested: HasMany<typeof ServiceRequested>;

    @hasMany(() => Pqr)
    public pqrs: HasMany<typeof Pqr>;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;
}
