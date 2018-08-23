import { CandidatePublicTender } from './candidate_public_tender.entity';

export const candidatesPublicTendersProviders = [
  {
    provide: 'CandidatesPublicTendersRepository',
    useValue: CandidatePublicTender,
  },
];
