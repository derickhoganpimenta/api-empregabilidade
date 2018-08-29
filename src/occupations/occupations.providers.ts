import { Occupation } from './occupation.entity';

export const occupationsProviders = [
  {
    provide: 'OccupationsRepository',
    useValue: Occupation,
  },
];
