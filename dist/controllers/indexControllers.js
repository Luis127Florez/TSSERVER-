"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostIndex = exports.GetIndex = void 0;
const GetIndex = (req, res) => {
    res.send("index");
};
exports.GetIndex = GetIndex;
const PostIndex = (req, res) => {
    console.log(req);
    res.send("upload...");
};
exports.PostIndex = PostIndex;
//# sourceMappingURL=indexControllers.js.map