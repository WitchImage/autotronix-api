import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Supplier extends BaseModel {
    @column({ isPrimary: true })
    public id: number;
}
