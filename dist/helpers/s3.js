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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToArrayBuffer = exports.toBase64 = exports.Postarchivo = exports.GetBuckets = void 0;
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const FileReader = require('filereader');
dotenv_1.default.config();
// const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const almacen = new s3_1.default({
    accessKeyId,
    secretAccessKey,
});
const GetBuckets = (filename) => {
    return almacen.getSignedUrl('getObject', { Bucket: "btfundacionet", Key: filename });
};
exports.GetBuckets = GetBuckets;
const Postarchivo = (Bucketsname, file) => __awaiter(void 0, void 0, void 0, function* () {
    // const stream = fs.createReadStream(file.tempFilePath);
    const stream = fs_1.default.createReadStream(file.tempFilePath);
    const params = {
        Bucket: Bucketsname,
        Key: file.name,
        Body: stream
    };
    /* onst base64 = await toBase64(file?.data) */
    /* const params = {
        Bucket: Bucketsname,
        Key: file.name,
        Body: base64ToArrayBuffer(base64),
    }; */
    return almacen.upload(params).promise();
});
exports.Postarchivo = Postarchivo;
/**
 * Transforma un Tipo File a Base64 modo Async
 * @version 0.0.1
 * @async
 * @param {object} file tipo file
 * @return {string} base64
 */
const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    // reader.onerror = (error: ) => reject(error);
});
exports.toBase64 = toBase64;
/**
 * transforma todo de base64 a arraybuffer
 * @version 0.0.1
 * @param {string} base64 valor
 * @return {array} array en bytes
 */
const base64ToArrayBuffer = (base64) => {
    if (!base64)
        return false;
    let binaryString;
    if (typeof base64 === "string" && base64) {
        binaryString = window.atob(base64.substring(base64.indexOf("base64,") + 7, base64.length));
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }
    return false;
};
exports.base64ToArrayBuffer = base64ToArrayBuffer;
//# sourceMappingURL=s3.js.map