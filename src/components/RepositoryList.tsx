import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import "../styles/repositories.scss"

// https://api.github.com/orgs/rocketseat/repos
// https://api.github.com/users/JeovaniAgostini/repos

interface Repo {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repoList, setRepoList] = useState<Repo[]>([])

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(response => response.json())
            .then(data => setRepoList(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repos</h1>

            <ul>
                {repoList.map((repoItem) => (
                    <RepositoryItem key={repoItem.name} repo={repoItem} />
                ))}
            </ul>
        </section>
    )
}