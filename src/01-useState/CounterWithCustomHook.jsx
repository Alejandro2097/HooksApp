import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, increment} = useCounter()

  return (
    <>
        <div>Counter With hook: {counter}</div>
        <hr/>
        <button className="btn btn-primary" onClick={() =>  increment()}>+1</button>
        <button className="btn btn-primary">Reset</button>
        <button className="btn btn-primary">-1</button>
    </>
  )
}
