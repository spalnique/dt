import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";

import FilterForm from "@/components/FilterForm";
import MealList from "@/components/MealList";
import PageTitle from "@/components/PageTitle";
import Loading from "@/components/Loading";

import { getMeals } from "./actions/meals";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const meals = await getMeals(searchParams);

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterForm />
      <PageTitle />
      <Suspense fallback={<Loading label="Loading meals..." />}>
        <MealList meals={meals} />
      </Suspense>
    </div>
  );
}
