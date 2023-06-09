import { LoadingQuote, Quote } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {

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
              <LoadingQuote/>
            ) : (
              <Quote quote={data.id} name={data.name}/>
            )
         }
         <button 
                className="btn btn-primary" 
                disabled={isLoading}
                onClick={() => increment()}
                >
          Next quote
         </button>
    </>
  )
}
