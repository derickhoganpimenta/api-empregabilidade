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
const candidate_public_tender_entity_1 = require("../candidates_public_tenders/candidate_public_tender.entity");
let PublicTender = class PublicTender extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.BelongsToMany(() => candidate_entity_1.Candidate, () => candidate_public_tender_entity_1.CandidatePublicTender),
    __metadata("design:type", Array)
], PublicTender.prototype, "candidates", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PublicTender.prototype, "department", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING(45) }),
    __metadata("design:type", String)
], PublicTender.prototype, "document_number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], PublicTender.prototype, "code", void 0);
PublicTender = __decorate([
    sequelize_typescript_1.Table({
        tableName: "public_tenders"
    })
], PublicTender);
exports.PublicTender = PublicTender;
//# sourceMappingURL=public_tender.entity.js.map