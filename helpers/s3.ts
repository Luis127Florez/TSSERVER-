import s3 from "aws-sdk/clients/s3";
import fs from "fs";
import dotenv from "dotenv";
const FileReader = require('filereader')
dotenv.config();

// const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const almacen = new s3({
    accessKeyId,
    secretAccessKey,
});

export const GetBuckets = (filename : string) => {
    return almacen.getSignedUrl('getObject', { Bucket: "btfundacionet", Key: filename });
};

export const Postarchivo = async (Bucketsname: any, file: any) => {
    // const stream = fs.createReadStream(file.tempFilePath);
    const stream = fs.createReadStream(file.tempFilePath);
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
};


/**
 * Transforma un Tipo File a Base64 modo Async
 * @version 0.0.1
 * @async
 * @param {object} file tipo file
 * @return {string} base64
 */
export const toBase64 = (
    file: File
): Promise<void | null | ArrayBuffer | string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        // reader.onerror = (error: ) => reject(error);
    });

/**
 * transforma todo de base64 a arraybuffer
 * @version 0.0.1
 * @param {string} base64 valor
 * @return {array} array en bytes
 */
export const base64ToArrayBuffer = (
    base64: string | void | ArrayBuffer | null
): ArrayBuffer | boolean => {
    if (!base64) return false;
    let binaryString;
    if (typeof base64 === "string" && base64) {
        binaryString = window.atob(
            base64.substring(base64.indexOf("base64,") + 7, base64.length)
        );
        const len: number = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }
    return false;
};
