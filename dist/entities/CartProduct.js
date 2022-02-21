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
exports.CartProduct = void 0;
var typeorm_1 = require("typeorm");
var Cart_1 = require("./Cart");
var Product_1 = require("./Product");
var Buy_1 = require("./Buy");
var CartProduct = /** @class */ (function () {
    function CartProduct() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], CartProduct.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CartProduct.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Cart_1.Cart; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Cart_1.Cart)
    ], CartProduct.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Product_1.Product; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Product_1.Product)
    ], CartProduct.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Buy_1.Buy; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Buy_1.Buy)
    ], CartProduct.prototype, "buy", void 0);
    CartProduct = __decorate([
        (0, typeorm_1.Entity)()
    ], CartProduct);
    return CartProduct;
}());
exports.CartProduct = CartProduct;
//# sourceMappingURL=CartProduct.js.map