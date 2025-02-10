import * as React from 'react'
import { Checkbox } from '@/components/ui/atoms/checkbox'

type Props = {
  value: boolean
  setValue: (value: boolean) => void
  label?: string
  id: string
}

export default function CheckboxWithLabel({
  value,
  setValue,
  label,
  id,
}: Props) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        checked={value}
        onCheckedChange={(val) =>
          typeof val == 'boolean' ? setValue(val) : ''
        }
        id={id}
      />
      <div className="grid gap-1.5 leading-none">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    </div>
  )
}
