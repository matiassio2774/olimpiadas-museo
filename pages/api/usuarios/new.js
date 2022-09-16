import { getConnection } from '../../../database/database.js';

export default async function handler(req, res) {

  if (req.method === 'POST'){
      
    try {
      const { nombre, pass, id_rol, discapacidad } = req.body
      console.log(req.body)
    
      const connection = await getConnection()

      const query = `
        INSERT INTO usuarios (nombre, id_rol, pass, discapacidad) VALUES (?, ?, ?, ?);
        `
      const ress = await connection.query(query, [nombre, id_rol, pass , discapacidad])

      res.json(ress)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }

  }
}
