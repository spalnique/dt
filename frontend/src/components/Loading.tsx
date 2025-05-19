import { ComponentProps } from "react";
import { cn } from "@/lib/utils/cn";
type LoadingFallbackProps = ComponentProps<"p"> & {
  message: string;
};

export default function Loading({
  message,
  className,
  ...props
}: LoadingFallbackProps) {
  return (
    <p className={cn("text-center", className)} {...props}>
      {message}
    </p>
  );
}
