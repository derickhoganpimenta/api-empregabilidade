"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const candidates_controller_1 = require("./candidates.controller");
const candidates_service_1 = require("./candidates.service");
const candidates_providers_1 = require("./candidates.providers");
const database_module_1 = require("../database/database.module");
let CandidatesModule = class CandidatesModule {
};
CandidatesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [candidates_controller_1.CandidatesController],
        providers: [candidates_service_1.CandidatesService, ...candidates_providers_1.candidatesProviders],
    })
], CandidatesModule);
exports.CandidatesModule = CandidatesModule;
//# sourceMappingURL=candidates.module.js.map