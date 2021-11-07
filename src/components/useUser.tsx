import { useContext } from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';



interface User {
  login: string;
  name: string;
  bio: string;
  location: string;
  url: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
}


interface UserProviderProps {
  children: ReactNode
}
interface UserContextData {
  user: User
  handleSearchUser: (value: string) => void
}

const UserContext = createContext<UserContextData>(
  {} as UserContextData
)

export function UserProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<User>({} as User);
  const [onUserChange, setOnUserChange] = useState('caiopy');

  function handleSearchUser(value: string) {
    setOnUserChange(value)
  }

  useEffect(() => {
    api.get(`/${onUserChange}`)
      .then(response => setUser(response.data))
  }, [onUserChange]);



  return (
    <UserContext.Provider value={{ user, handleSearchUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  return context
}