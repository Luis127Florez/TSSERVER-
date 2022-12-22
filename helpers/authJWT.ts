import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";
import users from "../model/UserModel";


export const verificarToken = async(req: Request, res:Response, next:NextFunction)=>{
    try {
        const {token} = req.body

        if(!token)return res.status(403).json("token null")

        const decode = Jwt.verify(token, "milinode")
        req.body.userid = decode.id 
        const {userid}= req.body 
        const user1 = await users.findByPk(userid)
        if (!user1)return res.status(404).json("Not user found")

        console.log(userid); 

        next();
        
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
        
    }
    
        
}