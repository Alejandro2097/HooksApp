import { useReducer } from "react";

import { todoReducer } from "./todoREducer";

const initialState = [
    {
        id:  new Date().getTime(),
        description: 'Recolectar la pedra del alma',
        done: false
    },
    {
        id:  new Date().getTime() * 3,
        description: 'Recolectar la pedra del alma',
        done: false
    },
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {

    }
  return (
    <>
        <h1>TodoApp (10), <small>pendientes: 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {/* Todo likst */}
                <ul className="list-group">
                    {
                        // Todo item
                        todos.map(todo => {
                            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center"> Item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                {/* TodoAdd onNewTodo(todo) */}
                {/* { id: new Date()..., description: '', done: false} */}
                <form>
                    <input
                        type="text"
                        placeholder="Que hay que hacer?"
                        className="form-control"
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
       
    </>
  )
}
