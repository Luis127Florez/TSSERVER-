import { Router } from "express";
import { DeleteUser, GetUser, GetUserById, PahtUserByEmail, PostUser, PutUser } from "../controllers/UserControllers";

const router = Router()

router.get('/', GetUser);
router.get('/:id', GetUserById);
router.patch('/:email', PahtUserByEmail);
router.post('/', PostUser);
router.put('/:id', PutUser);
router.delete('/:id', DeleteUser);

export default router