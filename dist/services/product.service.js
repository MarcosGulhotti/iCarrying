"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.listAllProductsFromSupplier = exports.listAllProducts = exports.listProductById = exports.createProduct = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("../entities/Product");
var Supplier_1 = require("../entities/Supplier");
var AppError_1 = __importDefault(require("../errors/AppError"));
var removeSuplier = function (product) {
    var id = product.id, name = product.name, price = product.price, description = product.description, image = product.image;
    var newProduct = {
        id: id,
        name: name,
        price: price,
        description: description,
        image: image,
        suplierId: product.suplier.id,
    };
    return newProduct;
};
var createProduct = function (data, suplierID) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, suplierRepository, suplier, productExists, product, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                suplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, suplierRepository.findOne(suplierID)];
            case 1:
                suplier = _a.sent();
                if (suplier === undefined) {
                    throw new AppError_1.default("You don't have supplier permissions", 400);
                }
                return [4 /*yield*/, productRepository.findOne({
                        where: { suplier: suplier, name: data.name },
                    })];
            case 2:
                productExists = _a.sent();
                if (productExists) {
                    throw new AppError_1.default("Supplier already have this product", 400);
                }
                product = productRepository.create(__assign(__assign({}, data), { suplier: suplier }));
                return [4 /*yield*/, productRepository.save(product)];
            case 3:
                _a.sent();
                return [2 /*return*/, removeSuplier(product)];
            case 4:
                error_1 = _a.sent();
                throw new AppError_1.default(error_1.message, 400);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
var listProductById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, product, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                return [4 /*yield*/, productRepository.findOne(id)];
            case 1:
                product = _a.sent();
                if (product === undefined) {
                    throw new AppError_1.default("Product not exists", 400);
                }
                return [2 /*return*/, product];
            case 2:
                error_2 = _a.sent();
                throw new AppError_1.default(error_2.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listProductById = listProductById;
var listAllProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, products, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                return [4 /*yield*/, productRepository.find()];
            case 1:
                products = _a.sent();
                return [2 /*return*/, products];
            case 2:
                error_3 = _a.sent();
                throw new AppError_1.default(error_3.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listAllProducts = listAllProducts;
var listAllProductsFromSupplier = function (supplierID) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, products, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                return [4 /*yield*/, productRepository.find({
                        where: { suplier: supplierID },
                    })];
            case 1:
                products = _a.sent();
                return [2 /*return*/, products];
            case 2:
                error_4 = _a.sent();
                throw new AppError_1.default(error_4.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listAllProductsFromSupplier = listAllProductsFromSupplier;
var updateProduct = function (data, id, supplierID) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, suplierRepository, suplier, product, newProduct, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                suplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, suplierRepository.findOne(supplierID)];
            case 1:
                suplier = _a.sent();
                if (suplier === undefined) {
                    throw new AppError_1.default("Suplier not exists", 400);
                }
                return [4 /*yield*/, productRepository.findOne({
                        where: {
                            suplier: suplier,
                            id: id,
                        },
                    })];
            case 2:
                product = _a.sent();
                if (product === undefined) {
                    throw new AppError_1.default("Product not exists or its not from this supplier", 400);
                }
                return [4 /*yield*/, productRepository.save(__assign(__assign({}, product), data))];
            case 3:
                newProduct = _a.sent();
                return [2 /*return*/, newProduct];
            case 4:
                error_5 = _a.sent();
                throw new AppError_1.default(error_5.message, 400);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
var deleteProduct = function (id, supplierID) { return __awaiter(void 0, void 0, void 0, function () {
    var productRepository, suplierRepository, suplier, product, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
                suplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, suplierRepository.findOne(supplierID)];
            case 1:
                suplier = _a.sent();
                if (suplier === undefined) {
                    throw new AppError_1.default("Suplier not exists", 400);
                }
                return [4 /*yield*/, productRepository.findOne({
                        where: {
                            suplier: suplier,
                            id: id,
                        },
                    })];
            case 2:
                product = _a.sent();
                if (product === undefined) {
                    throw new AppError_1.default("Product not exists or its not from this supplier", 400);
                }
                return [4 /*yield*/, productRepository.delete(product)];
            case 3:
                _a.sent();
                return [2 /*return*/, "deleted"];
            case 4:
                error_6 = _a.sent();
                throw new AppError_1.default(error_6.message, 400);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.service.js.map