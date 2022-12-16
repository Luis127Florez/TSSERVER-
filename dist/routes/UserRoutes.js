"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControllers_1 = require("../controllers/UserControllers");
const router = (0, express_1.Router)();
router.get('/', UserControllers_1.GetUser);
router.get('/:id', UserControllers_1.GetUserById);
router.patch('/:email', UserControllers_1.PahtUserByEmail);
router.post('/', UserControllers_1.PostUser);
router.put('/:id', UserControllers_1.PutUser);
router.delete('/:id', UserControllers_1.DeleteUser);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map