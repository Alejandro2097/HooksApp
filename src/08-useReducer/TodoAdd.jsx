import { useRef } from "react";

export const TodoAdd = ({onNewTodo, todos}) => {
    const inputRef = useRef();
    console.log(inputRef)
    const handleSubmit = (event) => {
            event.preventDefault();
      };
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                placeholder="Que hay que hacer?"
                className="form-control"
                name="desc"
            />
            <button 
                className="btn btn-outline-primary mt-1"
                id="myAnchor"
                onClick={() => {
                    onNewTodo({
                        id:  new Date().getTime(),
                        description: inputRef.current.value,
                        done: false
                    });
                }}
            >
                Agregar
            </button>
        </form>
    </>
  )
}
