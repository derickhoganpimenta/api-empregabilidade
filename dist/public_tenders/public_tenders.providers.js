"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_tender_entity_1 = require("./public_tender.entity");
exports.publicTendersProviders = [
    {
        provide: 'PublicTendersRepository',
        useValue: public_tender_entity_1.PublicTender,
    },
];
//# sourceMappingURL=public_tenders.providers.js.map