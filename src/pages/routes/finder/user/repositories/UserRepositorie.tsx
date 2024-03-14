/* eslint-disable no-extra-semi */
import { useEffect, useState } from 'react'
import { UserProps } from '../../../../../types/user'
import './userRepositorie.style.css'

type RepositoryProps = {
  id: number
  name: string
  login: string
  description?: string
  html_url: string
  stargazers_count: number
  watchers_count: number
  language?: string
}

const UserRepositorie = ({ login }: UserProps) => {
  const [repos, setRepos] = useState<RepositoryProps[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((res) => res.json())
      .then((data: RepositoryProps[]) => setRepos(data))
      .catch((err) => console.error(err))
  }, [login])

  return (
    <div className="wrapperRepo">
      {repos.map((repo) => (
        <div key={repo.id} className="repoBox">
          <div className="infoWrapper">
            <p className="repoName"> Nome: {repo.name} </p>
            <p>
              ⭐ {repo.stargazers_count} | 👀 {repo.watchers_count}
            </p>
            <p>{repo.language && <p> 🔤 {repo.language}</p>}</p>
          </div>
          <div className="buttonWrapper"></div>
          <a href={repo.html_url} target="_blank">
            <button className="repoButton"> Site do Repositório </button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default UserRepositorie
