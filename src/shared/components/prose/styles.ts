import { cn } from '@/shared/lib'

export const styles = {
  prose: (extra?: string) =>
    cn(
      'own-container max-w-1100 py-80',
      // h1
      '[&>h1]:border-golden/40 [&>h1]:mb-40 [&>h1]:border-b [&>h1]:pb-40 [&>h1]:text-center',
      // h2
      '[&>h2]:mt-50 [&>h2]:mb-30',
      // p
      '[&>p]:my-30',
      // ul & li
      '[&>ul]:my-30 [&>ul]:list-disc [&>ul]:pl-20',
      '[&>ul>li:not(:last-child)]:mb-16',
      // b
      '[&_b]:font-semibold',
      // extra
      extra,
    ),
}
