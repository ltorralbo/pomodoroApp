import { useContext } from 'react'
import { CycleContext } from '../../context/CycleContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CycleContext)
  console.log(cycles)

  return (
    <HistoryContainer>
      <h1>Historial</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {cycle.minutesAmount}
                    {cycle.minutesAmount > 1 ? ' minutos' : ' minuto'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
