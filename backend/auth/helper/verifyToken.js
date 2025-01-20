import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ message: 'Access Denied! No Token Provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 
    req.user = decoded; 
    next(); 
  } catch (error) {
    res.status(401).send({ message: 'Invalid Token' });
  }
};

export default verifyToken; 