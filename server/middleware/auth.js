import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  // Hämta in headers från request, det är authorization headern som är intressant i detta fallet
  const authHeaders = req.headers.authorization;

  // Kolla om authorization headern inte är satt eller om den inte startar med "Bearer", om det inte gör det så kastar vi ett error
  if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
    throw new UnAuthenticatedError('Autentication is required');
  }
  // Authorization: Bearer <token>
  // split metoden används för att få ut själva token från responsen, splitten skes på mellanslag vilket funkar då headern är: Bearer <token>
  const token = authHeaders.split(' ')[1];

  // Använda en trycatch för att kolla om vi får en token, om vi inte får en token så kastar vi ett error
  try {
    // Hämta ut payloaden från tokenen, jwt.verify tar in token och secret som argument
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Sätta req.user till user id:t som vi får från payloaden
    req.user = { userId: payload.userId };
    
    // Vidare till nästa middleware
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Autentication is required');
  }
};

export default auth;
