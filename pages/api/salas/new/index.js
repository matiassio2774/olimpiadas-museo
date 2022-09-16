import { getConnection } from "../../../../database/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { nombre, ubicacion, tamaño, exposicion, contenido } = req.body

      const connection = await getConnection()

      const query = `
        INSERT INTO salas (id_museo, nombre, ubicacion, tamaño, exposicion, contenido) VALUES (1, ?, ?, ?, ?, ?);
        `
      const ress = await connection.query(query, [nombre, ubicacion, tamaño, exposicion, contenido])
      console.log(ress)
      res.json(ress)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}
