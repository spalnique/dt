import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = async (_req, res) => {
  res.status(404).json({ status: 404, message: 'Route not found' });
};

export default notFoundHandler;
