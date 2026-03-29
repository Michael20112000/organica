import { cn } from '@/shared/lib'

type StyleFn = (...args: unknown[]) => string
type StyleValue = string | StyleFn

export const mergeExtraStyles = <TBase extends Record<string, StyleValue>>(
  base: TBase,
  extra?: Partial<TBase>,
): TBase => {
  const result = {} as TBase

  for (const k of Object.keys(base) as Array<keyof TBase>) {
    const b = base[k]
    const e = extra?.[k]

    if (typeof b === 'function' || typeof e === 'function') {
      const mergedFn: StyleFn = (...args: unknown[]) =>
        cn(
          typeof b === 'function' ? b(...args) : b,
          typeof e === 'function' ? e(...args) : e,
        )

      result[k] = mergedFn as TBase[typeof k]
      continue
    }

    result[k] = cn(b, e) as TBase[typeof k]
  }

  return result
}
