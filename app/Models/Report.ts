import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Report extends BaseModel {
    @column({ isPrimary: true })
    public id: number;
}
