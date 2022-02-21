"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMarketSchema = exports.CreateMarketSchema = void 0;
var yup = __importStar(require("yup"));
exports.CreateMarketSchema = yup.object().shape({
    name: yup.string().required(),
    cnpj: yup.string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "incorrect cnpj format, correct format is XX.XXX.XXX/XXXX-XX").required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    address: yup.string().required()
});
exports.updateMarketSchema = yup.object().shape({
    name: yup.string(),
    cnpj: yup.string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "incorrect cnpg format, correct format is XX.XXX.XXX/XXXX-XX"),
    email: yup.string().email(),
    password: yup.string().min(8),
    address: yup.string()
});
//# sourceMappingURL=marketSchema.js.map