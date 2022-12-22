import { Router } from "express";
import { verificarToken } from "../helpers/authJWT";
import { DeleteUser, GetUser, GetUserById, PahtUserByEmail, PostUser, PutUser } from "../controllers/UserControllers";

const router = Router();

router.get('/',verificarToken ,GetUser);
router.get('/:id',verificarToken, GetUserById);
router.patch('/', PahtUserByEmail);
router.post('/', PostUser);
router.put('/:id', verificarToken, PutUser);
router.delete('/:id', verificarToken, DeleteUser);

export default router;