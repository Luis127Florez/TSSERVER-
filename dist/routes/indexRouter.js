"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
const index = (0, express_1.Router)();
index.get('/:id', indexControllers_1.GetIndex);
index.post('/:id', indexControllers_1.PostIndex);
exports.default = index;
//# sourceMappingURL=indexRouter.js.map