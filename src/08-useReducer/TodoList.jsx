import { TodoItem } from "./TodoItem";

export const TodoList = ({todos}) => {
    console.log(todos, 'llegando reina')
  return (
    <>
        <ul className="list-group">
            {
                // Todo item
                // eslint-disable-next-line react/prop-types
                todos.map(todo => (
                    <TodoItem key={todo.id } todos={todo}/>
                ))
            }
        </ul>
    </>
  )
}
