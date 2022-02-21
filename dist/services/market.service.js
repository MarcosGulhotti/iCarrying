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
exports.delMarket = exports.patchMarket = exports.getAllMarkets = exports.getMarketById = exports.createMarket = void 0;
var typeorm_1 = require("typeorm");
var entities_1 = require("../entities");
var AppError_1 = __importDefault(require("../errors/AppError"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var removePassword = function (marketInfos) {
    var id = marketInfos.id, name = marketInfos.name, cnpj = marketInfos.cnpj, email = marketInfos.email, address = marketInfos.address, cart = marketInfos.cart;
    var marketNoPassword = { id: id, name: name, cnpj: cnpj, email: email, address: address, cart: cart };
    return marketNoPassword;
};
var createMarket = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var marketRepository, cartRepository, market, cart, marketNoPassword, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                cartRepository = (0, typeorm_1.getRepository)(entities_1.Cart);
                market = marketRepository.create(__assign({}, body));
                return [4 /*yield*/, marketRepository.save(market)];
            case 1:
                _a.sent();
                cart = cartRepository.create({ marketId: market.id });
                return [4 /*yield*/, cartRepository.save(cart)];
            case 2:
                _a.sent();
                return [4 /*yield*/, marketRepository.save(__assign(__assign({}, market), { cart: cart }))];
            case 3:
                _a.sent();
                marketNoPassword = removePassword(market);
                return [2 /*return*/, marketNoPassword];
            case 4:
                error_1 = _a.sent();
                throw new AppError_1.default(error_1.message, 400);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createMarket = createMarket;
var getMarketById = function (marketId) { return __awaiter(void 0, void 0, void 0, function () {
    var marketRepository, market, marketNoPassword, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, marketRepository.findOne(marketId)];
            case 2:
                market = _a.sent();
                if (market !== undefined) {
                    marketNoPassword = removePassword(market);
                    return [2 /*return*/, marketNoPassword];
                }
                else {
                    throw new AppError_1.default("Market not found", 404);
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                throw new AppError_1.default("Market not found", 404);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getMarketById = getMarketById;
var getAllMarkets = function () { return __awaiter(void 0, void 0, void 0, function () {
    var marketRepository, markets, marketsNoPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                return [4 /*yield*/, marketRepository.find()];
            case 1:
                markets = _a.sent();
                marketsNoPassword = markets.map(function (market) { return removePassword(market); });
                return [2 /*return*/, marketsNoPassword];
        }
    });
}); };
exports.getAllMarkets = getAllMarkets;
var patchMarket = function (marketId, body) { return __awaiter(void 0, void 0, void 0, function () {
    var marketRepository, market, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                if (body.password) {
                    body.password = bcrypt_1.default.hashSync(body.password, 8);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, marketRepository.findOne(marketId)];
            case 2:
                market = _a.sent();
                if (!(market !== undefined)) return [3 /*break*/, 4];
                return [4 /*yield*/, marketRepository.save(__assign(__assign({}, market), body))];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4: throw new AppError_1.default("Market not found", 404);
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                throw new AppError_1.default(error_3.message, 400);
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.patchMarket = patchMarket;
var delMarket = function (marketId) { return __awaiter(void 0, void 0, void 0, function () {
    var marketRepository, deleteResult, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                marketRepository = (0, typeorm_1.getRepository)(entities_1.Market);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, marketRepository.delete(marketId)];
            case 2:
                deleteResult = _a.sent();
                if (deleteResult.affected === 0) {
                    throw new AppError_1.default("Market not found", 404);
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                throw new AppError_1.default("Market not found", 404);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.delMarket = delMarket;
//# sourceMappingURL=market.service.js.map