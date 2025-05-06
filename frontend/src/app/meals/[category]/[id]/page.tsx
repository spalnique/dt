type AlternativeMealPageProps = {
  params: Promise<{ category: string; id: string }>;
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
