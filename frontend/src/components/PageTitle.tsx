"use client";

import { useSearchParams } from "next/navigation";

export default function PageTitle() {
  const searchParams = useSearchParams();

  const [criteria] = Array.from(searchParams.values());

  const pageTitle = criteria ? `${criteria} Meals` : "All Meals";

  return (
    <h1 className="text-3xl font-bold mb-8 text-center capitalize">
      {pageTitle}
    </h1>
  );
}
