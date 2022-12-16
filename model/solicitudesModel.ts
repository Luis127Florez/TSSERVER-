import { DataTypes } from 'sequelize';
import db from '../db/connection';

const solicitud = db.define('solicitudes', {
    NombreEmpresa: {
        type: DataTypes.STRING
    },
    nitEmpresa:{
        type: DataTypes.NUMBER
    },
    EstadiaEnEmpresa: {
        type: DataTypes.STRING
    },
    iduser:{
        type: DataTypes.NUMBER
    },
    Monto: {
        type: DataTypes.NUMBER
    },
    estado:{
        type: DataTypes.BOOLEAN
    }
    
});

export default solicitud;

