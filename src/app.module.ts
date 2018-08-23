import { Module } from '@nestjs/common';
import { CandidatesModule } from './candidates/candidates.module';
import { PublicTendersModule } from './public_tenders/public_tenders.module';
import { CandidatesPublicTendersModule } from './candidates_public_tenders/candidates_public_tenders.module';

@Module({
  imports: [CandidatesModule, PublicTendersModule, CandidatesPublicTendersModule]
})
export class ApplicationModule {}
