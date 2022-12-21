import { Router } from "express";
import { GetIndex, PostIndex, DeleteIndex} from "../controllers/indexControllers";


const index = Router();

index.get('/:id', GetIndex);
index.post('/:id', PostIndex);
index.delete('/:id', DeleteIndex)

export default index;
