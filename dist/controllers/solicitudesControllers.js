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
exports.GetUnionU_S = exports.DeleteSolicitud = exports.PutSolicitud = exports.PostSolicitud = exports.GetSoliciudById = exports.GetSolicitud = void 0;
const solicitudesModel_1 = __importDefault(require("../model/solicitudesModel"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const GetSolicitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const solicitud = yield solicitudesModel_1.default.findAll();
    res.json(solicitud);
});
exports.GetSolicitud = GetSolicitud;
const GetSoliciudById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const solicitud = yield solicitudesModel_1.default.findByPk(id);
    res.json(solicitud);
});
exports.GetSoliciudById = GetSoliciudById;
const PostSolicitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const solicitud = new solicitudesModel_1.default(body);
    yield solicitud.save();
    res.json(solicitud);
});
exports.PostSolicitud = PostSolicitud;
const PutSolicitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const solicitud = yield solicitudesModel_1.default.findByPk(id);
        if (!solicitud) {
            return res.status(404).json({ msg: 'usuario no existe' });
        }
        yield solicitud.update(body);
        res.json(solicitud);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'habla con el admin'
        });
    }
});
exports.PutSolicitud = PutSolicitud;
const DeleteSolicitud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const solicitud = yield solicitudesModel_1.default.findByPk(id);
    console.log(solicitud);
    if (!solicitud) {
        return res.status(404).json({
            msg: 'No exite un usuario con el id ingresado'
        });
    }
    yield solicitud.destroy();
    res.json({
        msg: 'solicitud eliminada'
    });
});
exports.DeleteSolicitud = DeleteSolicitud;
const GetUnionU_S = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        solicitudesModel_1.default.belongsTo(UserModel_1.default, {
            foreignKey: "idUser",
            targetKey: "idUser",
        });
        const UnionU_S = yield solicitudesModel_1.default.findAll({ include: [{ model: UserModel_1.default, as: "user" }] });
        res.json(UnionU_S);
    }
    catch (error) {
        console.log(error);
    }
});
exports.GetUnionU_S = GetUnionU_S;
//# sourceMappingURL=solicitudesControllers.js.map