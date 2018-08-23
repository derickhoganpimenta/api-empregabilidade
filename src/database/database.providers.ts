import { Sequelize } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';
import { CandidatePublicTender } from '../candidates_public_tenders/candidate_public_tender.entity';

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
      sequelize.addModels([Candidate, PublicTender, CandidatePublicTender]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
