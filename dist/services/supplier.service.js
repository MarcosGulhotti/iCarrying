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
exports.deleteSupplier = exports.updateSupplier = exports.getAllSuppliers = exports.getSupplierById = exports.createSupplier = void 0;
var typeorm_1 = require("typeorm");
var Supplier_1 = require("../entities/Supplier");
var AppError_1 = __importDefault(require("../errors/AppError"));
var removePassword = function (supplierInfos) {
    var id = supplierInfos.id, name = supplierInfos.name, cnpj = supplierInfos.cnpj, email = supplierInfos.email, address = supplierInfos.address, grade = supplierInfos.grade;
    var supplierNoPassword = { id: id, name: name, cnpj: cnpj, email: email, address: address, grade: grade };
    return supplierNoPassword;
};
var createSupplier = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var supplierRepository, supplier, output, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                supplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                supplier = supplierRepository.create(body);
                return [4 /*yield*/, supplierRepository.save(supplier)];
            case 1:
                _a.sent();
                output = removePassword(supplier);
                return [2 /*return*/, output];
            case 2:
                e_1 = _a.sent();
                throw new AppError_1.default(e_1.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createSupplier = createSupplier;
var getSupplierById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var supplierRepository, supplier, output, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                supplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, supplierRepository.findOne(id)];
            case 1:
                supplier = _a.sent();
                if (supplier === undefined) {
                    throw new AppError_1.default("supplier not exists", 400);
                }
                output = removePassword(supplier);
                return [2 /*return*/, output];
            case 2:
                e_2 = _a.sent();
                throw new AppError_1.default(e_2.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSupplierById = getSupplierById;
var getAllSuppliers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var supplierRepository, suppliers, newSuppliers_1, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                supplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, supplierRepository.find()];
            case 1:
                suppliers = _a.sent();
                newSuppliers_1 = [];
                suppliers.forEach(function (elm) { return newSuppliers_1.push(removePassword(elm)); });
                return [2 /*return*/, newSuppliers_1];
            case 2:
                e_3 = _a.sent();
                throw new AppError_1.default(e_3.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllSuppliers = getAllSuppliers;
var updateSupplier = function (id, data, userID) { return __awaiter(void 0, void 0, void 0, function () {
    var supplierRepository, supplier, newSupplier, noPassword, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                supplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, supplierRepository.findOne(id)];
            case 1:
                supplier = _a.sent();
                if (supplier === undefined) {
                    throw new AppError_1.default("supplier not exists", 400);
                }
                if (userID !== supplier.id) {
                    throw new AppError_1.default("User is not Owner of this supplier", 401);
                }
                if (data.id || data.password || data.cnpj || data.grade) {
                    throw new AppError_1.default("you can't change id, password, grade or cnpj using this rote", 401);
                }
                return [4 /*yield*/, supplierRepository.save(__assign(__assign({}, supplier), data))];
            case 2:
                newSupplier = _a.sent();
                noPassword = removePassword(newSupplier);
                return [2 /*return*/, noPassword];
            case 3:
                e_4 = _a.sent();
                throw new AppError_1.default(e_4.message, 400);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateSupplier = updateSupplier;
var deleteSupplier = function (id, userID) { return __awaiter(void 0, void 0, void 0, function () {
    var supplierRepository, supplier, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                supplierRepository = (0, typeorm_1.getRepository)(Supplier_1.Supplier);
                return [4 /*yield*/, supplierRepository.findOne(id)];
            case 1:
                supplier = _a.sent();
                if (supplier === undefined) {
                    throw new AppError_1.default("supplier not exists", 400);
                }
                if (userID !== supplier.id) {
                    throw new AppError_1.default("User is not Owner of this supplier", 401);
                }
                return [4 /*yield*/, supplierRepository.delete(supplier)];
            case 2:
                _a.sent();
                return [2 /*return*/, "deleted"];
            case 3:
                e_5 = _a.sent();
                throw new AppError_1.default(e_5.message, 400);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteSupplier = deleteSupplier;
//# sourceMappingURL=supplier.service.js.map