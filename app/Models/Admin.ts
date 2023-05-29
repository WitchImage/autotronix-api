import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import User from './User';

export default class Admin extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public user_id: number;

    @column()
    public name: string;

    @column()
    public surname: string;

    @column()
    public phone: string;

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>;
}
