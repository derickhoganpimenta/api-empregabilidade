import { Module } from '@nestjs/common';
import { OccupationsController } from './occupations.controller';
import { OccupationsService } from './occupations.service';
import { occupationsProviders } from './occupations.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OccupationsController],
  providers: [OccupationsService, ...occupationsProviders],
})
export class OccupationsModule {}
