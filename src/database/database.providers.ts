import { Sequelize } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';
import { Occupation } from '../occupations/occupation.entity';
import { CandidateOccupation } from '../candidates_occupations/candidate_occupation.entity';
import { PublicTenderOccupation } from '../public_tenders_occupations/public_tender_occupation.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'postgres',
        host: 'baasu.db.elephantsql.com',
        port: 5432,
        username: 'bkalasnf',
        password: 'bb6owonoxaRzoAw-TBqpZRs7te4yorRc',
        database: 'bkalasnf',
      });
      sequelize.addModels([Candidate, PublicTender, Occupation, CandidateOccupation, PublicTenderOccupation]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
