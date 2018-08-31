import { Test, TestingModule } from '@nestjs/testing';
import { PublicTendersService } from './public_tenders.service';
import { PublicTendersController } from './public_tenders.controller';
import { PublicTender } from './public_tender.entity';

jest.mock("./public_tenders.service");


describe('CandidatesService', () => {
  let service: PublicTendersService;
  beforeAll(async (): Promise<PublicTender[]> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicTendersController],
      providers: [PublicTendersService],
    }).compile();
    service = module.get<PublicTendersService>(PublicTendersService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Return all public tenders', async (): Promise<PublicTender[]> => {
    let response = await service.findAll();
    console.log(response);
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return specific public tenders', async (): Promise<PublicTender> => {
    let response = await service.findOne('92952798894');
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return candidates for a public tender', async (): Promise<PublicTender> => {
    let response = await service.findCandidates('92952798894');
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return first page of candidate for a public tenders', async (): Promise<PublicTender> => {
    let response = await service.findCandidatesWithPagination('92952798894', '1');
    expect(Array.isArray(response)).toEqual(true);
  });

});
