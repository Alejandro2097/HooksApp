import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { counter , increment  } = useCounter();
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log({data, isLoading, hasError})
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
         {
          isLoading
            ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            ) : (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{data.base_experience}</p>
                <footer className="blockquote-footer">{data.name}</footer>
              </blockquote>
            )
         }
         <button className="btn btn-primary" onClick={() => increment()}>
          Next quote
         </button>
    </>
  )
}
