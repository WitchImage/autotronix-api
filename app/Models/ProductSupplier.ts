import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class ProductSupplier extends BaseModel {
    @column({ isPrimary: true })
    public id: number;
}
