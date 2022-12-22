"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudesControllers_1 = require("../controllers/solicitudesControllers");
const authJWT_1 = require("../helpers/authJWT");
const routerSolicitud = (0, express_1.Router)();
routerSolicitud.get('/', authJWT_1.verificarToken, solicitudesControllers_1.GetSolicitud);
routerSolicitud.get('/:id', authJWT_1.verificarToken, solicitudesControllers_1.GetSoliciudById);
routerSolicitud.patch('/:iduser', authJWT_1.verificarToken, solicitudesControllers_1.GetSoliciudByIduser);
routerSolicitud.post('/', authJWT_1.verificarToken, solicitudesControllers_1.PostSolicitud);
routerSolicitud.put('/:id', authJWT_1.verificarToken, solicitudesControllers_1.PutSolicitud);
routerSolicitud.delete('/:id', authJWT_1.verificarToken, solicitudesControllers_1.DeleteSolicitud);
exports.default = routerSolicitud;
//# sourceMappingURL=SolicitudesRoutes.js.map