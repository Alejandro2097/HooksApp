import { useState } from "react";
import { UserContext } from "./UserContext";

const user = {
    id: 123,
    name: 'Alejandro Huertas',
    email: 'fernando@hotmail.es'
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({user});
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
