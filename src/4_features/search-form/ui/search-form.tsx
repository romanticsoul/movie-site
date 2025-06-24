import Form, { type FormProps } from "next/form"
import { cn } from "@heroui/theme"
import { Input, type InputProps } from "@heroui/input"
import { SubmitButton, type SubmitButtonProps } from "./submit-button"

type OmitsFormProps = Omit<FormProps, "action">
type OmitsInputProps = Omit<InputProps, "name" | "classNames">

export type SearchFormProps = OmitsFormProps & {
  inputProps?: OmitsInputProps
  buttonProps?: SubmitButtonProps
}

export function SearchForm({ className, inputProps, buttonProps, ...props }: SearchFormProps) {
  return (
    <Form action="/search" className={cn("flex gap-2", className)} {...props}>
      <Input
        name="q"
        radius="md"
        classNames={{
          input: "font-medium",
          helperWrapper: "hidden group-data-[has-helper=true]:hidden",
        }}
        {...inputProps}
      />
      <SubmitButton {...buttonProps} />
    </Form>
  )
}
