import { useStore } from '@nanostores/react'
import { SubmitButton } from '@/components/shared/FormControls/SubmitButton'
import { InputField } from '@/components/shared/FormControls/InputField'
import { SingleSelectorField } from '@/components/shared/FormControls/SingleSelectorField'
import { fieldContext, formContext } from '@/lib/hooks/useFormContext'
import { createFormHook } from '@tanstack/react-form'
import { validationSchema } from './validationSchema'
import { bloodTypes, type BloodType } from '@/constants'
import { selectOptions } from '@/lib/utils'
import { SSNField } from '@/components/shared/FormControls/SSNField'
import { clientStore } from '@/lib/stores/clientStore'
import { apiClient } from '@/lib/apiClient'

const { useAppForm } = createFormHook({
  fieldComponents: {
    InputField,
    SingleSelectorField,
    SSNField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
})

export function DonorForm() {
  const queryClient = useStore(clientStore)
  const { mutate } = apiClient.patients.createPatient.useMutation(
    {
      onError: (error) => {
        console.error(error)
      },
    },
    queryClient,
  )

  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      bloodType: undefined as unknown as BloodType,
      age: undefined as unknown as number,
      ssn: '',
    },
    validators: {
      onSubmit: validationSchema,
    },
    onSubmit: ({ value }) => {
      mutate({ body: value })
    },
  })

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        await form.validate('submit')
        form.handleSubmit()
      }}
    >
      <h2 className="mb-4 text-4xl font-bold text-gray-900">
        Donor Registration
      </h2>

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
  )
}
