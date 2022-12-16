import { Router } from "express";
import { GetUnionU_S } from "../controllers/solicitudesControllers";


const unionU_S = Router();

unionU_S.get('/', GetUnionU_S);

export default unionU_S;
