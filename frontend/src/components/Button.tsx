import { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils/cn";

type Props = ComponentPropsWithRef<"button">;

export default function Button({ children, className, ...props }: Props) {
  let buttonColor: string;

  switch (props.type) {
    case "reset":
      buttonColor = "bg-gray-500 hover:bg-gray-600";
      break;
    case "submit":
      buttonColor = "bg-blue-500 hover:bg-blue-600";
      break;
    default:
      buttonColor = "bg-blue-300 hover:bg-blue-400";
  }

  return (
    <button
      className={cn(
        "px-4 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        buttonColor,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
