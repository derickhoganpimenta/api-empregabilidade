import { Injectable, Inject } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @Inject('CandidatesRepository') private readonly candidatesRepository: typeof Candidate,
  ) {}


  async findAll(): Promise<Candidate[]> {
    return await this.candidatesRepository.findAll<Candidate>();
  }

  async findBy(document_number): Promise<Candidate> {
    return await this.candidatesRepository.find({include: [PublicTender], where: {document_number: document_number}});
  }
}
