import { Injectable, Inject } from '@nestjs/common';
import { PublicTenderOccupation } from './public_tender_occupation.entity';

@Injectable()
export class PublicTendersOccupationsService {
  constructor(
    @Inject('PublicTendersOccupationsRepository') private readonly publicTendersOccupationsRepository: typeof PublicTenderOccupation,
  ) {}


  async findAll(): Promise<PublicTenderOccupation[]> {
    return await this.publicTendersOccupationsRepository.findAll<PublicTenderOccupation>();
  }
}
