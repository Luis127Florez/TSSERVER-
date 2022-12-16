import { Request, Response } from "express";
import users from "../model/UserModel";



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

        res.json(user)
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
        await user.save()
        res.json(user)
        
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