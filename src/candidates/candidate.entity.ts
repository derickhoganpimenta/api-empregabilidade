import { Table, Column, Model, DataType, BelongsToMany, Scopes } from 'sequelize-typescript';
import { PublicTender } from '../public_tenders/public_tender.entity';
import { CandidatePublicTender } from '../candidates_public_tenders/candidate_public_tender.entity';

@Table({
  tableName: "candidates"
})

export class Candidate extends Model<Candidate> {
  @BelongsToMany(() => PublicTender, () => CandidatePublicTender)
  public_tenders: PublicTender[];

  @Column name: string;

  @Column({ type: DataType.STRING(11)}) document_number: string;

  @Column birthdate: Date;
}
