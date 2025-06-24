"use client"
import { Search, Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"
import { Button, type ButtonProps } from "@heroui/button"

export type SubmitButtonProps = Omit<ButtonProps, "type">
export function SubmitButton({ children, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button
      aria-label="Найти"
      radius="md"
      title="Найти"
      isIconOnly
      color="primary"
      type="submit"
      isLoading={pending}
      spinner={
        <span className="absolute inset-0 grid place-items-center bg-inherit">
          <Loader2 strokeWidth={3} className="size-5 animate-spin" />
        </span>
      }
      {...props}
    >
      {children ? children : <Search className="size-4" strokeWidth={3} />}
    </Button>
  )
}
