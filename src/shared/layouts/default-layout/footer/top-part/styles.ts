import { cn } from '@/shared/lib'

export const styles = {
  topPart: cn('own-container text-center', 'xl:text-left'),
  container: cn(
    'border-golden/20 border-x',
    'xl:grid xl:grid-cols-[1fr_1.8fr_1fr] xl:gap-x-24 xl:border-x-0 xl:[grid-template-areas:"._logo_."_"first_map_second"]',
  ),
}
