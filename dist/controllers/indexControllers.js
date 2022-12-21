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
exports.DeleteIndex = exports.PostIndex = exports.GetIndex = void 0;
const UserModel_1 = __importDefault(require("../model/UserModel"));
const s3_1 = require("../helpers/s3");
const GetIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield UserModel_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No exite un usuario con el id ingresado'
            });
        }
        const data = yield (0, s3_1.GetBuckets)(usuario.img);
        res.json({ "link": data });
    }
    catch (error) {
        console.log(error);
        res.status(500).json("error en el server");
    }
});
exports.GetIndex = GetIndex;
const PostIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files)
            return res.status(400).json({ msg: "No Hubo archivo seleccionado" });
        const Bucket = "escuelitaet";
        const file = req.files.file;
        const { id } = req.params;
        const result = yield (0, s3_1.Postarchivo)(Bucket, file);
        const usuario = yield UserModel_1.default.findByPk(id);
        if (!usuario)
            return res.status(404).json("No se encontro un usuario con ese id");
        const fileName = req.files.file.name;
        yield usuario.update({ "img": `${fileName}` });
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("error en el server");
    }
});
exports.PostIndex = PostIndex;
const DeleteIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield UserModel_1.default.findByPk(id);
        if (!usuario)
            return res.status(404).json("No se encontro un usuario con ese id");
        (0, s3_1.DeleteArchivo)(usuario.img);
        yield usuario.update({ "img": `` });
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("error en el server");
    }
});
exports.DeleteIndex = DeleteIndex;
//# sourceMappingURL=indexControllers.js.map