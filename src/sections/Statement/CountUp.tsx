import { useCountUp } from './useCountUp'

interface CountUpProps {
  value: number
  suffix?: string
}

export function CountUp({ value, suffix = '' }: CountUpProps) {
  const numberRef = useCountUp<HTMLSpanElement>(value)

  return (
    <>
      <span className="visually-hidden">{`${value}${suffix}`}</span>
      <span aria-hidden="true">
        <span ref={numberRef}>0</span>
        {suffix}
      </span>
    </>
  )
}
