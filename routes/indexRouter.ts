import { Router } from "express";
import { GetIndex, PostIndex } from "../controllers/indexControllers";


const index = Router();

index.get('/:id', GetIndex);
index.post('/:id', PostIndex);

export default index;
