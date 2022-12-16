"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudesControllers_1 = require("../controllers/solicitudesControllers");
const routerSolicitud = (0, express_1.Router)();
routerSolicitud.get('/', solicitudesControllers_1.GetSolicitud);
routerSolicitud.get('/:id', solicitudesControllers_1.GetSoliciudById);
routerSolicitud.post('/', solicitudesControllers_1.PostSolicitud);
routerSolicitud.put('/:id', solicitudesControllers_1.PutSolicitud);
routerSolicitud.delete('/:id', solicitudesControllers_1.DeleteSolicitud);
exports.default = routerSolicitud;
//# sourceMappingURL=SolicitudesRoutes.js.map