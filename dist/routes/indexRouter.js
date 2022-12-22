"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authJWT_1 = require("../helpers/authJWT");
const indexControllers_1 = require("../controllers/indexControllers");
const index = (0, express_1.Router)();
index.get('/:id', authJWT_1.verificarToken, indexControllers_1.GetIndex);
index.post('/:id', authJWT_1.verificarToken, indexControllers_1.PostIndex);
index.delete('/:id', authJWT_1.verificarToken, indexControllers_1.DeleteIndex);
exports.default = index;
//# sourceMappingURL=indexRouter.js.map