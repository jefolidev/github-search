// import { Link } from 'react-router-dom'
import { MdLocationPin } from 'react-icons/md'
import { UserProps } from '../../../../../types/user'
import './userPreview.style.css'

const UserPreview = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className="UserPreview">
      <img src={avatar_url} alt={login} className="profilePic" />
      <h2 className="userName"> {login} </h2>
      {location && (
        <p className="locationWrapper">
          <MdLocationPin />
          <span> {location} </span>
        </p>
      )}
      <div className="socialInfo">
        <div className="followers">
          <p> Seguidores: </p>
          <p> {followers} </p>
        </div>
        <div className="following">
          <p> Seguindo: </p>
          <p> {following} </p>
        </div>
      </div>
    </div>
  )
}

export default UserPreview
