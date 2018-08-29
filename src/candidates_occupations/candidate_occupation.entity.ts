import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { Occupation } from '../occupations/occupation.entity';

@Table({
  tableName: "candidates_occupations"
})

export class CandidateOccupation extends Model<CandidateOccupation> {
  @ForeignKey(() => Candidate)
  @Column
  candidate_id: number;

  @ForeignKey(() => Occupation)
  @Column
  occupation_id: number;
}
