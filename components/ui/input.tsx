import { Input } from '@/components/ui/atoms/input'
import { Label } from '@/components/ui/atoms/label'

type Props = {
  label?: string
}

export default function MainInput({ label }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center gap-2">
        {label && <Label htmlFor="email">Email</Label>}
        <span className="text-content-onNeutral-low font-labelSm text-labelSm leading-labelSm tracking-labelSm">
          Optional
        </span>
      </div>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
