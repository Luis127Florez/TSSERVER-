import { Router } from "express";
import { DeleteSolicitud, GetSolicitud, GetSoliciudByIduser ,GetSoliciudById, PostSolicitud, PutSolicitud } from "../controllers/solicitudesControllers";

const routerSolicitud = Router();

routerSolicitud.get('/', GetSolicitud);
routerSolicitud.get('/:id', GetSoliciudById);
routerSolicitud.patch('/:iduser', GetSoliciudByIduser);
routerSolicitud.post('/', PostSolicitud);
routerSolicitud.put('/:id', PutSolicitud);
routerSolicitud.delete('/:id', DeleteSolicitud);

export default routerSolicitud;



