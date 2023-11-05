import './index.scss'
// import LogoTitle from '../../assets/images/finalphoto.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Fahad
          <br />
          web developer
        </h1>
        <h2>Frontend Developer / React Expert</h2>
        <Link
          to="/contact"
          className="flat-button"
          dangerouslySetInnerHTML={{ __html: 'CONTACT ME' }}
        />
      </div>
    </div>
  )
}

export default Home
