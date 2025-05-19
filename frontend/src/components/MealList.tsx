"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";

import { Meal } from "@/types";

type MealListProps = {
  mealsPromise: Promise<Meal[] | null>;
};

export default function MealList({ mealsPromise }: MealListProps) {
  const meals = use(mealsPromise);

  return meals ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <Link
          href={`/meal/${meal.idMeal}`}
          key={meal.idMeal}
          className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
        >
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-80 object-cover"
            width={500}
            height={500}
            priority
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {meal.strMeal}
            </h2>
            <p className="text-gray-600 capitalize">{meal.strCategory}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="text-center">No meals found</div>
  );
}
