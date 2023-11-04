import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={twMerge(
        'bg-zinc-50/10 animate-pulse rounded-md',
        props.className,
      )}
    />
  )
}
