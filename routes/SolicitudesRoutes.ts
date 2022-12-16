import { Router } from "express";
import { DeleteSolicitud, GetSolicitud, GetSoliciudById, PostSolicitud, PutSolicitud } from "../controllers/solicitudesControllers";

const routerSolicitud = Router();

routerSolicitud.get('/', GetSolicitud);
routerSolicitud.get('/:id', GetSoliciudById);
routerSolicitud.post('/', PostSolicitud);
routerSolicitud.put('/:id', PutSolicitud)
routerSolicitud.delete('/:id', DeleteSolicitud)

export default routerSolicitud;



