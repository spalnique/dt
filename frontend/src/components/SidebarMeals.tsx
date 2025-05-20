"use client";

import { use } from "react";
import Link from "next/link";

import { Meal } from "@/types";

type SidebarMealsProps = {
  categoryPromise: Promise<string>;
  categoryMealsPromise: Promise<Meal[]>;
};

export default function SidebarMeals({
  categoryPromise,
  categoryMealsPromise,
}: SidebarMealsProps) {
  const category = use(categoryPromise);
  const meals = use(categoryMealsPromise);

  return (
    <div className="lg:w-1/3 animate-fade-in">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Other &quot;{category.toLowerCase()}&quot; meals
        </h2>
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <Link
                href={`/meal/${meal.idMeal}`}
                className="block text-gray-700 px-3 py-1 w-full hover:bg-gray-200 hover:shadow-sm transition-all duration-250 rounded-lg"
              >
                {meal.strMeal}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={`/?category=${category.toLowerCase()}`}
          className="block text-center mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-250"
        >
          View all {category} meals
        </Link>
      </div>
    </div>
  );
}
