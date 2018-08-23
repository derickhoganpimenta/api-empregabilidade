import { Module } from '@nestjs/common';
import { CandidatesPublicTendersController } from './candidates_public_tenders.controller';
import { CandidatesPublicTendersService } from './candidates_public_tenders.service';
import { candidatesPublicTendersProviders } from './candidates_public_tenders.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CandidatesPublicTendersController],
  providers: [CandidatesPublicTendersService, ...candidatesPublicTendersProviders],
})
export class CandidatesPublicTendersModule {}
