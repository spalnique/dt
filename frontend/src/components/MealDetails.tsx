"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";

import MealIngredients from "@/components/MealIngredients";

import { Meal } from "@/types";

type MealDetailsProps = { mealPromise: Promise<Meal> };

export default function MealDetails({ mealPromise }: MealDetailsProps) {
  const meal = use(mealPromise);

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key as keyof Meal])
    .map((key, i) => {
      const ingredient = meal[key as keyof Meal].trim();
      const measure = meal[`strMeasure${i + 1}` as keyof Meal].trim();
      return { ingredient, measure };
    });

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 mb-8 animate-fade-in">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
          width={500}
          height={500}
          priority
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
          <Link
            href={`/?country=${meal.strArea}`}
            className="text-white mb-4 inline-block bg-gray-400 hover:bg-gray-600 transition-all duration-250 rounded-lg px-2 py-1"
          >
            {meal.strArea}
          </Link>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-line">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
      <MealIngredients ingredients={ingredients} />
    </>
  );
}
