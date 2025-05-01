"use client";

import { useEffect, useRef, use } from "react";
import Link from "next/link";
import Image from "next/image";

import { Meal } from "@/types";

type MealListProps = {
  mealsPromise: Promise<Meal[]>;
};

export default function MealList({ mealsPromise }: MealListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const meals = use(mealsPromise);

  useEffect(() => {
    if (meals && ref.current) ref.current.style.opacity = "1";
  }, [meals]);

  return meals ? (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 transition-opacity duration-700"
    >
      {meals.map((meal) => (
        <Link
          href={`/meal/${meal.idMeal}`}
          key={meal.idMeal}
          className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
