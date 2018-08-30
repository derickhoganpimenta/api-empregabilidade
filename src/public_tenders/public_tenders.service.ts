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

  async findCandidates(code): Promise<String[]> {
    var public_tender: any = await this.publicTendersRepository.find({
        where: {code: code},
        include:[
          {
            model: Occupation, through: {attributes: []},
            include: [
              {model: Candidate},
            ]
          }]
        });
        var o = [];
        for(var occupation of public_tender.occupations) {
          for(var candidate of occupation.candidates) {
            o.push(candidate);
          }

        }
        return o;
  }

}
