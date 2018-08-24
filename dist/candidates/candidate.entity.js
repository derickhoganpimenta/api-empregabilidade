"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Candidate_1;
const sequelize_typescript_1 = require("sequelize-typescript");
const public_tender_entity_1 = require("../public_tenders/public_tender.entity");
const candidate_public_tender_entity_1 = require("../candidates_public_tenders/candidate_public_tender.entity");
let Candidate = Candidate_1 = class Candidate extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.BelongsToMany(() => public_tender_entity_1.PublicTender, () => candidate_public_tender_entity_1.CandidatePublicTender),
    __metadata("design:type", Array)
], Candidate.prototype, "public_tenders", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Candidate.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(11) }),
    __metadata("design:type", String)
], Candidate.prototype, "document_number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Candidate.prototype, "birthdate", void 0);
Candidate = Candidate_1 = __decorate([
    sequelize_typescript_1.Scopes({
        withTeams: {
            include: [{ model: () => Candidate_1, include: [() => public_tender_entity_1.PublicTender] }]
        }
    }),
    sequelize_typescript_1.Table({
        tableName: "candidates"
    })
], Candidate);
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.entity.js.map