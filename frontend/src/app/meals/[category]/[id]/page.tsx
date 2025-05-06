type AlternativeMealPageProps = {
  params: Promise<{ id: string; category: string }>;
};

export default async function AlternativeMealPage({
  params,
}: AlternativeMealPageProps) {
  const { category, id } = await params;
  return (
    <div>
      <p>{category}</p>
      <p>{id}</p>
    </div>
  );
}
