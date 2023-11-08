import './index.scss'
import React, { useState, useEffect } from 'react'
import viewfinder from './images/viewfinder.jpg'
import quizjs from './images/quiz.jpg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="about-container">
      <div className="container project-page">
        <div className="card">
          <div>
            <img className="project-image" src={viewfinder} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">ViewFinder</h2>
            <p className="list">
              Technologies:
              <ol>
                <li>1. React for dynamic and responsive UI</li>
                <li>2. React hooks, </li>
                <li>3. Tailwind</li>
              </ol>
            </p>
            <a
              className="project-link"
              href="https://view-finder-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img className="project-image" src={quizjs} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">Quiz App</h2>
            <p className="list">
              Technologies:
              <ol>
                <li>1. JavaScript</li>
                <li>2. CSS3 </li>
                <li></li>
              </ol>
            </p>
            <a
              className="project-link"
              href="https://munaimun.github.io/Quiz_js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
