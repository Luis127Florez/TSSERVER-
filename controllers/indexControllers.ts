import { Request, Response } from "express";

export const GetIndex = (req: Request , res: Response)=>{
    res.send("index")
}
export const PostIndex = (req: Request , res: Response)=>{
    console.log(req)
    res.send("upload...")
}