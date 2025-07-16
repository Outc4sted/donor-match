import { createFormHook } from '@tanstack/react-form'

import { InputField } from '@/components/shared/FormControls/InputField'
import { SingleSelectorField } from '@/components/shared/FormControls/SingleSelectorField'
import { SSNField } from '@/components/shared/FormControls/SSNField'
import { SubmitButton } from '@/components/shared/FormControls/SubmitButton'
import { fieldContext, formContext } from '@/lib/hooks/useFormContext'

export const { useAppForm } = createFormHook({
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
