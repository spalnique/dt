"use client";

import { Meal } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type MealDetailsProps = { meal: Meal };

export default function MealDetails({ meal }: MealDetailsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.style.opacity = "1";
  }, [meal]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row gap-8 mb-8 opacity-0 transition-opacity duration-700"
    >
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
  );
}
