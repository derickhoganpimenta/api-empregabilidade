import { Candidate } from './candidate.entity';

export const candidatesProviders = [
  {
    provide: 'CandidatesRepository',
    useValue: Candidate,
  },
];
