import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubititle from '../../assets/images/logo_sub.png'

const SideBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo"></img>
          <img src={LogoSubititle} alt="slobodan"></img>
        </Link>
      </div>
    </>
  )
}

export default SideBar
