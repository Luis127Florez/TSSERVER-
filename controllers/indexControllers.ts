import { Request, Response } from "express";
import AWS from 'aws-sdk';
export const GetIndex = (req: Request, res: Response) => {
    res.send("index")
}
export const PostIndex = (req: Request, res: Response) => {
    console.log(req.files)
    res.send("upload...")
}