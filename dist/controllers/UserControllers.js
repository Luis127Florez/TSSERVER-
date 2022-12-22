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
exports.DeleteUser = exports.PutUser = exports.PostUser = exports.PahtUserByEmail = exports.GetUserById = exports.GetUser = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GetUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel_1.default.findAll();
    res.json(user);
});
exports.GetUser = GetUser;
const GetUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield UserModel_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: 'usuario no existe'
        });
    }
});
exports.GetUserById = GetUserById;
const PahtUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield UserModel_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (user) {
            if (user.Contraseña !== body.Contraseña)
                return res.json(["pass not found"]);
            const token = jsonwebtoken_1.default.sign({
                id: user.idUser
            }, 'milinode', { expiresIn: 86400 });
            res.json({
                email: user.email,
                rol: user.rol,
                token: token
            });
        }
        else {
            return res.json([user]);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'habla con el admin'
        });
    }
});
exports.PahtUserByEmail = PahtUserByEmail;
const PostUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = new UserModel_1.default(body);
        const emailRepetido = yield UserModel_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailRepetido) {
            return res.status(400).json({
                msg: 'este email ya pertese a un user'
            });
        }
        yield user.save();
        const token = jsonwebtoken_1.default.sign({
            id: user.idUser
        }, 'milinode', { expiresIn: 86400 });
        res.json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'habla con el admin'
        });
    }
});
exports.PostUser = PostUser;
const PutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield UserModel_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No exite un usuario con el id ingresado'
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'habla con el admin'
        });
    }
});
exports.PutUser = PutUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield UserModel_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No exite un usuario con el id ingresado'
        });
    }
    yield usuario.update({ estado: false });
    //await usuario.destroy()
    res.json({
        msg: 'usuario eliminado'
    });
});
exports.DeleteUser = DeleteUser;
//# sourceMappingURL=UserControllers.js.map