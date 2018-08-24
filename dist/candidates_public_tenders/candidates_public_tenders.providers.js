"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candidate_public_tender_entity_1 = require("./candidate_public_tender.entity");
exports.candidatesPublicTendersProviders = [
    {
        provide: 'CandidatesPublicTendersRepository',
        useValue: candidate_public_tender_entity_1.CandidatePublicTender,
    },
];
//# sourceMappingURL=candidates_public_tenders.providers.js.map