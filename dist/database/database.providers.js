"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const candidate_entity_1 = require("../candidates/candidate.entity");
const public_tender_entity_1 = require("../public_tenders/public_tender.entity");
const candidate_public_tender_entity_1 = require("../candidates_public_tenders/candidate_public_tender.entity");
exports.databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                operatorsAliases: false,
                dialect: 'postgres',
                host: 'baasu.db.elephantsql.com',
                port: 5432,
                username: 'bkalasnf',
                password: 'bb6owonoxaRzoAw-TBqpZRs7te4yorRc',
                database: 'bkalasnf',
            });
            sequelize.addModels([candidate_entity_1.Candidate, public_tender_entity_1.PublicTender, candidate_public_tender_entity_1.CandidatePublicTender]);
            yield sequelize.sync();
            return sequelize;
        }),
    },
];
//# sourceMappingURL=database.providers.js.map