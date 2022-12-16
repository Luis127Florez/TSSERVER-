import { Router } from "express";
import { GetIndex, PostIndex } from "../controllers/indexControllers";


const index = Router();

index.get('/', GetIndex);
index.post('/', PostIndex);

export default index;
