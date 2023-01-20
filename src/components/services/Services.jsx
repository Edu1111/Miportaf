import React, { useState } from 'react';
import "./services.css";
import Absoluteb from "../../assets/proyects/absolute.png";
import Crud from "../../assets/proyects/crudd.jpg";
import Proct from "../../assets/proyects/Protected.jpg";

const Services = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) =>{
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">These are some of my projects</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-smile-wink services__icon"></i>
            <h3 className="services__title">Absolute beauty and<br/> Api crypto</h3>
          </div>

          <span className="services__button " onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"  }>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Absolute beauty</h3>
              <p className="services__modal-description">A beauty website whit a API of crypto</p>
              <img src={Absoluteb} alt="" />
              <div>
                <div>
                  <a href="https://edu1111.github.io/Absolute_Beauty/" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Demo</button>
                  </a>
                  <a href="https://github.com/Edu1111/Absolute_Beauty" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Code</button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-user-square services__icon"></i>
            <h3 className="services__title">Log in whit<br /> Crud</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"  }>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Log in whit authentication and whit a crud</h3>
              <p className="services__modal-description">You can prove it whit localhost</p>

              <img src={Crud} alt="" />
              <div>
                <div>
                  <a href="https://github.com/Edu1111/login_backend" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Code</button>
                  </a>
                  <a href="https://github.com/Edu1111/login_backend" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-padlock services__icon"></i>
            <h3 className="services__title">Protected <br /> Routes</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"  }>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Protected Routes</h3>
              <p className="services__modal-description">If you are not logged, you can´t see the sections</p>
              <img src={Proct} alt="" />
              <div>
                <div>
                  <a href="https://edu1111.github.io/Protected/" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Demo</button>
                  </a>
                  <a href="https://github.com/Edu1111/Protected" target="_blank" rel="noopener noreferrer">
                    <button className="work__button">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Services