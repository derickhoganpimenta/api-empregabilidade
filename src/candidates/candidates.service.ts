import { Injectable, Inject } from '@nestjs/common';
import { Candidate } from './candidate.entity';
import { Occupation } from '../occupations/occupation.entity';
import { PublicTender } from '../public_tenders/public_tender.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @Inject('CandidatesRepository') private readonly candidatesRepository: typeof Candidate,
    //@Inject('PublicTendersRepository') private readonly publicTendersRepository: typeof PublicTender,
  ) {}


  async findAll(): Promise<Candidate[]> {
    return await this.candidatesRepository.findAll<Candidate>();
  }

  async findOne(document_number): Promise<Candidate> {
    return await this.candidatesRepository.find({include: [Occupation], where: {document_number: document_number}});
  }

  async findPublicTenders(document_number): Promise<Candidate> {
    return await this.candidatesRepository.find(
      {
        include:[{
          model: Occupation,
          include: [
            {model: Candidate, where: {document_number: document_number}},
            {model: PublicTender }],
          }]
        });

  }
}
