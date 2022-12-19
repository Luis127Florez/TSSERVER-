"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("../routes/UserRoutes"));
const SolicitudesRoutes_1 = __importDefault(require("../routes/SolicitudesRoutes"));
const UnionRouters_1 = __importDefault(require("../routes/UnionRouters"));
const indexRouter_1 = __importDefault(require("../routes/indexRouter"));
const connection_1 = __importDefault(require("../db/connection"));
/* import  fileUpload from 'express-fileupload'; */
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/api/users',
            solicitudes: '/api/solicitudes',
            unionU_S: '/api/unionU_S',
            index: '/api/index'
        };
        this.App = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.connection();
        this.middelwares();
        this.router();
    }
    ;
    middelwares() {
        this.App.use((0, cors_1.default)());
        this.App.use(express_1.default.json());
        this.App.use(express_1.default.static('public'));
        this.App.use(express_1.default.urlencoded({ extended: true }));
        this.App.use(express_1.default.urlencoded());
        /*  this.App.use(fileUpload({
             useTempFiles : true,
             tempFileDir : '/tmp/'
         })); */
    }
    ;
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    router() {
        this.App.use(this.apiPath.usuarios, UserRoutes_1.default);
        this.App.use(this.apiPath.solicitudes, SolicitudesRoutes_1.default);
        this.App.use(this.apiPath.unionU_S, UnionRouters_1.default);
        this.App.use(this.apiPath.index, indexRouter_1.default);
    }
    ;
    listen() {
        this.App.listen(this.port, () => {
            console.log(`el puesto esta corriendo ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map