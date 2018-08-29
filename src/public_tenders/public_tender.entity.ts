import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { PublicTenderOccupation } from '../public_tenders_occupations/public_tender_occupation.entity';
import { Occupation } from '../occupations/occupation.entity';

@Table({
  tableName: "public_tenders"
})
export class PublicTender extends Model<PublicTender> {
  @BelongsToMany(() => Occupation, () => PublicTenderOccupation)
  occupations: Occupation[];

  @Column department: string;

  @Column({ type: DataType.STRING(45)}) document_number: string;

  @Column code: string;
}
