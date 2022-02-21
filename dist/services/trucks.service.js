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
exports.deleteTruck = exports.updateTruck = exports.listAllTrucks = exports.listTruckById = exports.createTruck = void 0;
var typeorm_1 = require("typeorm");
var entities_1 = require("../entities");
var AppError_1 = __importDefault(require("../errors/AppError"));
var createTruck = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var truckRepository, truck, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                truckRepository = (0, typeorm_1.getRepository)(entities_1.Trucks);
                truck = truckRepository.create(body);
                return [4 /*yield*/, truckRepository.save(truck)];
            case 1:
                _a.sent();
                return [2 /*return*/, truck];
            case 2:
                error_1 = _a.sent();
                throw new AppError_1.default(error_1.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createTruck = createTruck;
var listTruckById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var truckRepository, truck, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                truckRepository = (0, typeorm_1.getRepository)(entities_1.Trucks);
                return [4 /*yield*/, truckRepository.findOne(id)];
            case 1:
                truck = _a.sent();
                if (truck === undefined) {
                    throw new AppError_1.default("Truck does not exist", 400);
                }
                return [2 /*return*/, truck];
            case 2:
                error_2 = _a.sent();
                throw new AppError_1.default(error_2.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listTruckById = listTruckById;
var listAllTrucks = function () { return __awaiter(void 0, void 0, void 0, function () {
    var truckRepository, trucks, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                truckRepository = (0, typeorm_1.getRepository)(entities_1.Trucks);
                return [4 /*yield*/, truckRepository.find()];
            case 1:
                trucks = _a.sent();
                return [2 /*return*/, trucks];
            case 2:
                error_3 = _a.sent();
                throw new AppError_1.default(error_3.message, 400);
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.listAllTrucks = listAllTrucks;
var updateTruck = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var id, truckRepository, truck, updatedTruck, newTruck, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                truckRepository = (0, typeorm_1.getRepository)(entities_1.Trucks);
                return [4 /*yield*/, truckRepository.findOne(id)];
            case 1:
                truck = _a.sent();
                if (truck === undefined) {
                    throw new AppError_1.default("Truck does not exist", 400);
                }
                return [4 /*yield*/, truckRepository.update(id, req.body)];
            case 2:
                updatedTruck = _a.sent();
                return [4 /*yield*/, truckRepository.findOne(id)];
            case 3:
                newTruck = _a.sent();
                return [2 /*return*/, newTruck];
            case 4:
                error_4 = _a.sent();
                throw new AppError_1.default(error_4.message, 400);
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateTruck = updateTruck;
var deleteTruck = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var truckRespository, deleteResult, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                truckRespository = (0, typeorm_1.getRepository)(entities_1.Trucks);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, truckRespository.delete(id)];
            case 2:
                deleteResult = _a.sent();
                if (deleteResult.affected === 0) {
                    throw new AppError_1.default("Truck not found", 404);
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                throw new AppError_1.default("Truck not found", 404);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteTruck = deleteTruck;
//# sourceMappingURL=trucks.service.js.map