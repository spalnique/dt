import { RequestHandler } from 'express';
import getById from '../services/getById.service';

const getMealByIdController: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const meal = await getById(id);

  res.json(meal);
};

export default getMealByIdController;
