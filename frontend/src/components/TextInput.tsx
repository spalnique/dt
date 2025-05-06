import { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils/cn";

type Props = Omit<ComponentPropsWithRef<"input">, "type">;

export default function TextInput({ className, ...props }: Props) {
  return (
    <input
      type="text"
      className={cn(
        "flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
}
