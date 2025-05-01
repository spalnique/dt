import { Router } from 'express';
import getMealsController from '../controllers/getMeals.controller';
import getMealByIdController from '../controllers/getMealById.controller';
import errorWrapper from '../helpers/errorWrapper';

const router = Router();

router.get('/', errorWrapper(getMealsController));
router.get('/:id', errorWrapper(getMealByIdController));

export default router;
