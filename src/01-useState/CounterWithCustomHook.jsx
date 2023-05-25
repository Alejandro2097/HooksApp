import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, increment, reset, decrement} = useCounter()

  return (
    <>
        <div>Counter With hook: {counter}</div>
        <hr/>
        <button className="btn btn-primary" onClick={() =>  increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  )
}
