import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";
import users from "../model/UserModel";
import { JwtPayload } from "./types";


export const verificarToken = async(req: Request, res:Response, next:NextFunction)=>{
    try {

        const {token}:any = req.headers;
        
        if(!token)return res.status(403).json("token null");

        const decode = Jwt.verify(token, "milinode") as JwtPayload;
        req.body.userid = decode.id; 
        const {userid}= req.body; 
        const user1 = await users.findByPk(userid);

        if (!user1)return res.status(404).json("Not user found");

        console.log(userid);  

        next();
        
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
        
    }
    
        
}

export const verificarTokenADMiN = async(req: Request, res:Response, next:NextFunction)=>{
    try {
        const {token}:any = req.headers

        if(!token)return res.status(403).json("token null");

        const decode = Jwt.verify(token, "milinode") as JwtPayload;
        console.log(decode);
        req.body.userid = decode.id; 
        const {userid}= req.body;
        const user1 = await users.findByPk(userid);
        
        if (!user1)return res.status(404).json("Not user found");
        if (user1.dataValues.rol !== "ADMIN") return res.status(404).json("user is not ADMIN");

        next();
    } catch (error) {
        console.log(error);
        res.status(404).json("token not foud");
        
    }
    
        
}