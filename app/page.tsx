import ContactForm from '@/app/_components/contact-form'
import * as React from 'react'
import InputVariants from '@/app/_components/input-variants'
import FormInputPlayground from '@/app/_components/form-input-playground'

export default function Home() {
  return (
    <div className="flex flex-col gap-16 container mx-auto px-4 py-16">
      <div className="p-16 bg-[#004aed]">
        <div className="max-w-lg w-full mx-auto flex flex-col text-white gap-4">
          <h2 className="text-5xl font-bold">o2 Zadanie</h2>
          <p className="text-2xl font-medium">Sebastian Danáč</p>
        </div>
      </div>

      <div className="p-16 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-8">
          <h2 className="text-4xl font-bold">Basic Input</h2>
          <InputVariants />
        </div>
      </div>

      <div className="p-16 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-8">
          <h2 className="text-4xl font-bold">Form Input playground</h2>
          <FormInputPlayground />
        </div>
      </div>

      <div className="p-16 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-8">
          <h2 className="text-4xl font-bold">Contact form example</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
