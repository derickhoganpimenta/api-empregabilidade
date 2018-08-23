import { Module } from '@nestjs/common';
import { CandidatesController } from './candidates.controller';
import { CandidatesService } from './candidates.service';
import { candidatesProviders } from './candidates.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CandidatesController],
  providers: [CandidatesService, ...candidatesProviders],
})
export class CandidatesModule {}
