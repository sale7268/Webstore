import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    //jwt = jsonwebToken
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    //To encrypt data and make it secure
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};