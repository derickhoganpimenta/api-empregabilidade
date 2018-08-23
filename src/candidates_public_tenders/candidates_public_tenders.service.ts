import { Injectable, Inject } from '@nestjs/common';
import { CandidatePublicTender } from './candidate_public_tender.entity';

@Injectable()
export class CandidatesPublicTendersService {
  constructor(
    @Inject('CandidatesPublicTendersRepository') private readonly candidatesPublicTendersRepository: typeof CandidatePublicTender,
  ) {}


  async findAll(): Promise<CandidatePublicTender[]> {
    return await this.candidatesPublicTendersRepository.findAll<CandidatePublicTender>();
  }
}
