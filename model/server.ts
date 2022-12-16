import express, {Application} from 'express';
import cors from 'cors';
import UserRoutes from "../routes/UserRoutes";
import solicitudRouter from '../routes/SolicitudesRoutes';
import unionU_S from '../routes/UnionRouters';
import db from '../db/connection';


class Server {
    private App: Application;
    private port: string;
    private apiPath = {
        usuarios:'/api/users',
        solicitudes:'/api/solicitudes',
        unionU_S:'/api/unionU_S'
    };

    constructor() {
        this.App = express();
        this.port = process.env.PORT || '8000';
        this.connection()
        this.middelwares();
        this.router();
    };

    middelwares(){
        this.App.use(cors());
        this.App.use(express.json());
        this.App.use(express.static('public'));
    };

    async connection(){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
    router(){ 
        this.App.use(this.apiPath.usuarios, UserRoutes);
        this.App.use(this.apiPath.solicitudes,  solicitudRouter);
        this.App.use(this.apiPath.unionU_S,  unionU_S);
    };

    listen(){
        this.App.listen(this.port , ()=>{
            console.log(`el puesto esta corriendo ${this.port}`);
            
        });
    };
};

export default Server;