import { Request, Response } from "express";
import users from "../model/UserModel";
import { Postarchivo, GetBuckets } from "../helpers/s3";

export const GetIndex = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const usuario =  await users.findByPk(id)

        if (!usuario) {
            return res.status(404).json({
                msg: 'No exite un usuario con el id ingresado'
            })
        }
        const data = await GetBuckets(usuario.img);

        res.json({"link": data})
        
    } catch (error) {
        console.log(error)
        res.status(500).json("error en el server")
    }
    

}

export const PostIndex = async (req: Request, res: Response) => {

    try {
        if (!req.files) return res.status(400).json({ msg: "No Hubo archivo seleccionado" })
        const Bucket = "escuelitaet"
        const file = req.files.file
        const { id } = req.params
    
        const result = await Postarchivo(Bucket, file) 
    
        const usuario =  await users.findByPk(id)
    
        if(!usuario) return res.status(404).json("No se encontro un usuario con ese id")
    
        await usuario.update({"img": `${req.files.file.name}`});
    
        res.json(result)
        
    } catch (error) {
        console.log(error)
        res.status(500).json("error en el server")
        
    }

   
}