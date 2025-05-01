import { RequestHandler } from 'express';

import getAll from '../services/getAll.service';

const getMealsController: RequestHandler = async (req, res) => {
  const meals = await getAll(req.query);

  res.json(meals);
};

export default getMealsController;
