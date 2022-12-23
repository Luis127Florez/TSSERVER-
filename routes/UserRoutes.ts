import { Router } from "express";
import { verificarToken, verificarTokenADMiN } from "../helpers/authJWT";
import { DeleteUser, GetUser, GetUserById, PahtUserByEmail, PostUser, PutUser, PatchMyself } from "../controllers/UserControllers";

const router = Router();

router.get('/',verificarTokenADMiN ,GetUser);
router.patch('/myself', verificarToken, PatchMyself )
router.get('/:id',verificarTokenADMiN, GetUserById);
router.patch('/', PahtUserByEmail);
router.post('/', PostUser);
router.put('/:id', verificarTokenADMiN, PutUser);
router.delete('/:id', verificarTokenADMiN, DeleteUser);

export default router;