import { getConnection } from "../../../../database/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { limite, tiempo, nombre_guia, nombre, descripcion } = req.body

      const connection = await getConnection()

      const query = `
        INSERT INTO visitas (limite, tiempo, cantidad_de_personas, id_guia, nombre, descripcion) VALUES (?, ?, 0, (SELECT id_guia FROM guias WHERE guias.nombre = ?), ?, ?);
        `
      const ress = await connection.query(query, [limite, tiempo, nombre_guia, nombre, descripcion])
      console.log(ress)
      res.json(nombre)
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
  }
}
