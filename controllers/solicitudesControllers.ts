import { Request, Response } from "express";
import solicitudes from "../model/solicitudesModel";
import user from "../model/UserModel";

export const GetSolicitud = async (req: Request, res: Response) => {
    const solicitud = await solicitudes.findAll()
    res.json(solicitud)
}


export const GetSoliciudById = async (req: Request, res: Response) => {
    const { id } = req.params
    const solicitud = await solicitudes.findByPk(id)
    res.json(solicitud);
}



export const PostSolicitud = async (req: Request, res: Response) => {
    const { body } = req
    const solicitud = new solicitudes(body)  
    await solicitud.save();
    res.json(solicitud)
}

export const PutSolicitud = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {
        const solicitud = await solicitudes.findByPk(id)

        if (!solicitud) {
            return res.status(404).json({ msg: 'usuario no existe' })
        }
        await solicitud.update(body)
        res.json(solicitud)

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'habla con el admin'
        })
    }

}
export const DeleteSolicitud = async (req: Request, res: Response) => {
    const { id } = req.params

    const solicitud = await solicitudes.findByPk(id)
    console.log(solicitud)
    if (!solicitud) {
        return res.status(404).json({
            msg: 'No exite un usuario con el id ingresado'
        })
    }
    await solicitud.destroy();
    res.json({
        msg: 'solicitud eliminada'
    })
}

export const GetUnionU_S = async (req: Request, res: Response) => {
    try {
        solicitudes.belongsTo(user, {
            foreignKey: "idUser",
            targetKey: "idUser",
        })

        const UnionU_S = await solicitudes.findAll({ include: [{ model: user, as: "user" }] })
        res.json(UnionU_S)
    } catch (error) {
        console.log(error)
    }

}
export const GetSoliciudByIduser = async(req: Request , res: Response)=>{
    const {iduser} = req.params
    
    try{
        const solicitud = await solicitudes.findAll({
            where:{
                iduser: iduser
            }
        })
        
        res.json(solicitud)
        console.log(solicitud)
        
    } catch( error ){
        res.status(500).json("hable con el admin")
        console.log(error)
        
    }

}