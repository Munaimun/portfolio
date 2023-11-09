import './index.scss'
import LogoTitle from '../../assets/images/radison.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['F', 'a', 'h', 'a', 'd']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className="letterClass">H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m</span>{' '}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer | Expert is in React</h2>
        <Link
          to="/contact"
          className="flat-button"
          dangerouslySetInnerHTML={{ __html: 'CONTACT ME' }}
        />
      </div>
      <div className="image-container">
        <img src={LogoTitle} alt="Logo" className="profile" />
      </div>
    </div>
  )
}

export default Home
