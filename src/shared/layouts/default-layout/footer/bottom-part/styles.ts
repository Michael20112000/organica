import { cn } from '@/shared/lib'

export const styles = {
  bottomPart: cn(
    'own-container border-golden/10 border-t py-60',
    'xl:grid xl:grid-cols-[1fr_490px_1fr] xl:items-center',
    '2xl:py-80',
  ),
  leaveFeedbackButton: cn('hidden', 'xl:flex xl:justify-self-end'),
}
