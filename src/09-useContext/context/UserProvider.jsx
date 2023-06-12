import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Alejandro Huertas',
    email: 'fernando@hotmail.es'
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
