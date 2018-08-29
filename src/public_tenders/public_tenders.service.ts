import { Injectable, Inject } from '@nestjs/common';
import { PublicTender } from './public_tender.entity';
import { Occupation } from '../occupations/occupation.entity';
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
    return await this.publicTendersRepository.find({include: [Occupation], where: {code: code}});
  }

  async findBy(code): Promise<PublicTender> {
    return await this.publicTendersRepository.find(
      {
        include:[{
          model: Occupation,
          include: [
            {model: PublicTender, where: {code: code}},
            {model: Candidate }],
          }]
        });
  }
}
