import { Request, Response } from "express";
import users from "../model/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const GetUser = async (req: Request, res: Response) => {

    const user = await users.findAll()
    res.json(user)
} 

export const GetUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await users.findByPk(id)
    if (user) {
        res.json(user)     
    } else {
        res.status(404).json({
           msg: 'usuario no existe'
        })
    }
}
export const PahtUserByEmail = async(req : Request , res: Response)=>{
    const { body } = req
    try {
        const user = await users.findOne({
            where:{
                email: body.email
            } 
        })
        if (user) {
            const hash:string = user.dataValues.Contraseña;

            const passchek = bcrypt.compareSync(`${body.Contraseña}` , hash );
            

            if (!passchek) return res.json("pass NOT iguales");
             const token =  jwt.sign({
                id: user.dataValues.idUser
              }, 'milinode', { expiresIn: 86400 });

            res.json({
                email: user.dataValues.email,
                rol: user.dataValues.rol,
                token: token
            })
            
        }else{
            return res.json(user)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'habla con el admin'
        })
    }
}

export const PostUser = async (req: Request, res: Response) => {
    const { body } = req
    try {
        const user = new users(body);

        const emailRepetido = await users.findOne({
            where:{
                email: body.email
            }
        })
        if (emailRepetido) {
            return res.status(400).json({
                msg: 'este email ya pertese a un user'
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.dataValues.Contraseña, salt);

        user.dataValues.Contraseña = hash;

        await user.save(); 

        const token = jwt.sign({
            id: user.dataValues.idUser
          }, 'milinode', { expiresIn: 86400 });

        res.json({token})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'habla con el admin'
        })
    }

}
export const PutUser = async(req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {

        const usuario =  await users.findByPk(id)
        if (!usuario) { 
            return res.status(404).json({
                msg: 'No exite un usuario con el id ingresado'
            })
        }

        await usuario.update(body)
        res.json( usuario )
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'habla con el admin' 
        })
    }
}
export const DeleteUser = async(req: Request, res: Response) => {
    const { id } = req.params

    const usuario =  await users.findByPk(id)
    if (!usuario) {
        return res.status(404).json({
            msg: 'No exite un usuario con el id ingresado'
        })
    }

    await usuario.update({estado : false})

    //await usuario.destroy()

    res.json({
        msg: 'usuario eliminado'
    })
}
export const PatchMyself =  async ( req:Request , res:Response) =>{
    try {
        const { token } = req.body
        const decode = jwt.verify(token, "milinode")
        const user = await users.findByPk(decode.id)
        if (user) return res.json(user)     
    } catch (error) {
        console.log(error);
        res.status(404).json("Token erroneo")

    }
    

}