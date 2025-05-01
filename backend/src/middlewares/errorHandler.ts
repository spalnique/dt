import { ErrorRequestHandler } from 'express';
import { isHttpError } from 'http-errors';

const errorHandler: ErrorRequestHandler = (err, _req, res) => {
  console.error(err);
  if (isHttpError(err)) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
      data: err,
    });
  }
};

export default errorHandler;
