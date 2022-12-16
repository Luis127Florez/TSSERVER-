"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('pruebamili', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of  | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
exports.default = db;
//# sourceMappingURL=connection.js.map