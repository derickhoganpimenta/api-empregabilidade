import { CandidateOccupation } from './candidate_occupation.entity';

export const candidatesOccupationsProviders = [
  {
    provide: 'CandidatesOccupationsRepository',
    useValue: CandidateOccupation,
  },
];
