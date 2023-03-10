"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const solicitud = connection_1.default.define('solicitudes', {
    NombreEmpresa: {
        type: sequelize_1.DataTypes.STRING
    },
    nitEmpresa: {
        type: sequelize_1.DataTypes.NUMBER
    },
    EstadiaEnEmpresa: {
        type: sequelize_1.DataTypes.STRING
    },
    iduser: {
        type: sequelize_1.DataTypes.NUMBER
    },
    Monto: {
        type: sequelize_1.DataTypes.NUMBER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = solicitud;
//# sourceMappingURL=solicitudesModel.js.map