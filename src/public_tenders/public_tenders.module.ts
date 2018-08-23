import { Module } from '@nestjs/common';
import { PublicTendersController } from './public_tenders.controller';
import { PublicTendersService } from './public_tenders.service';
import { publicTendersProviders } from './public_tenders.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PublicTendersController],
  providers: [PublicTendersService, ...publicTendersProviders],
})
export class PublicTendersModule {}
