import { FormEvent, useState } from "react"
import { useUser } from "./useUser"

import '../styles/searchbar.scss'

export function SearchBar() {
  const [value, setValue] = useState('')
  const { handleSearchUser } = useUser()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    handleSearchUser(value)
    setValue('')


  }


  return (
    <div className="container">

      <div className="searchBar">
        <img src="/assets/GHLogo.svg" alt="GitHub Explorer Logo" />
        <form onSubmit={handleSubmit}>
          <input placeholder="user name" type="text" value={value}
            onChange={event => setValue(event.target.value)} />
          <button type="submit"> <img src="/assets/lupa.svg" alt="lupa" /></button>
        </form>
      </div>
    </div>
  )
}