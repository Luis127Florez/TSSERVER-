import { Router } from "express";
import { verificarToken } from "../helpers/authJWT";
import { GetIndex, PostIndex, DeleteIndex} from "../controllers/indexControllers";


const index = Router();

index.get('/:id',verificarToken , GetIndex);
index.post('/:id',verificarToken, PostIndex);
index.delete('/:id',verificarToken , DeleteIndex)

export default index;
