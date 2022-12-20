import { Request, Response } from "express";
import { Postarchivo , GetBuckets } from "../helpers/s3";

export const GetIndex =  async(req: Request, res: Response) => {
    const data = await GetBuckets();
    /* res.render('index',{
        buckets:data.Buckets
    }); */
    console.log(data)
}

export const PostIndex = async(req: Request, res: Response) => {

    if(!req.files) return res.status(400).json({msg: "No Hubo archivo seleccionado"})
    const Bucket = req.body.Bucked
    const file = req.files.file
    
    const result = await Postarchivo(Bucket, file)
    res.json(result)
}