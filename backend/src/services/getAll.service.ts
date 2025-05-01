import axiosInstance from '../axios';
import { Request } from 'express';

const getAll = async (query: Request['query']) => {
  const { name, ingredient, country, category } = query;

  let url = `/search.php?s=${name || ''}`;

  if (category) url = `/filter.php?c=${category}`;
  if (country) url = `/filter.php?a=${country}`;
  if (ingredient) url = `/filter.php?i=${ingredient}`;

  const { data } = await axiosInstance.get(url);

  return data.meals;
};

export default getAll;
