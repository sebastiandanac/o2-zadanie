'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormInput from '@/components/ui/form-input'

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email(),
  phone: z.string().optional(),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '+421',
    },
  })

  function onSubmit() {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        noValidate
      >
        <FormInput label="Full name" name="fullName" required />
        <FormInput
          label="Email"
          name="email"
          required
          input={{ type: 'email' }}
        />
        <FormInput label="Phone" name="phone" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
