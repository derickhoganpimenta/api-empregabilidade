import { Controller, Get, Param } from '@nestjs/common';
import { OccupationsService } from './occupations.service';
import { Occupation } from './occupation.entity';

@Controller('occupations')
export class OccupationsController {
  constructor(private readonly occupationsService: OccupationsService) {}

  @Get()
  async findAll(): Promise<Occupation[]> {
    return await this.occupationsService.findAll();
  }

  @Get(":id/candidates")
  async findCandidates(@Param() params): Promise<Occupation> {
    return await this.occupationsService.findCandidates(params.id);
  }

  @Get(":id/public_tenders")
  async findPublicTenders(@Param() params): Promise<Occupation> {
    return await this.occupationsService.findPublicTenders(params.id);
  }
}
