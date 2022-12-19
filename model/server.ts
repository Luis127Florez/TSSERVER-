import express, { Application } from 'express';
import cors from 'cors';
import UserRoutes from "../routes/UserRoutes";
import solicitudRouter from '../routes/SolicitudesRoutes';
import unionU_S from '../routes/UnionRouters';
import index from '../routes/indexRouter';
import db from '../db/connection';
import  fileUpload from 'express-fileupload';

class Server {
    private App: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/users',
        solicitudes: '/api/solicitudes',
        unionU_S: '/api/unionU_S',
        index: '/api/index'
    };

    constructor() {
        this.App = express();
        this.port = process.env.PORT || '8000';
        this.connection()
        this.middelwares();
        this.router();
    };

    middelwares() {
        this.App.use(cors());
        this.App.use(express.json());
        this.App.use(express.static('public'));
        this.App.use(express.urlencoded({ extended: true }));
        this.App.use(express.urlencoded());
        this.App.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            debug : true
        }));
    };

    async connection() {
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    router() {
        this.App.use(this.apiPath.usuarios, UserRoutes);
        this.App.use(this.apiPath.solicitudes, solicitudRouter);
        this.App.use(this.apiPath.unionU_S, unionU_S);
        this.App.use(this.apiPath.index, index);

    };

    listen() {
        this.App.listen(this.port, () => {
            console.log(`el puesto esta corriendo ${this.port}`);

        });
    };
};

export default Server;