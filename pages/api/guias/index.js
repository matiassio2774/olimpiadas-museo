import { getConnection } from "../../../database/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await getConnection();
      const query = `
      SELECT nombre FROM guias;
      `;
      const guias = await connection.query(query);

      console.log(guias);
      //Si no existe el guia mandamos 404
      if (guias.length < 1)
        return res.status(404).json({ message: "guias doesn`t exists" });

      res.json(guias);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
