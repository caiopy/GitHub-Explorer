import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/profile.scss'
import { useUser } from './useUser'

interface Repository {
  name: string
  description: string
  html_url: string
}

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



export function Profile() {
  const { user } = useUser()

  return (
    <section className="profileContainer">

      <img src={user.avatar_url} alt="vatar" />
      {user.name ? <h3>{user.name}</h3> : <h3>{user.login}</h3>}



    </section>
  )
}