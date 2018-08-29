import { Module } from '@nestjs/common';
import { CandidatesOccupationsController } from './candidates_occupations.controller';
import { CandidatesOccupationsService } from './candidates_occupations.service';
import { candidatesOccupationsProviders } from './candidates_occupations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CandidatesOccupationsController],
  providers: [CandidatesOccupationsService, ...candidatesOccupationsProviders],
})
export class CandidatesOccupationsModule {}
