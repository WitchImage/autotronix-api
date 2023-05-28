import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Request from './Request';

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

    @hasMany(() => Request)
    public requests: HasMany<typeof Request>;
}
