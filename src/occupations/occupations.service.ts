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

  async findCandidates(id): Promise<Occupation> {
    return await this.occupationsRepository.findOne({include: [Candidate], where: {id: id}});
  }

  async findPublicTenders(id): Promise<Occupation> {
    return await this.occupationsRepository.findOne({include: [PublicTender], where: {id: id}});
  }
}
