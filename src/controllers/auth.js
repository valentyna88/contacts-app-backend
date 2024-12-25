import * as authServices from '../services/auth.js';

export const registerController = async (req, res) => {
  const data = await authServices.register(req.body);

  const userObject = data.toObject();
  delete userObject.password;

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: userObject,
  });
};
