import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { CandidateOccupation } from '../candidates_occupations/candidate_occupation.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';
import { PublicTenderOccupation } from '../public_tenders_occupations/public_tender_occupation.entity';

@Table({
  tableName: "occupations"
})

export class Occupation extends Model<Occupation> {
  @BelongsToMany(() => Candidate, () => CandidateOccupation)
  candidates: Candidate[];

  @BelongsToMany(() => PublicTender, () => PublicTenderOccupation)
  public_tenders: PublicTender[];

  @Column name: string;
}
