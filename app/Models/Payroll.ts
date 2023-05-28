import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Payroll extends BaseModel {
    @column({ isPrimary: true })
    public id: number;
}
