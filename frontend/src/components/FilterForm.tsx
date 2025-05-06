"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { FormEventHandler } from "react";

export default function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [[prevCriteria, prevValue] = []] = Array.from(searchParams.entries());

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("filterValue");
    const criteria = formData.get("filterType") || "name";

    if (value === prevValue && criteria === prevCriteria) return;

    const url = value ? `/?${criteria}=${value}` : "/";

    router.push(url);
  };

  const handleClear = () => {
    router.push("/");
  };

  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="filterValue"
            defaultValue={prevValue}
            placeholder="Search meals..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
          <button
            type="reset"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear
          </button>
        </div>

        <div
          key={searchParams.toString()}
          className="flex flex-wrap gap-4 items-center mx-auto w-fit"
        >
          <span className="text-gray-500">Filter by:</span>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="category"
              className="form-radio"
              defaultChecked={prevCriteria === "category"}
            />
            Category
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="country"
              className="form-radio"
              defaultChecked={prevCriteria === "country"}
            />
            Country
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="ingredient"
              className="form-radio"
              defaultChecked={prevCriteria === "ingredient"}
            />
            Ingredient
          </label>
        </div>
      </form>
    </div>
  );
}
