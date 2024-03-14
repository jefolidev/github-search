import { BsSearch } from 'react-icons/bs'
import './search.style.css'
import { useState } from 'react'

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
  const [writeUser, setWriteUser] = useState('')

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (writeUser === '' && e.key === 'Enter') {
      alert('Digite algum nome.')
    } else if (e.key === 'Enter') {
      loadUser(writeUser)
    }
  }

  const handleSearchPress = () => {
    if (writeUser === '') {
      alert('Digite algum nome.')
    } else loadUser(writeUser)
  }
  return (
    <div className="Search">
      <input
        type="text"
        className="searchInput"
        placeholder="Digite o user"
        onChange={(e) => setWriteUser(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button className="searchButton" onClick={handleSearchPress}>
        <BsSearch className="iconSearch" />
      </button>
    </div>
  )
}

export default Search
