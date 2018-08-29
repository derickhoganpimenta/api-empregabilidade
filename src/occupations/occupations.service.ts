import { Injectable, Inject } from '@nestjs/common';
import { Occupation } from './occupation.entity';
import { Candidate } from '../candidates/candidate.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';

@Injectable()
export class OccupationsService {
  constructor(
    @Inject('OccupationsRepository') private readonly occupationsRepository: typeof Occupation,
  ) {}


  async findAll(): Promise<Occupation[]> {
    return await this.occupationsRepository.findAll<Occupation>();
  }

  async findOne(id): Promise<Occupation> {
    return await this.occupationsRepository.findOne({include: [Candidate, PublicTender], where: {id: id}});
  }
}
