import { Injectable, Inject } from '@nestjs/common';
import { PublicTender } from './public_tender.entity';
import { Candidate } from '../candidates/candidate.entity';

@Injectable()
export class PublicTendersService {
  constructor(
    @Inject('PublicTendersRepository') private readonly publicTendersRepository: typeof PublicTender,
  ) {}


  async findAll(): Promise<PublicTender[]> {
    return await this.publicTendersRepository.findAll<PublicTender>();
  }

  async findOne(code): Promise<PublicTender> {
    return await this.publicTendersRepository.find({where: {code: code}});
  }

  async findBy(code): Promise<PublicTender> {
    return await this.publicTendersRepository.find({include: [Candidate], where: {code: code}});
  }
}
