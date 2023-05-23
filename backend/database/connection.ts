import mysql, { Connection } from "mysql"

const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a30031990",
  database: "ZARAT"
})

export default connection