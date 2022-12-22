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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarTokenADMiN = exports.verificarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const verificarToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token)
            return res.status(403).json("token null");
        const decode = jsonwebtoken_1.default.verify(token, "milinode");
        req.body.userid = decode.id;
        const { userid } = req.body;
        const user1 = yield UserModel_1.default.findByPk(userid);
        console.log(user1.rol);
        if (!user1)
            return res.status(404).json("Not user found");
        console.log(userid);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
    }
});
exports.verificarToken = verificarToken;
const verificarTokenADMiN = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token)
            return res.status(403).json("token null");
        const decode = jsonwebtoken_1.default.verify(token, "milinode");
        req.body.userid = decode.id;
        const { userid } = req.body;
        const user1 = yield UserModel_1.default.findByPk(userid);
        if (!user1)
            return res.status(404).json("Not user found");
        if (user1.rol !== "ADMIN")
            return res.status(404).json("user is not ADMIN");
        next();
    }
    catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
    }
});
exports.verificarTokenADMiN = verificarTokenADMiN;
//# sourceMappingURL=authJWT.js.map