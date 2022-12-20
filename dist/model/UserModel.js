"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const user = connection_1.default.define('users', {
    idUser: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    TipoDocumento: {
        type: sequelize_1.DataTypes.STRING
    },
    NumCedula: {
        type: sequelize_1.DataTypes.NUMBER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    Telefono: {
        type: sequelize_1.DataTypes.NUMBER
    },
    Edad: {
        type: sequelize_1.DataTypes.NUMBER
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING
    },
    rol: {
        type: sequelize_1.DataTypes.STRING
    },
    Contraseña: {
        type: sequelize_1.DataTypes.STRING
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = user;
//# sourceMappingURL=UserModel.js.map