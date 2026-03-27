import { cn } from '@/shared/lib'

export const styles = {
  fillImage: (extra?: string) =>
    cn('relative h-200 [&>img]:object-cover', extra),
}
