'use client'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/atoms/input'
import * as React from 'react'
import { CircleAlert } from 'lucide-react'

type Props = {
  name: string
  label?: string
  placeholder?: string
  input?: {
    placeholder?: string
    type: React.ComponentProps<'input'>['type']
  }
  description?: string
  required?: boolean
}

export default function FormInput({
  name,
  label,
  input,
  description,
  required,
}: Props) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            {!required && (
              <span className="text-content-onNeutral-low font-labelSm text-labelSm leading-labelSm tracking-labelSm">
                Optional
              </span>
            )}
          </div>

          <FormControl>
            <div className="relative">
              <Input
                aria-invalid={fieldState.error ? 'true' : 'false'}
                aria-describedby={
                  fieldState.error ? `error-${name}` : undefined
                }
                id={name}
                aria-label={input?.placeholder || label || name}
                required={required}
                placeholder={input?.placeholder}
                type={input?.type ? input.type : 'text'}
                state={fieldState.error ? 'error' : 'default'}
                className="pr-10"
                {...field}
              />

              {fieldState.error && (
                <div className="absolute flex size-10 pointer-events-none items-center justify-center right-0 top-0">
                  <CircleAlert
                    size={16}
                    className="text-content-onNeutral-danger"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage id={`error-${name}`} />
        </FormItem>
      )}
    />
  )
}
