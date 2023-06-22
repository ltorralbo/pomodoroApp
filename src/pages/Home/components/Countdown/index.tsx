import { differenceInSeconds } from 'date-fns'
import { ReactNode, useContext, useEffect } from 'react'
import { CycleContext } from '../../../../context/CycleContext'

import { CountdownContainer, Separator } from './styles'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'



export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle?.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)

  const secondsAmount = currentSeconds % 60
  const orange = '#e97c1f'

  // Caso a variavel minutesAmount não tenha 2 caracteres, o padStart adiciona 0 no inicio
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const timeString = `${minutes}:${seconds}`
  const percentage = Math.round((amountSecondsPassed / totalSeconds) * 100)

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - Timer Podoro`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate), // caso a o startDate for uma string, ele converte para uma data
        )

        // If cycle is finished
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          document.title = `Timer Podoro`
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  console.log(activeCycle)
  return (
    <>
      <CircularProgressbar value={percentage} text={timeString} styles={buildStyles({
        textColor: orange,
        pathColor: orange,
        tailColor:'rgba(255,255,255,.2)',
      })}/>
    </>
  )
}
