type LoadingFallbackProps = {
  label: string;
};

export default function Loading({ label }: LoadingFallbackProps) {
  return <p className="text-center">{label}</p>;
}
