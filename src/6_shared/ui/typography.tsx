import { tv, type VariantProps } from "@heroui/theme"

const titleVariants = tv({
  variants: {
    variant: {
      h1: "mb-4 text-5xl font-black",
      h2: "mb-4 text-3xl font-bold",
    },
  },
})

type TitleProps = Omit<VariantProps<typeof titleVariants>, "variant"> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    variant: keyof typeof titleVariants.variants.variant
  }

export function Title(props: TitleProps) {
  const Component: keyof JSX.IntrinsicElements = props.variant
  return <Component className={titleVariants(props)} {...props} />
}

const paragraphVariants = tv({
  base: "text-pretty my-4",
  variants: {
    color: {
      default: "text-foreground",
      muted: "text-foreground/60",
    },
    size: {
      default: "text-medium",
      lg: "text-large",
    },
  },
  defaultVariants: {
    color: "default",
    size: "default",
  },
})

type ParagraphProps = VariantProps<typeof paragraphVariants> & React.ComponentProps<"p">

export function Paragraph(props: ParagraphProps) {
  return <p className={paragraphVariants(props)} {...props} />
}
