"use server";

import { Meal } from "@/types";
import { SearchParams } from "next/dist/server/request/search-params";

const nextUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/meals`;

export async function getMeals(
  searchParams: Promise<SearchParams>
): Promise<Meal[]> {
  const queryString = new URLSearchParams(
    (await searchParams) as Record<string, string>
  );

  const response = await fetch(`${nextUrl}?${queryString}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meals: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getMealWithSimilar(
  params: Promise<{ id: string }>
): Promise<{
  meal: Meal;
  similarMeals: Meal[];
}> {
  const { id } = await params;

  const response = await fetch(`${nextUrl}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meal: ${response.status} ${response.statusText}`
    );
  }

  const meal = await response.json();

  const similarResponse = await fetch(
    `${nextUrl}?category=${meal.strCategory}`,
    {
      cache: "no-store",
    }
  );

  if (!similarResponse.ok) {
    throw new Error(
      `Failed to fetch similar meals: ${similarResponse.status} ${similarResponse.statusText}`
    );
  }

  const similarMeals = await similarResponse.json();

  const filteredSimilarMeals = similarMeals.filter(
    (similarMeal: Meal) => similarMeal.idMeal !== meal.idMeal
  );

  return { meal, similarMeals: filteredSimilarMeals };
}
