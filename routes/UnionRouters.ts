import { Router } from "express";
import { verificarToken } from "../helpers/authJWT";
import { GetUnionU_S } from "../controllers/solicitudesControllers";


const unionU_S = Router();

unionU_S.get('/', verificarToken ,GetUnionU_S);

export default unionU_S;
