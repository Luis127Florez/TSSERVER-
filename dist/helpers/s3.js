"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postarchivo = exports.GetBuckets = void 0;
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const almacen = new s3_1.default({
    region,
    accessKeyId,
    secretAccessKey
});
const GetBuckets = () => {
    return almacen.listBuckets().promise();
};
exports.GetBuckets = GetBuckets;
const Postarchivo = (Bucketsname, file) => {
    const stream = fs_1.default.createReadStream(file.tempFilePath);
    const params = {
        Bucket: Bucketsname,
        Key: file.name,
        Body: stream
    };
    return almacen.upload(params).promise();
};
exports.Postarchivo = Postarchivo;
//# sourceMappingURL=s3.js.map