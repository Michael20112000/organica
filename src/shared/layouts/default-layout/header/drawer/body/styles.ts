import { cn } from '@/shared/lib'

export const styles = {
  body: cn(
    'hide-scrollbar grow overflow-auto',
    'xl:grid xl:grid-cols-[1fr_auto] xl:gap-100',
  ),
  image: cn('hidden min-h-900', 'xl:block'),
  content: cn('py-70'),
}
