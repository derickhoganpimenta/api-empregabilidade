import { Module } from '@nestjs/common';
import { PublicTendersOccupationsController } from './public_tenders_occupations.controller';
import { PublicTendersOccupationsService } from './public_tenders_occupations.service';
import { publicTendersOccupationsProviders } from './public_tenders_occupations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PublicTendersOccupationsController],
  providers: [PublicTendersOccupationsService, ...publicTendersOccupationsProviders],
})
export class PublicTenderOccupationsModule {}
