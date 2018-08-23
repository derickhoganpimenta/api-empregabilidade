import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { CandidatePublicTender } from '../candidates_public_tenders/candidate_public_tender.entity';

@Table({
  tableName: "public_tenders"
})
export class PublicTender extends Model<PublicTender> {
  @BelongsToMany(() => Candidate, () => CandidatePublicTender)
  candidates: Candidate[];
  
  @Column department: string;

  @Column({ type: DataType.STRING(45)}) document_number: string;

  @Column code: string;
}
