import { Suspense } from "react";

import { Meal } from "@/types";

import { getMealWithSimilar } from "@/app/actions/meals";

import MealIngredients from "@/components/MealIngredients";
import SidebarMeals from "@/components/SidebarMeals";
import MealDetails from "@/components/MealDetails";
import Loading from "@/components/Loading";

type MealPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealPage({ params }: MealPageProps) {
  const { meal, similarMeals } = await getMealWithSimilar(params);

  const category = meal.strCategory;

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key as keyof Meal])
    .map((key, i) => {
      const ingredient = meal[key as keyof Meal].trim();
      const measure = meal[`strMeasure${i + 1}` as keyof Meal].trim();
      return { ingredient, measure };
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Suspense fallback={<Loading label="Loading recipe..." />}>
            <MealDetails meal={meal} />
            <MealIngredients ingredients={ingredients} />
          </Suspense>
        </div>

        <Suspense fallback={<Loading label="Loading similar meals..." />}>
          <SidebarMeals category={category} similarMeals={similarMeals} />
        </Suspense>
      </div>
    </div>
  );
}
