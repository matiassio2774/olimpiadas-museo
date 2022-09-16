import mysql from 'promise-mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'olimpiadas',
  user: 'root',
  password: ''
})

export const getConnection = () => {
  return connection
}