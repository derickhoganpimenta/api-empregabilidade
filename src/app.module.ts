import { Module } from '@nestjs/common';
import { CandidatesModule } from './candidates/candidates.module';
import { PublicTendersModule } from './public_tenders/public_tenders.module';
import { OccupationsModule } from './occupations/occupations.module';
import { CandidatesOccupationsModule } from './candidates_occupations/candidates_occupations.module';
import { PublicTenderOccupationsModule } from './public_tenders_occupations/public_tenders_occupations.module';

@Module({
  imports: [CandidatesModule, PublicTendersModule, OccupationsModule, CandidatesOccupationsModule, PublicTenderOccupationsModule]
})
export class ApplicationModule {}
