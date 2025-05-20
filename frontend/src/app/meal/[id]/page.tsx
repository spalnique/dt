import { Suspense } from "react";

import { getCategoryMeals, getMealById } from "@/app/actions/meals";

import SidebarMeals from "@/components/SidebarMeals";
import MealDetails from "@/components/MealDetails";
import Loading from "@/components/Loading";

type MealPageProps = {
  params: Promise<{ id: string }>;
};

export default async function MealPage({ params }: MealPageProps) {
  const { id } = await params;

  const mealPromise = getMealById(id);
  const categoryPromise = mealPromise.then((meal) => meal.strCategory);
  const categoryMealsPromise = getCategoryMeals(await categoryPromise);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Suspense fallback={<Loading message="Loading recipe..." />}>
            <MealDetails mealPromise={mealPromise} />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <Loading className="lg:w-1/3" message="Loading similar meals..." />
          }
        >
          <SidebarMeals
            categoryPromise={categoryPromise}
            categoryMealsPromise={categoryMealsPromise}
          />
        </Suspense>
      </div>
    </div>
  );
}
