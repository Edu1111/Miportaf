import React from 'react'
import AboutImg from "../../assets/Metuu.jpg"
import CV from "../../assets/Hoja_vida.pdf"
import Info from './Info'
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info/>
          <p className="about__description">
            Frontend developer, I create web pages with user interface, I have years of experience and many clients are happy with the projects carried out 
          </p>
          <a href={CV} className="button button--flex" download="">Download CV
          
          </a>
        </div>
      </div>
    </section>
  )
}

export default About