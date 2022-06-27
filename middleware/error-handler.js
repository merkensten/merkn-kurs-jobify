import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Something went wrong try agian later',
  };
  res
    .status(defaultError.statusCode)
    .json({ msg: 'there was an Error', error: error });
  next();
};

export default errorHandlerMiddleware;
