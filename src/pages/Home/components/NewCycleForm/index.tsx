import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CycleContext } from '../../../../context/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Nombre de la tarea</label>
      <TaskInput
        id="task"
        placeholder=""
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">Tiempo</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
