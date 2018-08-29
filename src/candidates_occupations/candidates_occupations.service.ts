import { Injectable, Inject } from '@nestjs/common';
import { CandidateOccupation } from './candidate_occupation.entity';

@Injectable()
export class CandidatesOccupationsService {
  constructor(
    @Inject('CandidatesOccupationsRepository') private readonly candidatesOccupationsRepository: typeof CandidateOccupation,
  ) {}


  async findAll(): Promise<CandidateOccupation[]> {
    return await this.candidatesOccupationsRepository.findAll<CandidateOccupation>();
  }
}
