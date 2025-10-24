const mysql = require('mysql2'); //* *// 
const dotenv = require('dotenv'); //* proteger la base de datos *//

dotenv.config(); //* cargar variables de entorno *//


/* crear la conexion a la base de datos */
const connection = mysql.createConnection({ //* crear la conexion, el createConnection es para entornos locales o de prueba. y el createPool para entornos de produccion*//
  host: process.env.DB_HOST, //* host de la base de datos *//
  user: process.env.DB_USER, //* usuario de la base de datos *//
  password: process.env.DB_PASSWORD, //* contraseña de la base de datos *//
  database: process.env.DB_NAME, //* nombre de la base de datos *//
  /* port: process.env.DB_PORT || 3306, se puede o no poner un puerto*/

});

module.exports = connection; //* exportar la conexion, habilito a que sea llamado desde otro lado *//
