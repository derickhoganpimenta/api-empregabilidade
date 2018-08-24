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
const sequelize_typescript_1 = require("sequelize-typescript");
const candidate_entity_1 = require("../candidates/candidate.entity");
const public_tender_entity_1 = require("../public_tenders/public_tender.entity");
let CandidatePublicTender = class CandidatePublicTender extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => candidate_entity_1.Candidate),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CandidatePublicTender.prototype, "candidate_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => public_tender_entity_1.PublicTender),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CandidatePublicTender.prototype, "public_tender_id", void 0);
CandidatePublicTender = __decorate([
    sequelize_typescript_1.Table({
        tableName: "candidates_public_tenders"
    })
], CandidatePublicTender);
exports.CandidatePublicTender = CandidatePublicTender;
//# sourceMappingURL=candidate_public_tender.entity.js.map