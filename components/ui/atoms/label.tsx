'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva(
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-content-onNeutral-xxHigh',
  {
    variants: {
      size: {
        default: 'text-base font-labelMd leading-labelMd tracking-labelMd',
        sm: 'text-sm font-labelSm leading-labelSm tracking-labelSm',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type LabelVariants = VariantProps<typeof labelVariants>

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelVariants
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
