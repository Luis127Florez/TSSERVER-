"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authJWT_1 = require("../helpers/authJWT");
const UserControllers_1 = require("../controllers/UserControllers");
const router = (0, express_1.Router)();
router.get('/', authJWT_1.verificarTokenADMiN, UserControllers_1.GetUser);
router.get('/:id', authJWT_1.verificarTokenADMiN, UserControllers_1.GetUserById);
router.patch('/', UserControllers_1.PahtUserByEmail);
router.post('/', UserControllers_1.PostUser);
router.put('/:id', authJWT_1.verificarTokenADMiN, UserControllers_1.PutUser);
router.delete('/:id', authJWT_1.verificarTokenADMiN, UserControllers_1.DeleteUser);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map