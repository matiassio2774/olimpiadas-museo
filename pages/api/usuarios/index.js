//import { getConnection } from '../../../database/database.js';

export default function handler(req, res) {

    if (req.method === 'GET'){
        res.status(200).json({message: 'todas los usuarios'})
    }
  }
  