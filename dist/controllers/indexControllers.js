"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostIndex = exports.GetIndex = void 0;
const s3_1 = require("../helpers/s3");
const GetIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, s3_1.GetBuckets)();
    /* res.render('index',{
        buckets:data.Buckets
    }); */
    console.log(data);
});
exports.GetIndex = GetIndex;
const PostIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files)
        return res.status(400).json({ msg: "No Hubo archivo seleccionado" });
    const Bucket = req.body.Bucked;
    const file = req.files.file;
    const result = yield (0, s3_1.Postarchivo)(Bucket, file);
    res.json(result);
});
exports.PostIndex = PostIndex;
//# sourceMappingURL=indexControllers.js.map