import { getConnection } from '../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const connection = await getConnection()
      const query = `SELECT * FROM visitas;`
      const visitas = await connection.query(query)
      res.json(visitas)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
