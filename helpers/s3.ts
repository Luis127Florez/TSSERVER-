import  s3  from "aws-sdk/clients/s3";
import fs from 'fs'
import dotenv from "dotenv";
dotenv.config();

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const almacen = new s3({
    region,
    accessKeyId,
    secretAccessKey

});

export const GetBuckets=()=>{
    return almacen.listBuckets().promise()
}

export  const Postarchivo=(Bucketsname:any , file:any)=>{
    const stream = fs.createReadStream(file.tempFilePath);
    const params ={
        Bucket: Bucketsname,
        Key: file.name,
        Body: stream
    }
    return almacen.upload(params).promise();
}
