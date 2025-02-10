import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const inputVariant = cva(
  'flex h-10 w-full border border-input border  bg-background rounded px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-70 md:text-sm',
  {
    variants: {
      variant: {
        default:
          'font-bodyMd text-bodyMd leading-bodyMd text-surface-brand placeholder:text-content-onNeutral-low',
      },
      state: {
        default:
          'ring-state-default-focus border-surface-xHigh focus-visible:border-state-default-focus',
        error:
          'ring-surface-danger border-surface-danger focus-visible:border-surface-danger text-content-onNeutral-danger',
        warning:
          'ring-surface-warning border-surface-warning focus-visible:border-surface-warning text-content-onNeutral-warning',
      },
      nativeStates: {
        focused: 'ring-[2px] focus-visible:ring-ring',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      state: 'default',
      size: 'default',
    },
  },
)

export type InputVariantsProps = VariantProps<typeof inputVariant>

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & InputVariantsProps
>(({ className, type, variant, size, state, nativeStates, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        inputVariant({ variant, size, state, nativeStates }),
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
