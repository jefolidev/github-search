import Search from './search/Search'
import { UserProps } from '../../../types/user'
import { useState } from 'react'

import './finder.style.css'
import UserPreview from './user/preview/UserPreview'
import UserRepositorie from './user/repositories/UserRepositorie'

const Finder = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    const { avatar_url, login, location, followers, following, html_url } = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      html_url,
    }

    setUser(userData)
  }
  return (
    <div className="Finder">
      <aside className="finderSideBar">
        <div className="wrapperSearch">
          <Search loadUser={loadUser} />
        </div>
        <span className="previewTitle">Preview</span>
        <div className="previewContent">
          {user && <UserPreview {...user} />}
        </div>
      </aside>
      <section id="repos">{user && <UserRepositorie {...user} />} </section>
    </div>
  )
}

export default Finder
