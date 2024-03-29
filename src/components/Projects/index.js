import './index.scss'
import React, { useState, useEffect } from 'react'
import intelitalk from './images/intelitalk.png'
import topcourses from './images/topcourses.jpg'
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
      <div className="container project-page" id="container">
      <div className="card">
          <div>
            <img className="project-image" src={intelitalk} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">InteliTalk- Chatbot</h2>
            <p className="description">
            Developed a frontend for chatbot application facilitating access to university information            
            for students and outsiders. The project highlights a user-friendly chat interface for
            seamless interaction and an intuitive admin panel for efficient database and student
            list management.
            </p>
               <a
              className="project-link"
              href="https://github.com/dev-saiful/InteliTalk/tree/frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Source Code
            </a>
          </div>
          </div>

          
        <div className="card">
          <div>
            <img className="project-image" src={topcourses} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">Top Courses - Course catalog application</h2>
            <p className="description">
              A dynamic course catalog application that interacts with an API to
              fetch and display various courses.The user interface includes some
              category buttons for easy course filtering. Implemented a toast
              feature, allowing users to 'like' and receive feedback on their
              preferred courses instantly.
            </p>
            <div className='buttons'>
            <a
              className="project-link"
              href="https://top-courses-eight-ecru.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
              <a
              className="project-link"
              href='https://github.com/Munaimun/TopCourses'
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Source Code
            </a>
            
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img className="project-image" src={viewfinder} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">ViewFinder - Tour Packages Application</h2>
            <p className="description">
              Developed a comprehensive Tour Packages Application, featuring
              detailed information on various tourist destinations. Implemented
              a user-friendly interface to showcase package details, enhancing
              the user experience - React, Javascript, HTML, Tailwind, CSS.
            </p>
            <a
              className="project-link"
              href="https://view-finder-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              className="project-link"
              href="https://github.com/Munaimun/ViewFinder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <div>
            <img className="project-image" src={quizjs} alt="Project" />
          </div>
          <div className="project-info">
            <h2 className="title">Quiz App</h2>
            <p className="description">
              Developed an interactive Quiz Application. The application enables
              users to participate in quizzes with instant feedback, showcasing
              a commitment to user-centric design and interactive functionality.
            </p>

             <a
              className="project-link"
              href="https://munaimun.github.io/Quiz_js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              className="project-link"
              href="https://github.com/Munaimun/Quiz_js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
