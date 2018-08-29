import { Controller, Get } from '@nestjs/common';
import { CandidatesOccupationsService } from './candidates_occupations.service';
import { CandidateOccupation } from './candidate_occupation.entity';

@Controller('candidates_occupations')
export class CandidatesOccupationsController {
  constructor(private readonly candidatesOccupationsService: CandidatesOccupationsService) {}

  @Get()
  async findAll(): Promise<CandidateOccupation[]> {
    return await this.candidatesOccupationsService.findAll();
  }
}
