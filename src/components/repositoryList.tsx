import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'
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



export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const { user } = useUser()

    useEffect(() => {
        fetch(`https://api.github.com/users/${user.login}/repos`)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [user.login])

    return (
        <section className="repository-list">
            <h1>Repositories List</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}