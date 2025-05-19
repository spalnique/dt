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
  const meal = getMealById(id);
  const category = meal.then((data) => data.strCategory.toLowerCase());
  const categoryMeals = getCategoryMeals(await category);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Suspense fallback={<Loading message="Loading recipe..." />}>
            <MealDetails mealPromise={meal} />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <Loading className="lg:w-1/3" message="Loading similar meals..." />
          }
        >
          <SidebarMeals
            categoryPromise={category}
            categoryMealsPromise={categoryMeals}
          />
        </Suspense>
      </div>
    </div>
  );
}
