import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Vehicle from './Vehicle';
import Pqr from './Pqr';
import Request from './Request';

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

    @hasMany(() => Vehicle)
    public vehicles: HasMany<typeof Vehicle>;

    @hasMany(() => Request)
    public requests: HasMany<typeof Request>;

    @hasMany(() => Pqr)
    public pqrs: HasMany<typeof Pqr>;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;
}
