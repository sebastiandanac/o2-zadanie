'use client'
import * as React from 'react'
import { Input } from '@/components/ui/atoms/input'
import { CircleAlert, CircleHelp } from 'lucide-react'

type Props = {}

export default function InputVariants({}: Props) {
  const states = [
    {
      title: 'Basic',
      input: <Input />,
    },
    {
      title: 'Focused',
      input: <Input nativeStates="focused" value="Value" onChange={() => ''} />,
    },
    {
      title: 'Disabled',
      input: <Input disabled />,
    },
    {
      title: 'Error',
      input: (
        <div className="relative">
          <Input state="error" value="Wrong value" onChange={() => ''} />
          <div className="absolute flex size-10 pointer-events-none items-center justify-center right-0 top-0">
            <CircleAlert size={16} className="text-content-onNeutral-danger" />
          </div>
        </div>
      ),
    },
    {
      title: 'Warning',
      input: (
        <div className="relative">
          <Input
            state="warning"
            value="Questionable value"
            onChange={() => ''}
          />
          <div className="absolute flex size-10 pointer-events-none items-center justify-center right-0 top-0">
            <CircleHelp size={16} className="text-content-onNeutral-warning" />
          </div>
        </div>
      ),
    },
    {
      title: 'With placeholder',
      input: <Input placeholder="Placeholder" />,
    },
    {
      title: 'With value',
      input: <Input value="Value" onChange={() => ''} />,
    },
  ]

  return (
    <div className="flex flex-col w-full gap-6">
      {states.map((item, i) => (
        <div className="flex flex-col gap-2 " key={i}>
          <span>{item.title}</span>
          {item.input}
        </div>
      ))}
    </div>
  )
}
