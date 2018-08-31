import { Test, TestingModule } from '@nestjs/testing';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';
import { Candidate } from './candidate.entity';

jest.mock("./candidates.service");


describe('CandidatesService', () => {
  let service: CandidatesService;
  beforeAll(async (): Promise<Candidate[]> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatesController],
      providers: [CandidatesService],
    }).compile();
    service = module.get<CandidatesService>(CandidatesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Return all candidates', async (): Promise<Candidate[]> => {
    let response = await service.findAll();
    console.log(response);
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return specific candidate', async (): Promise<Candidate> => {
    let response = await service.findOne('39574919519');
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return public tenders for a candidate', async (): Promise<Candidate> => {
    let response = await service.findPublicTenders('39574919519');
    expect(Array.isArray(response)).toEqual(true);
  });

  it('Return first page of public tenders for a candidate', async (): Promise<Candidate> => {
    let response = await service.findPublicTendersWithPagination('39574919519', '1');
    expect(Array.isArray(response)).toEqual(true);
  });

});
