import mysql, { Connection } from "mysql"

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ZARAT"
})

export default connection;