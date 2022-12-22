import { Router } from "express";
import { DeleteSolicitud, GetSolicitud, GetSoliciudByIduser ,GetSoliciudById, PostSolicitud, PutSolicitud } from "../controllers/solicitudesControllers";
import { verificarToken } from "../helpers/authJWT";

const routerSolicitud = Router();

routerSolicitud.get('/',verificarToken, GetSolicitud);
routerSolicitud.get('/:id',verificarToken, GetSoliciudById);
routerSolicitud.patch('/:iduser',verificarToken, GetSoliciudByIduser);
routerSolicitud.post('/',verificarToken, PostSolicitud);
routerSolicitud.put('/:id',verificarToken, PutSolicitud);
routerSolicitud.delete('/:id',verificarToken, DeleteSolicitud);

export default routerSolicitud;



