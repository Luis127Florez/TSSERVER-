import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const db = new Sequelize(String(process.env.NAME_DATABASE), String(process.env.USER_DATABASE), '', {
    host: 'localhost',
    dialect: 'mysql' /* one of  | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default db;