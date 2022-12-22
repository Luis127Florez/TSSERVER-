"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authJWT_1 = require("../helpers/authJWT");
const solicitudesControllers_1 = require("../controllers/solicitudesControllers");
const unionU_S = (0, express_1.Router)();
unionU_S.get('/', authJWT_1.verificarToken, solicitudesControllers_1.GetUnionU_S);
exports.default = unionU_S;
//# sourceMappingURL=UnionRouters.js.map