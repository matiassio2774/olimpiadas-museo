import { getConnection } from '../../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    try {
      const { nombre, pass } = req.query
    
      const connection = await getConnection()
      const query = `
      SELECT nombre, pass, id_rol FROM usuarios WHERE usuarios.nombre = ? AND usuarios.pass = ?;
      `
      const user = await connection.query(query,[nombre, pass])
      //Si no existe el usuario mandamos 404
      if (user.length < 1) return res.status(404).json({message: 'user doesn`t exists'})
  
      res.json(user)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }


    res.status(200).json({ message: 'nombre y pass api' })
  }
}
