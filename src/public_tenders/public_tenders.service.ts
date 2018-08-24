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

  async findOne(document_number): Promise<PublicTender> {
    return await this.publicTendersRepository.find({where: {document_number: document_number}});
  }

  async findBy(document_number): Promise<PublicTender> {
    return await this.publicTendersRepository.find({include: [Candidate], where: {document_number: document_number}});
  }
}
