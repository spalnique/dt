"use server";

import { Meal } from "@/types";

const apiBaseURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/meals`;

export async function getMeals(
  searchParams?: Record<string, string>
): Promise<Meal[] | null> {
  const url = `${apiBaseURL}?${new URLSearchParams(searchParams)}`;

  const response = await fetch(url, { next: { revalidate: 120 } });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meals: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getMealById(id: string): Promise<Meal> {
  const response = await fetch(`${apiBaseURL}/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch meal: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}

export async function getCategoryMeals(category: string): Promise<Meal[]> {
  const response = await fetch(`${apiBaseURL}?category=${category}`, {
    next: {
      revalidate: 120,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch category meals: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}
