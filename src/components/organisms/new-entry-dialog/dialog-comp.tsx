import { RadioInput } from '@/components/atoms/radio-input/radio-comp'
import { TextInput } from '@/components/atoms/text-input/input-comp'
import { useContext } from 'react'
import { DialogTitle } from './dialog-styles'
import { Button } from '@/components/atoms/button/button-comp'
import { Form } from '@/components/atoms/form/form-comp'
import { DateInput } from '@/components/atoms/date-input/date-comp'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NumberInput } from '@/components/atoms/number-input/input-comp'
import { EntriesContext } from '@/contexts/entries-context'

const createEntryFormSchema = z.object({
  amount: z.number().positive(),
  description: z.string(),
  date: z.string(),
  type: z.string(),
})

export const NewEntryDialog = () => {
  const { newEntry } = useContext(EntriesContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createEntryFormSchema),
  })

  const createEntry = (data: any) => {
    newEntry(data)
  }

  const newEntryTypes = [
    {
      name: 'type',
      id: 'income',
      label: 'Income',
      value: 'income',
    },
    {
      name: 'type',
      id: 'expense',
      label: 'Expense',
      value: 'expense',
    },
  ]

  return (
    <div className={`flex flex-col gap-4`}>
      <span className={DialogTitle()}>New entry</span>
      <Form onSubmit={handleSubmit(createEntry)}>
        <RadioInput
          error={errors.type}
          items={newEntryTypes}
          register={register}
        />
        <NumberInput
          placeholder="Amount"
          error={errors.value}
          name="amount"
          register={register}
        />

        <TextInput
          placeholder="Description"
          type="text"
          error={errors.description}
          name="description"
          register={register}
        />
        <DateInput name="date" register={register} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}
