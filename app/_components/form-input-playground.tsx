'use client'
import { Label } from '@/components/ui/atoms/label'
import { Input, InputVariantsProps } from '@/components/ui/atoms/input'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import CheckboxWithLabel from '@/components/ui/checkbox-with-label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function FormInputPlayground() {
  const [state, setState] = useState<InputVariantsProps['state']>('default')
  const [disabled, setDisabled] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hasLabel, setHasLabel] = useState(false)
  const [isOptional, setIsOptional] = useState(false)
  const [hasDescription, setHasDescription] = useState(false)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-6 p-4 items-center">
        <Select
          value={state as string}
          onValueChange={(val) => setState(val as InputVariantsProps['state'])}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">default</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
          </SelectContent>
        </Select>

        <CheckboxWithLabel
          value={disabled}
          setValue={setDisabled}
          label="Disabled"
          id="disabled"
        />
        <CheckboxWithLabel
          value={focused}
          setValue={setFocused}
          label="Focused"
          id="focused"
        />
        <CheckboxWithLabel
          value={hasLabel}
          setValue={setHasLabel}
          label="Label"
          id="label"
        />
        <CheckboxWithLabel
          value={isOptional}
          setValue={setIsOptional}
          label="Optional"
          id="optional"
        />
        <CheckboxWithLabel
          value={hasDescription}
          setValue={setHasDescription}
          label="Description"
          id="description"
        />
      </div>

      <div className="flex flex-col gap-2 p-8 bg-white rounded-md">
        <div className="flex items-center gap-2">
          {hasLabel && (
            <Label
              className={cn(
                state === 'error' && 'text-content-onNeutral-danger',
              )}
            >
              Label
            </Label>
          )}

          {isOptional && (
            <span className="text-content-onNeutral-low font-labelSm text-labelSm leading-labelSm tracking-labelSm">
              Optional
            </span>
          )}
        </div>

        <Input
          state={state}
          disabled={disabled}
          nativeStates={focused ? 'focused' : undefined}
          required={!isOptional}
        />

        {hasDescription && (
          <p className={cn('text-sm text-content-onNeutral-medium')}>
            Input description
          </p>
        )}

        {state === 'error' && (
          <p
            className={cn('text-sm font-medium text-content-onNeutral-danger')}
          >
            Error message
          </p>
        )}
      </div>
    </div>
  )
}
