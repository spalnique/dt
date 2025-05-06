import { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils/cn";

type Props = Omit<ComponentPropsWithRef<"input">, "type">;

export default function RadioInput({ className, ...props }: Props) {
  return (
    <input className={cn("form-radio", className)} type="radio" {...props} />
  );
}
