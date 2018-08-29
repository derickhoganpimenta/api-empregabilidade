import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { PublicTender } from '../public_tenders/public_tender.entity';
import { Occupation } from '../occupations/occupation.entity';
//import { CandidateOccupation } from '../candidates_occupations/candidate_occupation.entity';
//import { CandidateOccupationPublicTender } from '../candidates_occupations_public_tenders/candidate_occupation_public_tender.entity';

@Table({
  tableName: "public_tenders_occupations"
})

export class PublicTenderOccupation extends Model<PublicTenderOccupation> {

  @ForeignKey(() => PublicTender)
  @Column
  public_tender_id: number;

  @ForeignKey(() => Occupation)
  @Column
  occupation_id: number;
}
