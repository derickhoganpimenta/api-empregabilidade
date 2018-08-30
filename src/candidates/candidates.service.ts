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

  async findPublicTenders(document_number): Promise<String[]> {
    var candidate: any = await this.candidatesRepository.find({
        where: {document_number: document_number},
        include:[
          {
            model: Occupation, through: {attributes: []},
            include: [
              {model: PublicTender},
            ]
          }]
        });
        var public_tenders = [];
        for(var occupation of candidate.occupations) {
          for(var public_tender of occupation.public_tenders) {
            public_tenders.push(public_tender);
          }

        }
        return public_tenders;
  }

  async findPublicTendersWithPagination(document_number, number): Promise<String[]> {
    var candidate: any = await this.candidatesRepository.find({
        //limit: 1,
        //offset: 1,
        where: {document_number: document_number},
        include:[
          {
            model: Occupation, through: {attributes: []},
            include: [
              {
                model: PublicTender
              }
            ]
          }]
        });
        var public_tenders = [];
        for(var occupation of candidate.occupations) {
          for(var public_tender of occupation.public_tenders) {
            public_tenders.push(public_tender);
          }

        }

        var page = number;
        var numItems = 10;

        var perPage = numItems;
        var offset = (page - 1) * perPage;
        var paginatedItems = public_tenders.slice(offset, offset + perPage);

        return paginatedItems;

  }
}
