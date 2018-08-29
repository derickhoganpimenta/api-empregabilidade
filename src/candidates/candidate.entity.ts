import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Occupation } from '../occupations/occupation.entity';
import { CandidateOccupation } from '../candidates_occupations/candidate_occupation.entity';

@Table({
  tableName: "candidates"
})

export class Candidate extends Model<Candidate> {
  @BelongsToMany(() => Occupation, () => CandidateOccupation)
  occupations: Occupation[];

  @Column name: string;

  @Column({ type: DataType.STRING(11)}) document_number: string;

  @Column birthdate: Date;
}
