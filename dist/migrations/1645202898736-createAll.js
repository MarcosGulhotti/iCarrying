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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAll1645202898736 = void 0;
var createAll1645202898736 = /** @class */ (function () {
    function createAll1645202898736() {
        this.name = 'createAll1645202898736';
    }
    createAll1645202898736.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"adm\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, CONSTRAINT \"UQ_0f5ee0a519c677c5237a33b9516\" UNIQUE (\"email\"), CONSTRAINT \"PK_d4dab02cf2667fc5b673741b322\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"buy\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"status\" character varying NOT NULL, CONSTRAINT \"PK_634c4687b54f6a44ac0c142adf7\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cart\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"marketId\" character varying, CONSTRAINT \"PK_c524ec48751b9b5bcfbf6e59be7\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"supplier\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"cnpj\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"address\" character varying NOT NULL, \"grade\" character varying DEFAULT '0', CONSTRAINT \"UQ_6bcf219f3f47c8de1c0c82fd523\" UNIQUE (\"cnpj\"), CONSTRAINT \"UQ_c40cbff7400f06ae1c8d9f42333\" UNIQUE (\"email\"), CONSTRAINT \"PK_2bc0d2cab6276144d2ff98a2828\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"price\" character varying NOT NULL, \"description\" character varying NOT NULL, \"image\" character varying NOT NULL, \"suplierId\" uuid, CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cart_product\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"status\" character varying NOT NULL, \"cartId\" uuid, \"productId\" uuid, \"buyId\" uuid, CONSTRAINT \"PK_dccd1ec2d6f5644a69adf163bc1\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"trucks\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"plate\" character varying NOT NULL, CONSTRAINT \"UQ_43b4c59e7939442f60013292443\" UNIQUE (\"plate\"), CONSTRAINT \"PK_6a134fb7caa4fb476d8a6e035f9\" PRIMARY KEY (\"id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"delivery\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"status\" character varying NOT NULL, \"buyId\" uuid, \"trucksId\" uuid, CONSTRAINT \"REL_9e75c7fc1a2a3da26733ddbafb\" UNIQUE (\"buyId\"), CONSTRAINT \"REL_38528cfe739eaedbeed3a4a084\" UNIQUE (\"trucksId\"), CONSTRAINT \"PK_ffad7bf84e68716cd9af89003b0\" PRIMARY KEY (\"id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"market\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"cnpj\" character varying NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"address\" character varying NOT NULL, \"cartId\" uuid, CONSTRAINT \"UQ_b16d758e54a7e9834e748325add\" UNIQUE (\"cnpj\"), CONSTRAINT \"UQ_df94b6d8a6b17068b8d436aa44e\" UNIQUE (\"email\"), CONSTRAINT \"REL_df9dea595d3bf2c887dc8bcbcf\" UNIQUE (\"cartId\"), CONSTRAINT \"PK_1e9a2963edfd331d92018e3abac\" PRIMARY KEY (\"id\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_ea8cfd623055b1afc450eb33898\" FOREIGN KEY (\"suplierId\") REFERENCES \"supplier\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" ADD CONSTRAINT \"FK_139f8024067696fe5a8400ebda2\" FOREIGN KEY (\"cartId\") REFERENCES \"cart\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" ADD CONSTRAINT \"FK_4f1b0c66f4e0b4610e14ca42e5c\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" ADD CONSTRAINT \"FK_12150d5faf075723bd2a19c018a\" FOREIGN KEY (\"buyId\") REFERENCES \"buy\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"delivery\" ADD CONSTRAINT \"FK_9e75c7fc1a2a3da26733ddbafbf\" FOREIGN KEY (\"buyId\") REFERENCES \"buy\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"delivery\" ADD CONSTRAINT \"FK_38528cfe739eaedbeed3a4a0847\" FOREIGN KEY (\"trucksId\") REFERENCES \"trucks\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"market\" ADD CONSTRAINT \"FK_df9dea595d3bf2c887dc8bcbcfa\" FOREIGN KEY (\"cartId\") REFERENCES \"cart\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createAll1645202898736.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"market\" DROP CONSTRAINT \"FK_df9dea595d3bf2c887dc8bcbcfa\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"delivery\" DROP CONSTRAINT \"FK_38528cfe739eaedbeed3a4a0847\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"delivery\" DROP CONSTRAINT \"FK_9e75c7fc1a2a3da26733ddbafbf\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" DROP CONSTRAINT \"FK_12150d5faf075723bd2a19c018a\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" DROP CONSTRAINT \"FK_4f1b0c66f4e0b4610e14ca42e5c\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_product\" DROP CONSTRAINT \"FK_139f8024067696fe5a8400ebda2\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_ea8cfd623055b1afc450eb33898\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"market\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"delivery\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"trucks\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cart_product\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"supplier\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cart\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"buy\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"adm\"")];
                    case 16:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createAll1645202898736;
}());
exports.createAll1645202898736 = createAll1645202898736;
//# sourceMappingURL=1645202898736-createAll.js.map