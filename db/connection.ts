import { Sequelize } from "sequelize";

const db = new Sequelize('pruebamili', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of  | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export default db;