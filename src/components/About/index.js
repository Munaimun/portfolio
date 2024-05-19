import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
  faBootstrap,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="about-container my-about">
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="my-details">
            I prioritize family, thrive on sports excitement, find solace in
            books, and I'm tech obsessed.
          </p>
          <ul className="skills">
            <h2 className="skill-header">Skills:</h2>
            <div className="skill-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Agile Method</li>
              <li>Git & Github</li>
              <li>HTML & CSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>C & C++ [Basic]</li>
            </div>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5FD3F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="yellow" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="orange" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#1796E6" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="purple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
