import Link from "next/link";

interface MealIngredientsProps {
  ingredients: Record<string, string>[];
}

export default function MealIngredients({ ingredients }: MealIngredientsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ingredients.map((item, index) => (
          <Link
            key={index}
            href={`/?ingredient=${item.ingredient}`}
            className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="font-medium first-letter:uppercase">
              {item.ingredient}
            </span>
            <span className="text-gray-600 first-letter:uppercase">
              {item.measure}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
