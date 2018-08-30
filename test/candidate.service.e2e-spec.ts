import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
const feature = loadFeature('./test/features/candidate.feature');
import { CandidatesService } from '../candidates/candidates.service';

jest.mock('../candidates/candidates.service');

defineFeature(feature, test => {
 test('Have registereds candidates', ({
   given,
   when,
   then,
 }) => {
   given('Have registereds candidates', () => {
     pending();
   });
   when('I request /candidates', () => {
     pending();
   });
   then('I get candidates list', () => {
     pending();
   });
 });
});
