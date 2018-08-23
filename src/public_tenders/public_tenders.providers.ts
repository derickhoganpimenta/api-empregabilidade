import { PublicTender } from './public_tender.entity';

export const publicTendersProviders = [
  {
    provide: 'PublicTendersRepository',
    useValue: PublicTender,
  },
];
