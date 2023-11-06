import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

import React from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm an ambitious front-end developer actively seeking a position
          within an established IT company. I am eager to contribute my skills
          and expertise to work on challenging and diverse projects while
          staying at the forefront of the latest technologies.
        </p>
        <p>
          {' '}
          I possess a quiet confidence, a natural curiosity, and a perpetual
          commitment to enhancing my skills by tackling design challenges one at
          a time.
        </p>
        <p>
          {' '}
          I prioritize family, thrive on sports excitement, find solace in
          books, and I'm tech obsessed.
        </p>
      </div>
    </div>
  )
}

export default About
