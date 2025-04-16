import { useStore } from '@nanostores/react'
import { validationSchema } from './validationSchema'
import { bloodTypes, type BloodType } from '@/constants'
import { selectOptions } from '@/lib/utils'
import { clientStore } from '@/lib/stores/clientStore'
import { apiClient } from '@/lib/apiClient'
import { useMutation } from '@tanstack/react-query'
import { DonorRegistrationSuccess } from './DonorRegistrationSuccess'
import { QueryErrorBoundary } from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { useAppForm } from './useAppForm'

export function BaseDonorForm() {
  const queryClient = useStore(clientStore)

  const { mutateAsync, isSuccess, data } = useMutation(
    {
      mutationFn: apiClient.patients.createPatient.mutate,
      onSuccess: ({ status }) => {
        if (status === 500)
          throw new Error('Something went wrong on the server')
      },
    },
    queryClient,
  )

  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      bloodType: '' as unknown as BloodType,
      age: '' as unknown as number,
      ssn: '',
    },
    validators: {
      onSubmit: validationSchema,
      onSubmitAsync: async ({ value }) => {
        const { status } = await mutateAsync({ body: value })

        if (status === 200) form.reset()
        else if (status === 409) {
          return {
            form: 'Duplicate SSN detected',
            fields: {
              ssn: [{ message: 'This SSN is already registered' }],
            },
          }
        }
      },
    },
  })

  if (isSuccess && data.status === 200)
    return <DonorRegistrationSuccess patient={data.body.patient} />

  return (
    <div className="mb-12 text-center">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          e.stopPropagation()
          await form.validate('submit')
          form.handleSubmit()
        }}
      >
        <form.AppField
          children={(field) => <field.InputField label="First name" />}
          name="firstName"
        />

        <form.AppField
          children={(field) => <field.InputField label="Last name" />}
          name="lastName"
        />

        <form.AppField
          children={(field) => (
            <field.InputField
              label="Age"
              type="number"
            />
          )}
          name="age"
        />

        <form.AppField
          children={(field) => <field.SSNField />}
          name="ssn"
        />

        <form.AppField
          children={(field) => (
            <field.SingleSelectorField
              label="Blood Type"
              options={selectOptions(bloodTypes)}
            />
          )}
          name="bloodType"
        />

        <form.AppForm>
          <form.SubmitButton label="Register" />
        </form.AppForm>
      </form>
    </div>
  )
}

export function DonorForm() {
  return (
    <QueryErrorBoundary>
      <BaseDonorForm />
    </QueryErrorBoundary>
  )
}
