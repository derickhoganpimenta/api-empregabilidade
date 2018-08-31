import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { async } from '../node_modules/rxjs/internal/scheduler/async';
const candidateFeatures = loadFeature('./test/features/candidate.feature');

defineFeature(candidateFeatures, test => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  test('Have registereds candidates', ({ when, then }) => {
    let response;

    when('I request /candidates', async () => {
      response = await request(app.getHttpServer()).get('/candidates/');
    });
    then('I get candidates list', () => {
      expect(Array.isArray(response)).toEqual(true);
    });
  });
});
