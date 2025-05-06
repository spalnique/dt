"use client";

import { FormEventHandler } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import Label from "@/components/Label";
import RadioInput from "@/components/RadioInput";

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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-8 p-4 bg-gray-50 rounded-lg"
    >
      <div className="flex gap-4">
        <TextInput
          name="filterValue"
          defaultValue={prevValue}
          placeholder="Search meals..."
        />
        <Button type="submit">Search</Button>
        <Button type="reset" onClick={handleClear}>
          Clear
        </Button>
      </div>

      <div
        key={searchParams.toString()}
        className="flex flex-wrap gap-4 items-center mx-auto w-fit"
      >
        <span className="text-gray-500">Filter by:</span>
        <Label text="Category">
          <RadioInput
            name="filterType"
            value="category"
            defaultChecked={prevCriteria === "category"}
          />
        </Label>
        <Label text="Country">
          <RadioInput
            name="filterType"
            value="country"
            defaultChecked={prevCriteria === "country"}
          />
        </Label>
        <Label text="Ingredient">
          <RadioInput
            name="filterType"
            value="ingredient"
            defaultChecked={prevCriteria === "ingredient"}
          />
        </Label>
      </div>
    </form>
  );
}
