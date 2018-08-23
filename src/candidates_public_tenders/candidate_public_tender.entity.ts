import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';

@Table({
  tableName: "candidates_public_tenders"
})

export class CandidatePublicTender extends Model<CandidatePublicTender> {
  @ForeignKey(() => Candidate)
  @Column
  candidate_id: number;

  @ForeignKey(() => PublicTender)
  @Column
  public_tender_id: number;
}
