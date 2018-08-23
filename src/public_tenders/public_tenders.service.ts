import { Injectable, Inject } from '@nestjs/common';
import { PublicTender } from './public_tender.entity';

@Injectable()
export class PublicTendersService {
  constructor(
    @Inject('PublicTendersRepository') private readonly publicTendersRepository: typeof PublicTender,
  ) {}


  async findAll(): Promise<PublicTender[]> {
    return await this.publicTendersRepository.findAll<PublicTender>();
  }
}
