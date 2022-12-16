import { DataTypes } from 'sequelize';
import db from '../db/connection';

const user = db.define('users', {
    idUser: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    Apellidos: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    TipoDocumento: {
        type: DataTypes.STRING
    },
    NumCedula: {
        type: DataTypes.NUMBER
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    Telefono: {
        type: DataTypes.NUMBER
    },
    Edad: {
        type: DataTypes.NUMBER
    },
    sexo: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
    Contraseña: {
        type: DataTypes.STRING
    }
});

export default user;

