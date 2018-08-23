import { Controller, Get, Param } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { Candidate } from './candidate.entity';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async findAll(): Promise<Candidate[]> {
    return await this.candidatesService.findAll();
  }

  @Get(":document_number")
  async findBy(@Param() params): Promise<Candidate> {
    return await this.candidatesService.findBy(params.document_number);
  }
}
