import { Link } from 'react-router-dom'
import './styleHome.css'

const Home = () => {
  return (
    <div className="Home">
      <div className="sideBar">
        <div className="miniBar1"></div>
        <div className="miniBar2"></div>
        <div className="miniBar3"></div>
      </div>
      <main className="mainWrapper">
        <div className="contentWrapper">
          <div className="textWrapper">
            <h1 className="title">
              <span className="handEmoji">👋</span> BEM-VINDO(A)!
            </h1>
            <h2 className="subTitle">Encontre seu perfil no GitHub!</h2>
          </div>

          <button className="goToFinderButton">
            <Link to="/finder"> Go </Link>
          </button>
        </div>
        <footer className="copyright">
          <span className="copyrightText">
            Todos direitos reservados à Jeferson Franco
          </span>
        </footer>
      </main>
      {/* 
     
        <a> Finder </a>
      */}
    </div>
  )
}

export default Home

