import { Request, Response } from "express";
import users from "../model/UserModel";
import { Postarchivo, GetBuckets } from "../helpers/s3";

export const GetIndex = async (req: Request, res: Response) => {
   
     /* const data = await GetBuckets();  */
    /* res.render('index',{
        buckets:data.Buckets
    }); */
   /* console.log(data) */
}

export const PostIndex = async (req: Request, res: Response) => {

    if (!req.files) return res.status(400).json({ msg: "No Hubo archivo seleccionado" })
    const Bucket = "btfundacionet"
    const file = req.files.file
    const { id } = req.params

    const result = await Postarchivo(Bucket, file)

    const data = await GetBuckets(req.files.file.name); 

    const usuario =  await users.findByPk(id)

    if(!usuario) return res.status(404).json("No se encontro un usuario con ese id")

    await usuario.update({"img": `${data}`});

    res.json(result)
}