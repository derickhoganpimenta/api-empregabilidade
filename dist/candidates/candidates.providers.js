"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candidate_entity_1 = require("./candidate.entity");
exports.candidatesProviders = [
    {
        provide: 'CandidatesRepository',
        useValue: candidate_entity_1.Candidate,
    },
];
//# sourceMappingURL=candidates.providers.js.map