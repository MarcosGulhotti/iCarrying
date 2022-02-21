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
exports.Delivery = void 0;
var typeorm_1 = require("typeorm");
var Buy_1 = require("./Buy");
var Trucks_1 = require("./Trucks");
var Delivery = /** @class */ (function () {
    function Delivery() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Delivery.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Delivery.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return Buy_1.Buy; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Buy_1.Buy)
    ], Delivery.prototype, "buy", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return Trucks_1.Trucks; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Trucks_1.Trucks)
    ], Delivery.prototype, "trucks", void 0);
    Delivery = __decorate([
        (0, typeorm_1.Entity)()
    ], Delivery);
    return Delivery;
}());
exports.Delivery = Delivery;
//# sourceMappingURL=Delivery.js.map