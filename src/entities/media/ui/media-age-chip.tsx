import { Chip, type ChipProps } from "@heroui/chip"
import { Media } from "../model/types"
import { Skeleton } from "@heroui/skeleton"

export type MediaAgeChipProps = ChipProps & {
  age: Media["rating"]["age"]
}

export function MediaAgeChip({ age, ...props }: MediaAgeChipProps) {
  if (!age) return null

  return (
    <Chip
      radius="md"
      variant="solid"
      color="primary"
      classNames={{ content: "font-semibold" }}
      {...props}
    >
      {age}+
    </Chip>
  )
}

export function MediaAgeChipSkeleton() {
  return <Skeleton className="h-7 w-11 rounded-large" />
}
