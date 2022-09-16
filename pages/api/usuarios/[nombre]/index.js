import { getConnection } from "../../../../database/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { nombre } = req.query;
      const connection = await getConnection();
      const query = `
      SELECT nombre FROM usuarios WHERE usuarios.nombre = ?;
      `;
      const user = await connection.query(query, [nombre]);

      //Si no existe el usuario mandamos 404
      if (user.length < 1)
        return res.status(404).json({ message: "user doesn`t exists" });

      console.log(user);
      res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
