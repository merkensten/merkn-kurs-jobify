import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  // Check if user already exists
  const userAlredyExists = await User.findOne({ email });

  if (userAlredyExists) {
    throw new BadRequestError('User already exists');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
      _id: user._id,
    },
    token,
    location: user.location,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();

  // trick lösning för att dölja lösenordet i user objektet i response
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
  res.send('Login user');
};
const updateUser = async (req, res) => {
  res.send('update user');
};

// const deleteUser = async (req, res) => {
//   res.send('delete user');
// };

const deleteUser = async (req, res) => {
  try {
    const response = await User.findByIdAndDelete(req.params.userId);
    res.status(StatusCodes.OK).send({
      message: `User with email: ${response.email} deleted successfully!`,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured while trying to delete user with id:' +
        req.params.userId,
      error: err.message,
    });
  }
};

export { register, login, updateUser, deleteUser };
