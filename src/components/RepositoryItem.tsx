interface RepoItemProps {
    repo: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepoItemProps) {
    return (
        <li>
            <strong>{props.repo.name}</strong>
            <p>{props.repo.description}</p>

            <a href={props.repo.html_url}>
                {props.repo.html_url}
            </a>
        </li>
    )
}