import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], onDeleteTodo}) => {
  return (
    <>
        <ul className="list-group">
            {
                // Todo item
                // eslint-disable-next-line react/prop-types
                todos.map(todo => (
                    <TodoItem key={todo.id } todo={todo} onDeleteTodo={id => onDeleteTodo(id)}/>
                ))
            }
        </ul>
    </>
  )
}
