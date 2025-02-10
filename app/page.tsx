import ContactForm from '@/app/_components/contact-form'
import * as React from 'react'
import InputVariants from '@/app/_components/input-variants'
import FormInputPlayground from '@/app/_components/form-input-playground'

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 container mx-auto pb-10 sm:py-16">
      <div className="px-4 py-14 bg-[#004aed]">
        <div className="max-w-lg w-full mx-auto flex flex-col text-white sm:gap-4">
          <h2 className="text-2xl sm:text-5xl font-bold">o2 Zadanie</h2>
          <p className="text-xl sm:text-2xl font-medium">Sebastian Danáč</p>
        </div>
      </div>

      <div className="px-4 py-14 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-4xl font-bold">Basic Input</h2>
          <InputVariants />
        </div>
      </div>

      <div className="px-4 py-14 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Form Input playground
          </h2>
          <FormInputPlayground />
        </div>
      </div>

      <div className="px-4 py-14 bg-[#F2F7FB]">
        <div className="max-w-lg w-full mx-auto flex flex-col gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Contact form example
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
