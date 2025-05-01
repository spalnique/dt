type IngredientKey = `strIngredient${number}`;
type MeasureKey = `strMeasure${number}`;

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
} & Record<IngredientKey, string> &
  Record<MeasureKey, string>;
