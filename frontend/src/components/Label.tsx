import { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils/cn";

type Props = ComponentPropsWithRef<"label"> & { text: string };

export default function Label({ children, className, text, ...props }: Props) {
  return (
    <label className={cn("flex items-center gap-2", className)} {...props}>
      {children}
      {text}
    </label>
  );
}
