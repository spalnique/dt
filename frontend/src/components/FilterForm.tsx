"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler } from "react";

export default function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currFilterValue] = Array.from(searchParams.values());

  const handleFilterSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const filterValue = formData.get("filterValue");

    if (!filterValue) return;
    const filterType = formData.get("filterType");

    const url = `/?${filterType || "name"}=${filterValue}`;

    router.push(url);
  };

  const handleResetFilter = () => {
    router.push("/");
  };

  return (
    <div className="mb-8 p-4 bg-gray-50 rounded-lg">
      <form onSubmit={handleFilterSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="filterValue"
            defaultValue={currFilterValue}
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
            onClick={handleResetFilter}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-4 items-center mx-auto w-fit">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="category"
              className="form-radio"
              defaultChecked={!!searchParams.get("category")}
            />
            Category
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="country"
              className="form-radio"
              defaultChecked={!!searchParams.get("country")}
            />
            Country
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="filterType"
              value="ingredient"
              className="form-radio"
              defaultChecked={!!searchParams.get("ingredient")}
            />
            Ingredient
          </label>
        </div>
      </form>
    </div>
  );
}
