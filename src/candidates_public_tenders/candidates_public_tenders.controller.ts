import { Controller, Get } from '@nestjs/common';
import { CandidatesPublicTendersService } from './candidates_public_tenders.service';
import { CandidatePublicTender } from './candidate_public_tender.entity';

@Controller('candidates')
export class CandidatesPublicTendersController {
  constructor(private readonly candidatesPublicTendersService: CandidatesPublicTendersService) {}

  @Get()
  async findAll(): Promise<CandidatePublicTender[]> {
    return await this.candidatesPublicTendersService.findAll();
  }
}
