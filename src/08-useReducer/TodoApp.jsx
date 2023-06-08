import { useEffect, useReducer } from "react";

import { todoReducer } from "./todoREducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id:  new Date().getTime(),
        description: 'Recolectar la pedra del alma',
        done: false
    },
    {
        id:  new Date().getTime() * 3,
        description: 'Recolectar la pedra del tiempo',
        done: false
    },
];

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || []);
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = { 
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }
  return (
    <>
        <h1>TodoApp (10), <small>pendientes: 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {/* Todo likst */}
                <TodoList todos={todos}/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                {/* TodoAdd onNewTodo(todo) */}
                {/* { id: new Date()..., description: '', done: false} */}
              <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
       
    </>
  )
}
