"use strict";
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
exports.isSupplierOwnerCheck = exports.isMarketOwnerCheck = exports.isAdmCheck = void 0;
var AppError_1 = __importDefault(require("../errors/AppError"));
var typeorm_1 = require("typeorm");
var entities_1 = require("../entities");
var isAdmCheck = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var admRepository, adm, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.isAuthorized) {
                    return [2 /*return*/, next()];
                }
                admRepository = (0, typeorm_1.getRepository)(entities_1.Adm);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, admRepository.findOne(req.currentUser.id)];
            case 2:
                adm = _a.sent();
                if (adm !== undefined) {
                    next();
                }
                else {
                    next(new AppError_1.default("No authorization", 401));
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                next(new AppError_1.default("No authorization", 401));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.isAdmCheck = isAdmCheck;
var isMarketOwnerCheck = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, marketRepository, market;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                return [4 /*yield*/, marketRepository.findOne(req.currentUser.id)];
            case 1:
                market = _a.sent();
                if ((market === null || market === void 0 ? void 0 : market.id) === id && id !== undefined) {
                    req.isAuthorized = true;
                }
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.isMarketOwnerCheck = isMarketOwnerCheck;
var isSupplierOwnerCheck = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, supplierRepository, supplier;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                supplierRepository = (0, typeorm_1.getRepository)(entities_1.Supplier);
                return [4 /*yield*/, supplierRepository.findOne(req.currentUser.id)];
            case 1:
                supplier = _a.sent();
                if ((supplier === null || supplier === void 0 ? void 0 : supplier.id) === id && id !== undefined) {
                    req.isAuthorized = true;
                }
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.isSupplierOwnerCheck = isSupplierOwnerCheck;
//# sourceMappingURL=authorization.middleware.js.map