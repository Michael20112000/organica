import { cn } from '@/shared/lib'

export const styles = {
  mainDish: cn('order-first', 'xl:order-none'),
  circle: cn(
    'border-golden/10 flex-center inline-flex h-54 w-54 rounded-full border [&>svg]:ml-2',
  ),
  heading: cn('my-32'),
  content: cn('hidden', 'xl:block'),
  image: cn('h-360'),
  text: cn('mx-auto my-40 w-3/4 font-extralight'),
}
