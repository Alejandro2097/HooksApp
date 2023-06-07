
export const TodoItem = ({todos}) => {
  return (
    <>
        <li key={todos.id} className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todos.description}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    </>
  )
}
