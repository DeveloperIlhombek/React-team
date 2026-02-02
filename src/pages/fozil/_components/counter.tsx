import type { JSX } from 'react'

interface Props {
  onIncrement: () => void
  value: string
  color: string
  hoverColor: string
}

const Counter = ({
  onIncrement,
  value,
  color,
  hoverColor,
}: Props): JSX.Element => {
  return (
    <>
      <button className={`${color} hover:${hoverColor}`} onClick={onIncrement}>
        {value}
      </button>
    </>
  )
}

export default Counter