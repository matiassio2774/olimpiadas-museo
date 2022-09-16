import { getConnection } from '../../../database/database';

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const { id } = req.query
      const connection = await getConnection()
      const query = `SELECT G.nombre AS 'guia', V.id_visita, V.tiempo, V.cantidad_de_personas, V.limite, S.nombre, S.ubicacion, S.tamaño, S.exposicion, S.contenido
      FROM guias G
      INNER JOIN visitas V
      ON G.id_guia = V.id_guia
      INNER JOIN rel_visitas_salas RVS
      ON V.id_visita = RVS.id_visita
      INNER JOIN salas S
      ON RVS.id_sala = S.id_sala
      WHERE V.id_visita = ?
      `
      const visitas = await connection.query(query, [id])

      res.json(visitas)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}