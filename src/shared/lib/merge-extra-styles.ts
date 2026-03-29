import { cn } from '@/shared/lib'

export const mergeExtraStyles = <
  TBase extends Record<string, string | ((...args: unknown[]) => string)>,
>(
  base: TBase,
  extra?: Partial<TBase>,
): typeof base => {
  const entries = (Object.keys(base) as Array<keyof TBase>).map(k => {
    const b = base[k]
    const e = extra?.[k]

    if (typeof b === 'function' || typeof e === 'function') {
      return [
        k,
        (...args: unknown[]) => {
          return cn(
            typeof b === 'function' ? b(...args) : b,
            typeof e === 'function' ? e(...args) : e,
          )
        },
      ]
    }

    return [k, cn(b, e)]
  })

  return Object.fromEntries(entries)
}
