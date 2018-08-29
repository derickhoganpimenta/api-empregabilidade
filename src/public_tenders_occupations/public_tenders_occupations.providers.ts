import { PublicTenderOccupation } from './public_tender_occupation.entity';

export const publicTendersOccupationsProviders = [
  {
    provide: 'PublicTendersOccupationsRepository',
    useValue: PublicTenderOccupation,
  },
];
